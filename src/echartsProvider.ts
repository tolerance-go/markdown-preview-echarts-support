import * as vscode from 'vscode';
import * as MarkdownIt from 'markdown-it';

export class EChartsContentProvider {
    private context: vscode.ExtensionContext;

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }

    // 处理 markdown-it 实例
    extendMarkdownIt(md: MarkdownIt) {
        return md.use(require('./echartsPlugin'));
    }
} 