<template>
    HOME
    <el-card>
           <code>
            there is code
           </code>
    </el-card>
</template>

<script lang='ts' setup>
import dayjs from 'dayjs'
import { reactive, toRefs,ref} from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const value1 = ref('')
const value = ref('')
const color1 = ref('')
const value2 = ref('')
const options = ref([{value:1,label:1}])
</script>
<style scoped lang='scss'>
</style>