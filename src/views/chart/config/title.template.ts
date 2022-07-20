const option = {
    "title": {
        "name": "标题",
        "model":"title",
        "children": {
            "show": {
                "name": "显示",
                "model":"title.show",
                "ui": {
                    "type": "boolean",
                    "value": true
                }
            },
            "text": {
                "name": "标题名称",
                "model":"title.text",
                "ui": {
                    "type": "text",
                    "value": ""
                }
            },
            "textStyle": {
                "name": "标题样式",
                "model":"title.textStyle",
                "children": {
                    "color": {
                        "name": "颜色",
                        "model":"title.textStyle.color",
                        "ui": {
                            "type": "color",
                            "value": ""
                        }
                    }
                }
            }
        }
    }
}
export default option