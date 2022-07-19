<template>
    <codemirror 
    :style="{ height: '100%' }" 
    :extensions="extensions"
    v-bind="$attrs" 
    @change="onCodeChange"
    ref="codeMirror"
    >

    </codemirror>
</template>

<script lang='ts' setup name="vsCodeMirror">
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { reactive, toRefs,ref} from 'vue'

const emits = defineEmits(['change'])
const extensions = [javascript(),oneDark]
let timer:number|undefined
const onCodeChange = (value:any)=>{
    if(timer) clearTimeout(timer)
    timer = window.setTimeout(()=>{
        emits('change',value)
    },200)
}
</script>
<style scoped lang='scss'>
</style>