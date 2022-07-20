const option = {
    'xAxis':{
        'name':'x轴',
        "model":"xAxis",
        'children':{
          "show":{
            "name":"显示",
            "model":"xAxis.show",
            "ui":{
              "type":"boolean",
              "value":true
            }
          },
          "type":{
            "name":"类别",
            "model":"xAxis.type",
            "ui":{
              "type":"select",
              "value":"category",
              "options": [
                  { "label": "数值轴", "value": "value" },
                  { "label": "类目轴", "value": "category" },
              ]
            }
          },
          "axisLabel": {
            "name": "标签刻度",
            "model":"xAxis.axisLabel",
            "children": {
                "show": {
                    "name": "显示",
                    "model":"xAxis.axisLabel.show",
                    "ui": {
                        "type": "boolean",
                        "value": true
                    }
                },
                "color": {
                    "name": "颜色",
                    "model":"xAxis.axisLabel.color",
                    "ui": {
                        "type": "color",
                        "value": ""
                    }
                },
                "fontStyle": {
                    "name": "字体",
                    "model":"xAxis.axisLabel.fontStyle",
                    "ui": {
                        "type": "select",
                        "value": "normal",
                        "options": [
                            { "label": "常规", "value": "normal" },
                            { "label": "斜体", "value": "italic" }
                        ]
                    }
                },
                "fontSize": {
                    "name": "字号",
                    "model":"xAxis.axisLabel.fontSize",
                    "ui": {
                        "type": "number",
                        "min": 0,
                        "step": 1,
                        "value": 12
                    }
                }
            }
          },
          "axisLine": {
              "name": "坐标轴线",
              "model":"xAxis.axisLine",
              "children": {
                  "show": {
                      "name": "显示",
                      "model":"xAxis.axisLine.show",
                      "ui": {
                          "type": "boolean",
                          "value": false
                      }
                  }
              }
          },
          "axisTick": {
              "name": "坐标刻度",
              "model":"xAxis.axisTick",
              "children": {
                  "show": {
                      "name": "显示",
                      "model":"xAxis.axisTick.show",
                      "ui": {
                          "type": "boolean",
                          "value": false
                      }
                  }
              }
          },
        }
      }
}
export default option