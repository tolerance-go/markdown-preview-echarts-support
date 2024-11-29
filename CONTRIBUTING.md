# 开发指南

本文档将指导您如何设置开发环境并开始开发这个 VS Code 插件。

## 开发环境设置

1. 确保已安装以下工具：
   - Node.js (推荐 v14 或更高版本)
   - Git
   - Visual Studio Code

2. 克隆仓库：
   ```bash
   git clone https://github.com/your-username/markdown-preview-echarts-support.git
   cd markdown-preview-echarts-support
   ```

3. 安装依赖：
   ```bash
   npm install
   ```

## 开发流程

1. 启动开发模式：
   ```bash
   npm run watch
   ```
   这将启动 TypeScript 编译器的监视模式，自动编译变更的文件。

2. 调试插件：
   - 在 VS Code 中按 F5 启动新的 VS Code 实例（扩展开发主机）
   - 在新窗口中打开任何 Markdown 文件
   - 使用命令面板（Ctrl+Shift+P）运行 "Preview Markdown with ECharts" 命令

## 项目结构

```
markdown-preview-echarts-support/
├── src/                      # 源代码目录
│   ├── extension.ts          # 插件入口文件
│   ├── echartsProvider.ts    # ECharts 内容提供程序
│   └── echartsPlugin.ts      # Markdown-it 插件实现
├── package.json              # 项目配置文件
├── tsconfig.json            # TypeScript 配置
└── README.md                # 项目说明文档
```

## 调试技巧

1. 控制台输出：
   - 在扩展开发主机中，使用 `console.log()` 的输出会显示在 "调试控制台" 中
   - 可以使用 VS Code 的断点功能进行调试

2. 重新加载：
   - 修改代码后，在扩展开发主机中按 Ctrl+R（macOS: Cmd+R）重新加载窗口

3. 测试：
   - 创建一个包含 ECharts 代码块的 Markdown 文件进行测试
   - 确保测试不同类型的图表（2D、3D）

## 提交代码

1. 创建新分支：
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. 提交更改：
   ```bash
   git add .
   git commit -m "feat: 添加新特性描述"
   ```

3. 推送分支：
   ```bash
   git push origin feature/your-feature-name
   ```

4. 创建 Pull Request

## 编码规范

- 使用 TypeScript 编写代码
- 遵循项目现有的代码风格
- 保持代码简洁清晰
- 添加必要的注释
- 使用有意义的变量和函数名

## 常见问题

1. 编译错误：
   - 确保所有依赖都已正确安装
   - 检查 TypeScript 配置是否正确

2. 预览不显示：
   - 检查 Markdown 文件中的 ECharts 代码块语法是否正确
   - 确保 JSON 格式有效

3. 调试模式无法启动：
   - 检查是否有其他 VS Code 实例正在调试
   - 尝试清除 VS Code 的扩展缓存

## 获取帮助

如果您在开发过程中遇到问题：
1. 查看项目 Issues
2. 创建新的 Issue
3. 在 Pull Request 中讨论

欢迎贡献代码，让这个插件变得更好！ 