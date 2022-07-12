<template>
    <div class="vs-date-time">
        {{displayTime}}
    </div>
</template>

<script lang='ts' setup name="vsDateTime">
import dayjs from 'dayjs'
import {toRefs,ref,watchEffect} from 'vue'
    const props = defineProps({
        // 时间格式化
        format:{
            type:String,
            default:'YYYY-MM-DD HH:mm:ss'
        },
        // 展示传递的时间
        defaultTime:{
            type:String||Date,
        },
        // 是否开启实时时间
        realTime:{
            type:Boolean,
            default:false
        },
        // 刷新周期
        refreshCycle:{
            type:Number,
            default:1000
        }
    })
    const {format,defaultTime,realTime,refreshCycle} = toRefs(props)
    let timer:number|undefined
    // 展示的时间
    const displayTime = ref('')
    // 更新展示的时间 默认1s更新一次
    const setTime = ()=>{
        displayTime.value = dayjs(new Date()).format(format.value) 
        timer = window.setTimeout(() => {
            setTime()
        }, refreshCycle.value);
    }
    
    watchEffect(()=>{
        // 开启实时时间后 开始自动刷新
        if(realTime.value){
            setTime()
        }else{
            if(timer) clearTimeout(timer)
            displayTime.value = dayjs(defaultTime!.value || new Date()).format(format.value) 
        }
    })
</script>
<style scoped lang='scss'>
.vs-date-time{
    width: 100%;
    height: 100%;
    line-height: normal;
    display: inline-block;
}
</style>