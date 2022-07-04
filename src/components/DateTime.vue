<template>
    <div class="dateTime">
        {{displayTime}}
    </div>
    <div class="test">
        <el-input v-model="formatTime"  @change="handleFormat">

        </el-input>
    </div>
</template>

<script lang='ts' setup name="DateTime">
import dayjs from 'dayjs'
import { reactive, toRefs,ref} from 'vue'
const time = ref<Date>(new Date())
const formatTime = ref('YYYY-MM-DD HH:mm:ss')
const displayTime = ref(dayjs(time.value).format(formatTime.value))
const handleFormat = ()=>{
    displayTime.value = dayjs(time.value).format(formatTime.value)
}
const setTime = ()=>{
    time.value = new Date()
    displayTime.value = dayjs(time.value).format(formatTime.value)
    setTimeout(() => {
        setTime()
    }, 1000);
}
setTime()
</script>
<style scoped lang='scss'>
.test{
    height:50px;
}
</style>