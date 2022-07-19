<template>
  <el-input v-model="val"  @change="onChangeArray"></el-input>
</template>

<script setup lang="ts" name="vsInputArray">
import { reactive, toRefs,ref,} from 'vue'
 const  props=defineProps({
      array:{
          require:true,
          type:Array,
          default:[]
      },
  })
    const emit = defineEmits(['onChange'])
    const data = reactive(props.array)
    let val = ref('')
    const onChangeArray= ()=>{
      emit('onChange',val.value.split(','))
    }
</script>
<style scoped lang='scss'>
</style>