<template>
    <el-input-number v-model="numVal" @change="change"  v-bind="$attrs"></el-input-number>
</template>

<script lang='ts' setup name="vsInputNumber">
import { reactive, toRefs,ref,watchEffect} from 'vue'
const props = defineProps({
    strValue:{
        tpye:[String,Number],
        default:'16px'
    },
    unit:{
        type:String,
        default:'px'
    }
})
const emits = defineEmits(['onChange'])
const {strValue,unit} = toRefs(props)
const numVal = ref()
const change = ()=>{
    emits('onChange',numVal.value+unit.value)
}
watchEffect(()=>{
    numVal.value = parseInt(strValue.value)
})
</script>
<style scoped lang='scss'>
</style>