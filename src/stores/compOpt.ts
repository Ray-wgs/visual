import { defineStore } from 'pinia';
export const useCompOptStore = defineStore('CompOptStore',{
    state: () => {
        return {
          style:{
            textAlign:[
                {value:'left',label:'左对齐'},
                {value:'right',label:'右对齐'},
                {value:'center',label:'居中对齐'}
            ],
            objectFit:[
                {value:'contain',label:'高度等比缩放'},
                {value:'cover',label:'宽度等比缩放'},
                {value:'fill',label:'拉伸铺满'},
                {value:'none',label:'无'},
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