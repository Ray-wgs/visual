import { defineStore } from 'pinia';
export const testStore = defineStore('testStore',{
    state: () => {
        return {
          total: [],
          testName: "测试一下",
        };
    },
    actions:{
        test(){
            console.log('test')
        }
    }
})