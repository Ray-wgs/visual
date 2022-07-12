import { defineStore } from 'pinia';
export const useCompOptStore = defineStore('CompOptStore',{
    state: () => {
        return {
          style:{
            textAlign:[
                {value:'left',label:'左对齐'},
                {value:'right',label:'右对齐'},
                {value:'center',label:'居中对齐'}
            ]
          },
          prop:{
            openType:[
                {value:'_blank',label:'新窗口'},
                {value:'_self',label:'当前页'}
            ]
          }
        };
    },
})