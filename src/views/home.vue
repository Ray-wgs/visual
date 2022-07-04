<template>
    HOME
    <el-card>
            <span @click.stop="toggleDark()">暗黑模式</span>
            <el-switch size="small" v-model="isDark"/>
            <el-button @click="go">Default</el-button>
            <el-button type="primary">Primary</el-button>
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
</template>

<script lang='ts' setup>
import dayjs from 'dayjs'
import { reactive, toRefs,ref} from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { useRouter } from 'vue-router';
const isDark = useDark()
const toggleDark = useToggle(isDark)
const value1 = ref('')
const value = ref('')
const color1 = ref('')
const value2 = ref('')
const options = ref([{value:1,label:1}])
const router = useRouter()
const go =()=>{
    router.push({path:'/test'})
}
</script>
<style scoped lang='scss'>
</style>