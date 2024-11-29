# Markdown Preview ECharts Support

这是一个增强型的 Markdown 预览 VS Code 插件，专门针对包含 ECharts 图表的 Markdown 文档提供实时预览功能。

## 功能特点

- 支持标准 Markdown 语法的实时预览
- 针对 ECharts 代码块提供实时图表渲染
- 支持 2D 和 3D 图表的实时渲染
- 使用 ECharts 框架进行图表可视化
- 支持实时更新，编辑代码时图表即时刷新

## 使用方法

1. 在 Markdown 文档中创建一个 ECharts 代码块：

### 2D 图表示例

```echarts
{
    "title": {
        "text": "示例图表"
    },
    "xAxis": {
        "type": "category",
        "data": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    "yAxis": {
        "type": "value"
    },
    "series": [{
        "data": [820, 932, 901, 934, 1290, 1330, 1320],
        "type": "line"
    }]
}
```

### 3D 图表示例

```echarts
{
    "grid3D": {},
    "tooltip": {},
    "xAxis3D": {
        "type": "value",
        "name": "蛋白质"
    },
    "yAxis3D": {
        "type": "value",
        "name": "纤维"
    },
    "zAxis3D": {
        "type": "value",
        "name": "钠"
    },
    "series": [{
        "type": "scatter3D",
        "data": [[3.2, 5.6, 7.8], [4.5, 6.7, 8.9], [5.1, 7.2, 9.3]],
        "symbolSize": 12,
        "itemStyle": {
            "borderWidth": 1,
            "borderColor": "rgba(255,255,255,0.8)"
        }
    }]
}
```

2. 使用 VS Code 的预览功能查看文档
3. ECharts 代码块会自动渲染为交互式图表
4. 对于 3D 图表，支持以下交互：
   - 鼠标拖拽旋转视角
   - 滚轮缩放
   - 右键平移

## 支持的图表类型

- 2D 图表：折线图、柱状图、饼图、散点图等
- 3D 图表：3D 散点图、3D 柱状图、3D 曲面图等

## 安装

1. 打开 VS Code
2. 转到扩展市场
3. 搜索 "Markdown Preview ECharts Support"
4. 点击安装

## 主题

插件使用 ECharts 默认主题进行图表渲染。

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License 