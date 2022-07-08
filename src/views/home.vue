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
    <div style="height:800px;width:800px">
        <vs-three>

        </vs-three>
    </div>
    <el-card>
            <span @click.stop="toggleDark()">暗黑模式</span>
            <el-switch size="small" v-model="isDark" @change="toggleDark"/>
            <el-button @click="go">Default</el-button>
           
            <el-button>中文</el-button>
            
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
    <el-card>
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a day"
        />
        <el-button type="primary" @click="running = !running">Primary</el-button>
        <el-button type="success" @click="go">three</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </el-card>
    <div class="contain">
        <vs-drag-resize class="theme-text" :key="1">
            
        </vs-drag-resize>
        <vs-drag-resize :key="2">
            <vs-chart
            :option="option"
            >

            </vs-chart>
        </vs-drag-resize>
    </div>
</template>

<script lang='ts' setup>
import dayjs from 'dayjs'
import { reactive, toRefs,ref,watchEffect} from 'vue'
import { useRouter } from 'vue-router';
import {useThemeStore} from '@/stores/theme'
import * as echarts from "echarts";
import vsThree from '@/components/Three.vue'
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
    router.push({path:'/three'})
}
const option = reactive<echarts.EChartOption>({
    "title": {
        "show": true,
        "text": "标题名称测试",
        "textStyle": {
            "color": "rgba(119, 255, 0, 1)"
        }
    },
    "xAxis": {
        "show": true,
        "type": "category",
        "axisLabel": {
            "show": false
        },
        "splitLine": {
            "show": true
        },
        "axisPointer": {
            "type": "shadow"
        }
    },
    "yAxis": {
        "show": true,
        "type": "value",
        "axisLine": {
            "show": true
        },
        "axisLabel": {
            "show": true,
            "color": "rgba(199, 42, 42, 1)",
            "fontSize": 15,
            "fontStyle": "italic"
        }
    },
    "legend": {
        "icon": "rect",
        "left": "right",
        "show": true,
        "type": "scroll",
        "orient": "horizontal"
    },
    "series": [
        {
            "data": [
                964,
                959,
                46,
                451
            ],
            "name": "1234561",
            "type": "line",
        },
        {
            "data": [
                839,
                419,
                354,
                364
            ],
            "name": "电费11`",
            "type": "line"
        },
        {
            "data": [
                839,
                19,
                150,
                254
            ],
            "name": "用电量",
            "type": "bar",
            "label": {
                "show": true,
                "color": "rgba(9, 51, 135, 1)",
                "position": "top"
            },
            "barWidth": 22,
        }
    ],
    "tooltip": {
        "trigger": "axis",
        "formatter": "{b}:{c}",
        "axisPointer": {
            "type": "cross",
            "crossStyle": {
                "color": "#999"
            }
        }
    },
})
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