import { defineStore } from 'pinia';
import { vsContainerData,vsContainerComp} from '@/types/container.module';
export const useBoardStore = defineStore('boardStore',{
    state: () => {
        return {
          boardOpt:{
            common:{
                threeBg:false,
                bg:''
            },
            comps:[
                {tag:'vs-text',id:'1',propValue:{text:'123456',running:false},style:{minh:10,miw:20},optComp:'vs-text-opt'},
                {tag:'vs-date-time',id:'2',propValue:{defaultTime:'2022-07-12',format:'YYYY-MM-DD HH:mm:ss',realTime:true},style:{minh:10,miw:20},optComp:'vs-date-time-opt'},
                {tag:'img',id:'3',propValue:{src:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'},style:{width:'200px',height:'200px'},optComp:'vs-img-opt'}
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