<template>
    <el-card>
            <span @click.stop="toggleDark()">暗黑模式</span>
            <el-switch size="small" v-model="isDark" @change="toggleDark"/>
            <el-button type="success" @click="go">三维测试版</el-button>
            <el-button type="info" @click="goCon">配置看板</el-button>
            <el-button @click="goChart">配置图表</el-button>
            <el-slider v-model="value1" />

           
    </el-card>
</template>

<script lang='ts' setup>
import { reactive, toRefs,ref,watchEffect} from 'vue'
import { useRouter } from 'vue-router';
import {useThemeStore} from '@/stores/theme'
const store = useThemeStore()
console.log(store)
const theme = ref(store.theme)
const isDark = ref(theme.value == 'dark')
const toggleDark =()=>{
    let theme = isDark.value ? 'dark' : 'light'
    store.setTheme(theme)
}
const value1 = ref('')
const value = ref('')
const color1 = ref('')
const options = ref([{value:1,label:1}])
const router = useRouter()
const go =()=>{
    router.push({path:'/three'})
}
const goCon =()=>{
     router.push({path:'/container'})
}
const goChart = ()=>{
    router.push({path:'/chart'})
}
</script>
<style scoped lang='scss'>
.theme-text{
    width: 400px;
    height:400px;
    background-color: #ccc;
}
.icon-test{
    font-size: 56px;
}
.icon{
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.contain{
    position: relative;
    width: 100%;
    height: 800px;
}
</style>