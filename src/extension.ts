import * as vscode from 'vscode'
import TaroRnLintControler from './diagnostic'

export function activate(context: vscode.ExtensionContext) {
  let taroLint = new TaroRnLintControler()

  // context.subscriptions.push(disposable);
  context.subscriptions.push(taroLint)
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'taroRNLint.open RN compatible mode',
      () => {
        taroLint.changeCompatible(true)
      },
      this,
    ),
    vscode.commands.registerCommand(
      'taroRNLint.close RN compatible mode',
      () => {
        taroLint.changeCompatible(false)
      },
      this,
    ),
  )
}

// this method is called when your extension is deactivated
export function deactivate() {}
