import { parse } from '../utils'
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
    parse(file).then(res => {
      const result: Diagnostic[] = []
      console.time('diagnose')
      res.root.walkDecls(decl => {
        const prop = decl.prop;
        const rule = this._rules[prop];
        if (!rule) {
          result.push({
            message: `由于您开启了taro-rn兼容模式，'${prop}'属性 不能使用`,
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
      console.timeEnd('diagnose')
      this._collection.set(document.uri, result)
    })
  }
}
