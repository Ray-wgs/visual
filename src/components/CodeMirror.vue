<template>
    <codemirror 
    :modelValue="code" 
    :style="{ height: '100%' }" 
    :extensions="extensions"
    v-bind="$attrs" 
    @change="onCodeChange"
    >

    </codemirror>
</template>

<script lang='ts' setup name="vsCodeMirror">
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { reactive, toRefs,ref} from 'vue'

const props = defineProps({
    code:{
        type:String,
        default:''
    }
})
const emits = defineEmits(['change'])
const {code} = toRefs(props)
const extensions = [javascript(),oneDark]
const onCodeChange = ()=>{
    emits('change',code.value)
}
</script>
<style scoped lang='scss'>
</style>