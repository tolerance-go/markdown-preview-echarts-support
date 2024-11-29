# ECharts Markdown Preview

为 VS Code 的内置 markdown 预览添加 [ECharts](https://echarts.apache.org/zh/index.html) 支持。

## 使用方法
在 markdown 中使用 `echarts` 代码块创建图表:

~~~markdown
```echarts
{
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}
```
~~~

This Extensions is a fork of Geek Learning's [Graphviz Markdown Preview](https://marketplace.visualstudio.com/items?itemName=geeklearningio.graphviz-markdown-preview).