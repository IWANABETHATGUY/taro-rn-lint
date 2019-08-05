import { parse, isCGS } from '../utils'
import RNStylesRules from '../RNStyleRules'
import cssToRN from 'taro-css-to-react-native'

import {
  TextDocument,
  DiagnosticCollection,
  Range,
  Position,
  DiagnosticSeverity,
  workspace,
  Disposable,
  languages,
  Diagnostic,
  window,
} from 'vscode'
import { Root, Rule, Container } from 'postcss'

interface RNStyleRule {
  [prop: string]: {
    value: string
    description: string
    androidOnly?: boolean
    iosOnly?: boolean
  }
}

export default class TaroRnLintControler {
  private _compatibleRN: boolean
  private _disposable: Disposable
  private _collection: DiagnosticCollection
  private _rules: RNStyleRule

  constructor() {
    this._compatibleRN = false
    this._rules = RNStylesRules
    this._collection = languages.createDiagnosticCollection('taro-rn-lint')
    let subscriptions: Disposable[] = []

    workspace.onDidSaveTextDocument(
      textDocument => {
        this.updateDiagnostics(textDocument)
      },
      this,
      subscriptions,
    )

    window.onDidChangeActiveTextEditor(
      editor => {
        this.updateDiagnostics(editor.document)
      },
      this,
      subscriptions,
    )

    this._disposable = Disposable.from(...subscriptions)
  }

  public changeCompatible(value: boolean) {
    this._compatibleRN = value
    if (value) {
      let document = window.activeTextEditor.document
      this.updateDiagnostics(document)
    } else {
      this._collection.clear()
    }
  }

  dispose() {
    this._disposable.dispose()
  }

  private updateDiagnostics(document: TextDocument): void {
    if (
      !this._compatibleRN ||
      ['scss', 'css'].indexOf(document.languageId) === -1 ||
      !document
    ) {
      return
    }
    const file: string = document.getText()
    parse(file).then(postcssResult => {
      const result: Diagnostic[] = []
      console.time('diagnose')
      this.checkGroupSelectorError(postcssResult.root, result)
      this.checkPropAndValueError(postcssResult.root, result)
      console.timeEnd('diagnose')
      this._collection.set(document.uri, result)
    })
  }

  private checkGroupSelectorError(root: Root, result: Diagnostic[]) {
    root['isLegal'] = true
    root.walkRules(rule => {
      let [isLegal, preRuleSelector] = LegalRuleHelper(rule)
      rule['isLegal'] = isLegal
      if (!rule['isLegal']) {
        selectorPositionHelper(rule, preRuleSelector).forEach(range => {
          result.push({
            message: `由于您开启了taro-rn兼容模式，组合选择器 不能使用`,
            // range: new Range(
            //   new Position(
            //     rule.source.start.line - 1,
            //     rule.source.start.column - 1,
            //   ),
            //   new Position(
            //     rule.source.start.line - 1,
            //     rule.source.end.column - 1 + rule.selector.length,
            //   ),
            // ),
            range,
            severity: DiagnosticSeverity.Error,
          })
        })
      }
    })
  }

  private checkPropAndValueError(root: Root, result: Diagnostic[]) {
    root.walkDecls(decl => {
      const prop = decl.prop
      const rule = this._rules[prop]
      if (!rule) {
        result.push({
          message: `由于您开启了taro-rn兼容模式，'${prop}'属性 不能使用`,
          range: new Range(
            new Position(
              decl.source.start.line - 1,
              decl.source.start.column - 1,
            ),
            new Position(decl.source.end.line - 1, decl.source.end.column - 1),
          ),
          severity: DiagnosticSeverity.Error,
        })
      } else {
        try {
          cssToRN(`.foo{${prop}:${decl.value}}`)
        } catch (err) {
          console.log(err)
          result.push({
            message: `由于您开启了taro-rn兼容模式，'${
              decl.prop
            }'属性 取值不能为${decl.value}
              取值可以为${rule.value},${rule.description}
              `,
            range: new Range(
              new Position(
                decl.source.start.line - 1,
                decl.source.start.column - 1,
              ),
              new Position(
                decl.source.end.line - 1,
                decl.source.end.column - 1,
              ),
            ),
            severity: DiagnosticSeverity.Error,
          })
        }
      }
    })
  }
}

function findPreviousRule(rule: Rule): Rule | undefined {
  let cur: Container = rule
  while (cur.parent) {
    cur = cur.parent
    if (cur.type === 'rule') {
      return cur
    }
  }
  return undefined
}

/**
 *
 * 判断是否是一个合法的Rule,并且返回上一个rule的selector
 *
 * @param {Rule} rule
 * @returns {[boolean, string]}
 */
function LegalRuleHelper(rule: Rule): [boolean, string] {
  let preRule = findPreviousRule(rule)
  let result: boolean = false
  if (preRule === undefined) {
    result = !isCGS(rule.selector)
  } else if (preRule['isLegal'] === true) {
    result =
      rule.selector.indexOf('&') !== -1 &&
      !isCGS(rule.selector.replace(/\&/g, preRule.selector))
  }
  return [result, preRule ? preRule.selector : '']
}

function selectorPositionHelper(rule: Rule, preRuleSelector: string): Range[] {
  let result: Range[] = []
  // const reg = /[^\s]+(.*?)[^\s]+/
  const reg = /[^\s]([^{]+)|[a-zA-Z]/
  const selector = rule.selector
  const lineAt = rule.source.start.line - 1
  const columnAt = rule.source.start.column - 1
  if (preRuleSelector === '') {
    selector.split('\n').forEach((line, index) => {
      if (isCGS(line)) {
        const match = line.match(reg)
        if (match) {
          result.push(
            new Range(
              new Position(lineAt + index , match.index + (index === 0 ? columnAt : 0)),
              new Position(lineAt + index , match.index + match[0].length + (index === 0 ? columnAt : 0)),
            ),
          )
        }
      }
    })
  }
   else {
    selector.split('\n').forEach((line, index) => {
        const match = line.match(reg)
         match && result.push(
          new Range(
            new Position(lineAt + index , match.index + (index === 0 ? columnAt : 0)),
            new Position(lineAt + index , match.index + match[0].length + (index === 0 ? columnAt : 0)),
          ),
        )
    })
  }

  return result
}
