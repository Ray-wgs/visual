<template>
    <vs-three
    :modelOpts="threeOpt.option.models"
    :lightOpts="threeOpt.option.lights"
    :eventOpts="threeOpt.option.events"
    :cameraOpt="threeOpt.option.camera"
    :helperOpts="threeOpt.option.helpers"
    :controls="threeOpt.controls"
    >

    </vs-three>
</template>

<script lang='ts' setup name="vsThreeContainerOpt">
import { reactive, toRefs,ref} from 'vue'
import { useThreeStore } from '@/stores/three';
import { storeToRefs } from 'pinia';
const store = useThreeStore()
const {threeOpt}  = storeToRefs(store)

</script>
<style scoped lang='scss'>

</style>