<template>
  <el-input v-model="val"  @change="onChangeArray"></el-input>
</template>

<script setup lang="ts" name="vsInputArray">
import { reactive, toRefs,ref,} from 'vue'
 const  props=defineProps({
      array:{
          default:[]
      },
  })
    const emit = defineEmits(['onChange'])
    const {array} = toRefs(props)
    console.log(array)
    let val = ref(array.value.join(','))
    console.log(val)
    const onChangeArray= ()=>{
      emit('onChange',val.value.split(','))
    }
</script>
<style scoped lang='scss'>
</style>