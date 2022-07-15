import { defineStore } from 'pinia';
import {vsChartOption} from '@/types/chart.module'
export const useChartStore = defineStore('chartStore',{
    state: () => {
        return {
          chartOpt:{
            type:'',// bar line pie
            name:'',
            option:{
                "xAxis": {
                    "type": "category",
                    "position": "bottom"
                }
                , 
                "yAxis": {
                    "type": "value", 
                    "axisLabel": {}
                }, 
                "legend": {
                    "show": true
                }, 
                "series": [
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
            },
            flattenOption:{
                
            },
            data:{
                type:'', //static  dynamic
                data:'' //data     api    
            }
          } as vsChartOption
        };
    },
    actions:{

    }
})