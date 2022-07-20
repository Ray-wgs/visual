const option = {
    "series": {
        "name": "系列",
        "model": "series",
        "tabs":true,
        "children": {
            "id": {
                "name": "ID",
                "show": false,
                "model": "series.id",
                "ui": {
                    "type": "text",
                    "value": "",
                    // "readonly": true
                }
            },
            "name": {
                "name": "系列名称",
                "model": "series.name",
                "show": false,
                "ui": {
                    "type": "text",
                    "value": "",
                }
            },
            "type": {
                "name": "类型",
                "model": "series.type",
                "ui": {
                    "type": "select",
                    "value": "pie",
                    "options": [
                        { "label": "饼图", "value": "pie" }
                    ]
                }
            },
            "radius": {
                "name": "饼图半径",
                "model": "series.radius",
                "ui": {
                    "type": "array",
                    "value": [0,'50%'],
                    "placeholder": "填写格式:0%,75%",
                }
            },
            "roseType": {
                "name": "扇区类型",
                "model": "series.roseType",
                "ui": {
                    "type": "select",
                    "value": false,
                    "options": [
                        { "label": "不设置", "value": false },
                        { "label": "突出圆心角", "value": "radius" },
                        { "label": "突出半径", "value": "area" }
                    ]
                }
            },
            "itemStyle": {
                "name": "扇区样式",
                "model": "series.itemStyle",
                "children": {
                    "opacity": {
                        "name": "透明度",
                        "model": "series.itemStyle.opacity",
                        "ui": {
                            "type": "number",
                            "min": 0,
                            "max": 1,
                            "step": 0.1,
                            "value": 1
                        }
                    },
                    "borderRadius": {
                        "name": "圆角半径",
                        "model": "series.itemStyle.borderRadius",
                        "ui": {
                            "type": "number",
                            "min": 0,
                            "max": 100,
                            "step": 1,
                            "value": 0
                        }
                    }
                }
            }
        }
    }
}
export default option