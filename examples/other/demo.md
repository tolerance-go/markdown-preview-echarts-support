# ECharts 图表示例

## 1. 基础折线图

```echarts
{
    "title": {
        "text": "基础折线图"
    },
    "tooltip": {
        "trigger": "axis"
    },
    "xAxis": {
        "type": "category",
        "data": ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    },
    "yAxis": {
        "type": "value"
    },
    "series": [{
        "name": "销量",
        "data": [820, 932, 901, 934, 1290, 1330, 1320],
        "type": "line"
    }]
}
```

## 2. 饼图示例

```echarts
{
    "title": {
        "text": "用户访问来源",
        "subtext": "纯属虚构",
        "left": "center"
    },
    "tooltip": {
        "trigger": "item"
    },
    "legend": {
        "orient": "vertical",
        "left": "left"
    },
    "series": [
        {
            "name": "访问来源",
            "type": "pie",
            "radius": "50%",
            "data": [
                {"value": 1048, "name": "搜索引擎"},
                {"value": 735, "name": "直接访问"},
                {"value": 580, "name": "邮件营销"},
                {"value": 484, "name": "联盟广告"},
                {"value": 300, "name": "视频广告"}
            ],
            "emphasis": {
                "itemStyle": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
}
```

## 3. 柱状图示例

```echarts
{
    "title": {
        "text": "月度销售数据"
    },
    "tooltip": {},
    "legend": {
        "data": ["销量"]
    },
    "xAxis": {
        "data": ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    "yAxis": {},
    "series": [{
        "name": "销量",
        "type": "bar",
        "data": [5, 20, 36, 10, 10, 20]
    }]
}
```

## 4. 散点图示例

```echarts
{
    "title": {
        "text": "身高体重分布"
    },
    "xAxis": {},
    "yAxis": {},
    "series": [{
        "symbolSize": 20,
        "data": [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33]
        ],
        "type": "scatter"
    }]
}
```

## 5. 仪表盘示例

```echarts
{
    "title": {
        "text": "业务指标完成率"
    },
    "series": [{
        "type": "gauge",
        "progress": {
            "show": true
        },
        "detail": {
            "valueAnimation": true,
            "formatter": "{value}%"
        },
        "data": [{
            "value": 75,
            "name": "完成率"
        }]
    }]
} 
```

## 6. 3D 图表示例

```echarts
{
    "title": {
        "text": "3D 散点图"
    },
    "grid3D": {},
    "xAxis3D": {},
    "yAxis3D": {},
    "zAxis3D": {},
    "series": [{
        "type": "scatter3D",
        "data": [[0, 0, 0], [1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4]],
        "symbolSize": 12,
        "itemStyle": {
            "color": "#1890ff",
            "opacity": 1
        }
    }]
}
```

## 7. 3D 柱状图示例

```echarts
{
    "title": {
        "text": "3D 柱状图"
    },
    "tooltip": {},
    "visualMap": {
        "max": 300,
        "inRange": {
            "color": ["#313695", "#4575b4", "#74add1", "#abd9e9", "#e0f3f8", "#ffffbf", "#fee090", "#fdae61", "#f46d43", "#d73027", "#a50026"]
        }
    },
    "xAxis3D": {
        "type": "category",
        "data": ["12a", "1a", "2a", "3a", "4a", "5a", "6a"]
    },
    "yAxis3D": {
        "type": "category",
        "data": ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    },
    "zAxis3D": {
        "type": "value"
    },
    "grid3D": {
        "boxWidth": 200,
        "boxHeight": 100,
        "boxDepth": 80,
        "viewControl": {
            "projection": "orthographic"
        }
    },
    "series": [{
        "type": "bar3D",
        "data": [[0,0,120], [1,1,132], [2,2,101], [3,3,134], [4,4,90], [5,5,230], [6,6,210]],
        "shading": "lambert",
        "label": {
            "show": false
        }
    }]
}
```
