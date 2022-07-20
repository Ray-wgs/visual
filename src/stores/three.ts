import { defineStore } from 'pinia';
export const useThreeStore = defineStore('threeStore',{
    state: () => {
        return {
          threeOpt:{
            name:'',
            option:{
                models:[],
                lights:[],
                events:[],
                helpers:[]
            }
          } 
        };
    },
    actions:{

    }
})