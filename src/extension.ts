import * as vscode from 'vscode';
import { EChartsContentProvider } from './echartsProvider';

export function activate(context: vscode.ExtensionContext) {
    console.log('Markdown Preview ECharts Support 插件已激活');

    // 注册自定义预览内容提供程序
    const provider = new EChartsContentProvider(context);
    console.log('ECharts 内容提供程序已注册');
    
    // 注册命令
    let disposable = vscode.commands.registerCommand('markdown-preview-echarts-support.preview', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const uri = editor.document.uri;
            console.log('正在预览文件:', uri.fsPath);
            // 创建预览
            vscode.commands.executeCommand(
                'markdown.showPreview',
                uri
            ).then(() => {
                console.log('预览窗口已打开');
            });
        } else {
            console.log('没有打开的编辑器');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    console.log('Markdown Preview ECharts Support 插件已停用');
} 