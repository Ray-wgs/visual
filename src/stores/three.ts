import { defineStore } from 'pinia';
import {vsThreeOpt} from '@/types/three.module'
export const useThreeStore = defineStore('threeStore',{
    state: () => {
        return {
          threeOpt:{
            name:'',
            option:{
                models:[
                    {
                        mName:'test',
                        mType:'box',
                        mMaterial:{
                            type:'color',
                            material:'blue'
                        },
                        mPosition:{
                            x:0,
                            y:0,
                            z:0
                        },
                        mOpts:{
                            width:200,
                            height:200,
                            depth:200
                        }
                    }
                ],
                lights:[
                    {
                        lName:'testLight',
                        lType:'AmbientLight',
                        lPosition:{
                            x:400,
                            y:400,
                            z:400,
                        },
                        lOpts:{
                            color:'#fff',
                        }
                    }
                ],
                events:[
                    {
                        eventType:'dbclick',
                        callback:(models:any,ev:any)=>{
                            alert('请打开控制台查看是否触发事件及回调的信息')
                            console.log('%c---函数触发了','#ccc')
                            console.log(models,ev)
                        }
                    }
                ],
                camera:{
                    cName:'testCamera',
                    cType:'PerspectiveCamera',
                    cPosition:{
                        x:800,
                        y:800,
                        z:800,
                    },
                    cLookAt:{
                        x:0,
                        y:0,
                        z:0,
                    },
                    cOpts:{

                    }
                },
                helpers:[
                    {
                        name:'AxesHelper',
                        value:true,
                        label:'坐标轴辅助'
                    },
                    {
                        name:'GridHelper',
                        value:false,
                        label:'坐标网格辅助'
                    },
                    {
                        name:'CameraHelper',
                        value:false,
                        label:'相机辅助'
                    },
                ]
            },
            controls:{
                drag:false,
            }
          } as vsThreeOpt
        };
    },
    actions:{

    }
})