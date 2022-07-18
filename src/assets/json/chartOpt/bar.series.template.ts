const option = {
    "series": {
        "name": "系列",
        "model": "series",
        "tabs":true,
        "children": {
            "id": {
                "name": "ID",
                "model": "series.id",
                "show": false,
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
                    // "readonly": true
                }
            },
            "type": {
                "name": "类型",
                "model": "series.type",
                "ui": {
                    "type": "select",
                    "value": "bar",
                    "options": [
                        { "label": "柱状", "value": "bar" },
                        { "label": "折线", "value": "line" },
                        { "label": "散点", "value": "scatter" },
                        { "label": "涟漪散点", "value": "effectScatter" }
                    ]
                }
            },
            "barWidth": {
                "name": "柱子宽度",
                "model": "series.barWidth",
                "ui": {
                    "type": "text",
                    "value": ""
                }
            },
            "showBackground": {
                "name": "显示柱子背景",
                "model": "series.showBackground",
                "cancelBubble": true,
                "ui": {
                    "type": "boolean",
                    "value": true
                }
            },
            "backgroundStyle": {
                "name": "柱子背景",
                "model": "series.backgroundStyle",
                "children": {
                    "color": {
                        "name": "颜色",
                        "model": "series.backgroundStyle.color",
                        "cancelBubble": true,
                        "ui": {
                            "type": "color",
                            "value": ""
                        }
                    }
                }
            },
            "label": {
                "name": "文本标签",
                "model": "series.label",
                "children": {
                    "show": {
                        "name": "显示",
                        "model": "series.label.show",
                        "ui": {
                            "type": "boolean",
                            "value": false
                        }
                    },
                    "position": {
                        "name": "位置",
                        "model": "series.label.position",
                        "ui": {
                            "type": "select",
                            "value": "top",
                            "options": [
                                { "label": "top", "value": "top" },
                                { "label": "left", "value": "left" },
                                { "label": "right", "value": "right" },
                                { "label": "bottom", "value": "bottom" },
                                { "label": "inside", "value": "inside" },
                                { "label": "insideLeft", "value": "insideLeft" },
                                { "label": "insideRight", "value": "insideRight" },
                                { "label": "insideTop", "value": "insideTop" },
                                { "label": "insideBottom", "value": "insideBottom" },
                                { "label": "insideTopLeft", "value": "insideTopLeft" },
                                { "label": "insideBottomLeft", "value": "insideBottomLeft" },
                                { "label": "insideTopRight", "value": "insideTopRight" },
                                { "label": "insideBottomRight", "value": "insideBottomRight" },
                            ]
                        }
                    },
                    "color": {
                        "name": "颜色",
                        "model": "series.label.color",
                        "ui": {
                            "type": "color",
                            "value": ""
                        }
                    }
                }
            },
        }
    }
}
export default option