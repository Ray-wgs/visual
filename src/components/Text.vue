<template>
    <div @click="onClickOpenUrl" class="vs-text-container">
        <span class="vs-text" :class="running ? 'running' :''">{{text}}</span>
    </div>
</template>

<script lang='ts' setup name="vsText">
import {toRefs,ref,watch,onMounted,computed} from 'vue'
    const props = defineProps({
        // 展示文本
        text:{
            type:String,
            require:true
        },
        // 是否开启跑马灯
        running:{
            type:Boolean,
            default:false
        },
        // 跑马灯周期时间 ms
        runCycle:{
            type:Number,
            default:400
        },
        // 是否开启超链接
        isURL:{
            type:Boolean,
            default:false
        },
        // 超链接地址
        url:{
            type:String
        },
        // 打开超链接的方式
        openType:{
            type:String,
            default:'_blank',
            validator(value:string) {
                return ['_self', '_blank'].includes(value)
            }
        }
    })
    const {running,runCycle,isURL,url,openType,text} = toRefs(props)
    const runCycleA = computed(()=>{
        return runCycle.value + 'ms'
    })
    let timer:number|undefined
    // 打开超链接
    const onClickOpenUrl = ()=>{
        if(isURL.value){
            window.open(url?.value,openType.value)
        }
    }
</script>
<style scoped lang='scss'>
.vs-text-container{
    width: 100%;
    height: 100%;
    display: inline-block;
    overflow: hidden;
    .vs-text{
        display: inline-block;
        padding-left: 0;
    }
    .running{
        animation: marqueeTransform v-bind(runCycleA) linear infinite;
        padding-left:100%;
    }
    @keyframes marqueeTransform {
        0%   { transform: translate(0, 0); }
        100% { transform: translate(-100%, 0); }
    }
}
</style>