import {vsCompOption} from '@/types/container.module'
const option = {
    vsText:{
        tag:'vs-text',
        propValue:{
            text:'文本组件',
            running:false,
            runCycle:1600,
        },
        style:{
            minh:10,
            miw:20,
            width:'80px',
            height:'40px',
            lineHeight:1,
            textAlign:'left',
            fontColor:'#000',
            fontWeight:400,
            fontSize:'16px',
            top:'0px',
            left:'0px'
        },
        optComp:'vs-text-opt'
    },
    vsTable:{
        tag:'vs-table',
        propValue:{
            tableData:[
                {tag:'vs-text',time:'2022-07-13',id:'1',status:'完成'},
                {tag:'vs-date-time',time:'2022-07-13',id:'2',status:'完成'},
                {tag:'vs-table',time:'2022-07-13',id:'3',status:'完成'},
                {tag:'vs-chart',time:'2022-07-13',id:'4',status:'完善中'},
                {tag:'vs-colors-icon',time:'2022-07-13',id:'5',status:'完成'},
                {tag:'vs-drag-resize',time:'2022-07-13',id:'6',status:'完成'},
                {tag:'vs-three',time:'2022-07-13',id:'7',status:'完善中'},
            ],
            tableConfig:{
                common:{
                    stripe:false,
                    border:false,
                },
                column:[{
                    prop:'tag',
                    label:'组件名',
                    width:20,
                    id:'1'
                },
                {
                    prop:'status',
                    label:'状态',
                    width:20,
                    id:'2'
                }]
            }
        },
        style:{
            minh:100,
            miw:100,
            width:'400px',
            height:'400px',
            top:'0px',
            left:'0px'
        },
        optComp:'vs-table-opt'
    },
    vsDateTime:{
        tag:'vs-date-time',
        propValue:{
            defaultTime:'',
            format:'YYYY-MM-DD HH:mm:ss',
            realTime:true,
            refreshCycle:1000
        },
        style:{
            minh:10,
            miw:20,
            width:'80px',
            height:'40px',
            lineHeight:1,
            textAlign:'left',
            fontColor:'#000',
            fontWeight:400,
            fontSize:'16px',
            top:'0px',
            left:'0px'
        },
        optComp:'vs-date-time-opt'
    },
    img:{
        tag:'img',
        propValue:{
            src:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        },
        style:{
            minh:20,
            miw:20,
            width:'200px',
            height:'200px',
            top:'0px',
            left:'0px',
        },
        optComp:'vs-img-opt'
    },
    vsChart:{
        tag:'vs-chart',
        propValue:{
            option:{
                xAxis: [
                    {
                        "type": "category",
                        "position": "bottom"
                    }
                ], 
                yAxis: {
                    "type": "value", 
                    "axisLabel": {}
                }, 
                legend: {
                    "show": true
                }, 
                series: [
                    {
                        "data": [150, 12, 224, 218, 135, 147, 260], 
                        "name": "类目一", 
                        "type": "line", 
                        "smooth": true, 
                        "connectNulls": true
                    }, 
                    {
                        "data": [110, 21, 120, 318, 165, 177, 160], 
                        "name": "类目二", 
                        "type": "line", 
                        "smooth": true, 
                        "connectNulls": true
                    }
                ], 
                tooltip: {
                    "formatter": "{a}:{c}", 
                    "axisPointer": {
                        "type": "cross"
                    }
                }
            }
        },
        style:{
            minh:20,
            minw:20,
            width:'400px',
            height:'400px',
            top:'0px',
            left:'0px',
        },
        optComp:'vs-chart-opt'
    }
} as vsCompOption

export default option