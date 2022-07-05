<template>
    <vs-date-time
    :defaultTime="time"
    format="YY-MM-DD HH:mm:ss"
    >

    </vs-date-time>
    <vs-text text="123" :running="running" ></vs-text>
    <div class="icon-test">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-image"></use>
        </svg>
    </div>
    <div>
        <vs-colors-icon
        iconData="icon-read"
        type="class"
        style="fontSize:50px"
        >

        </vs-colors-icon>
    </div>
    <div style="height:400px;width:400px">
        <vs-chart
        :option="option"
        >

        </vs-chart>
    </div>
    <el-card>
            <span @click.stop="toggleDark()">暗黑模式</span>
            <el-switch size="small" v-model="isDark" @change="toggleDark"/>
            <el-button @click="go">Default</el-button>
            <el-button type="primary" @click="running = !running">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
            <el-button>中文</el-button>
            <el-date-picker
                v-model="value1"
                type="date"
                placeholder="Pick a day"
            />
            <el-color-picker v-model="color1" />
             <el-select v-model="value" class="m-2" placeholder="Select" size="small">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                />
            </el-select>
            <el-slider v-model="value1" />
            <el-switch
                v-model="value2"
                class="ml-2"
                style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            />
    </el-card>
    <div class="theme-text">

    </div>
</template>

<script lang='ts' setup>
import dayjs from 'dayjs'
import { reactive, toRefs,ref,watchEffect} from 'vue'
import { useRouter } from 'vue-router';
import {useThemeStore} from '@/stores/theme'
import * as echarts from "echarts";
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
const value2 = ref('')
const options = ref([{value:1,label:1}])
const router = useRouter()
const running = ref(true)
const time = '2022-05-25'
const go =()=>{
    router.push({path:'/test'})
}
const option = reactive<echarts.EChartOption>({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
})
</script>
<style scoped lang='scss'>
.theme-text{
    width: 400px;
    height:400px;
    @include themify($themes) {
        background: themed("color1");
    }
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
</style>