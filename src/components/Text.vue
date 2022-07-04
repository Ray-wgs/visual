<template>
    <div @click="onClickOpenUrl" class="vs-text">
        {{label}}
    </div>
</template>

<script lang='ts' setup name="vsText">
import {toRefs,ref,watchEffect} from 'vue'
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
    const {running,runCycle,isURL,url,openType} = toRefs(props)
    let timer:number|undefined
    // 展示的label
    const label = ref(props.text)
    // 字体滚动
    const runText = ()=>{
        timer =  window.setTimeout(() => {
            label!.value = label!.value!.substring(1)+ label!.value!.substring(0,1)
            runText()
        }, runCycle.value);
    }
    // 打开超链接
    const onClickOpenUrl = ()=>{
        if(isURL.value){
            window.open(url?.value,openType.value)
        }
    }
    watchEffect(()=>{
        if(running.value){
            runText()
        }else{
            if(timer) clearTimeout(timer)
        }
    })
</script>
<style scoped lang='scss'>
.vs-text{
    display: inline-block;
}
</style>