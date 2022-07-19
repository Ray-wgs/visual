import { defineStore } from 'pinia';
import { vsContainerData,vsContainerComp} from '@/types/container.module';
export const useBoardStore = defineStore('boardStore',{
    state: () => {
        return {
          boardOpt:{
            common:{
                width:1920,
                height:1080,
                threeBg:false,
                three:'',
                name:'',
                bg:''
            },
            comps:[
                {tag:'vs-text',id:'1',propValue:{text:'123456',running:false},style:{minh:10,miw:20},optComp:'vs-text-opt'},
                {tag:'vs-date-time',id:'2',propValue:{defaultTime:'2022-07-12',format:'YYYY-MM-DD HH:mm:ss',realTime:true},style:{minh:10,miw:20},optComp:'vs-date-time-opt'},
                {tag:'img',id:'3',propValue:{src:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'},style:{width:'200px',height:'200px'},optComp:'vs-img-opt'},
                {tag:'vs-table',id:'4',propValue:
                    {
                        tableData:[
                            {tag:'vs-text',time:'2022-07-13',id:'1',status:'完成'},
                            {tag:'vs-date-time',time:'2022-07-13',id:'2',status:'完成'},
                            {tag:'vs-table',time:'2022-07-13',id:'3',status:'正在开发'},
                            {tag:'vs-chart',time:'2022-07-13',id:'4',status:'完成'},
                            {tag:'vs-colors-icon',time:'2022-07-13',id:'5',status:'完成'},
                            {tag:'vs-drag-resize',time:'2022-07-13',id:'6',status:'完成'},
                            {tag:'vs-three',time:'2022-07-13',id:'7',status:'完善中'},
                        ],
                        tableConfig:{
                            common:{},
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
                    },style:{
                        width:'400px',
                        height:'400px'
                    },optComp:'vs-table-opt'},
                {tag:'vs-chart',id:'5',propValue:
                {option:{"xAxis": [{"type": "category", "position": "bottom"}], "yAxis": {"type": "value", "axisLabel": {}}, "legend": {"show": false}, "series": [{"data": [150, 12, 224, 218, 135, 147, 260], "name": "类目一", "type": "line", "smooth": true, "connectNulls": true}, {"data": [110, 21, 120, 318, 165, 177, 160], "name": "类目二", "type": "line", "smooth": true, "connectNulls": true}], "tooltip": {"formatter": "{a}:{c}", "axisPointer": {"type": "cross"}}}}
                ,style:{width:'400px',height:'400px'}},
                {
                    tag:'vs-colors-icon',
                    id:'6',
                    propValue:{
                        type:'svg',
                        icon:'thumbsup',
                    },
                    style:{
                        minh:20,
                        minw:20,
                        width:'40px',
                        height:'40px',
                        lineHeight:1,
                        textAlign:'left',
                        fontColor:'#000',
                        fontWeight:400,
                        fontSize:'16px',
                        top:'0px',
                        left:'0px'
                    },
                    optComp:'vs-colors-icon-opt'
                }
            ]
          } as vsContainerData,
          curCompOpt:{

          } as vsContainerComp
        };
    },
    actions:{
        setCurComp(cur:vsContainerComp){
            this.curCompOpt = cur
        }
    }
})