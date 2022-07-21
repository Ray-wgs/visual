<template>
    <vs-three
    :modeopts="threeOpt.option.models"
    :lightOpts="threeOpt.option.lights"
    :eventOpts="threeOpt.option.events"
    :cameraOpt="threeOpt.option.camera"
    :helperOpts="threeOpt.option.helpers"
    :controls="threeOpt.controls"
    @dragModelEnd="updateModelPistion"
    >

    </vs-three>
</template>

<script lang='ts' setup name="vsThreeContainerOpt">
import { reactive, toRefs,ref} from 'vue'
import { useThreeStore } from '@/stores/three';
import { storeToRefs } from 'pinia';
import * as THREE from 'three'
const store = useThreeStore()
const {threeOpt}  = storeToRefs(store)
const updateModelPistion = (ev:THREE.Event)=>{
    let curModel =threeOpt.value.option.models?.find(model=>{
        return model.name == ev.object.name
    })
    if(curModel){
        curModel.position = {...ev.object.position}
    }
}
</script>
<style scoped lang='scss'>

</style>