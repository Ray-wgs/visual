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
                {tag:'vs-text',id:'1',propValue:{text:'123456',running:false},style:{}},
                {tag:'vs-date-time',id:'2',propValue:{defaultTime:'2022-07-12',format:'YYYY-MM-DD HH:mm:ss',realTime:true},style:{}}
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