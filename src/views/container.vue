<template>
    <div class="board-container" ref="boardContainer" @click="active == 'null'">
        <vs-drag-resize
        v-for="(comp,index) in boardOpt.comps"
        :key="comp.id"
        :nodeKey="comp.id"
        :style="{zIndex:index+1,...comp.style}"
        v-bind="comp.style"
        @onDragResize="updateComp"
        @click.stop="active = comp.id"
        >
            <component :is="comp.tag" v-bind="comp.propValue" :style="comp.style">
            
            </component>
        </vs-drag-resize>
        <vs-three
        v-if="boardOpt.common.threeBg"
        class="board-three-bg"
        >

        </vs-three>
    </div>
    <div style="position:absolute;top:0;right:0;width:300px;zIndex:50;background-color: #fff;" v-if="active != 'null'">
        <el-form :model="curCompOpt" label-width="120px">
            <vs-date-time-opt v-if="curCompOpt.tag == 'vs-date-time'" />
            <vs-text-opt v-if="curCompOpt.tag == 'vs-text'"/>
            <vs-common-opt>

            </vs-common-opt>
        </el-form>
    </div>
    <el-button @click="onSave">

    </el-button>
</template>

<script lang='ts' setup>
import { reactive, toRefs,ref,onMounted,watch,computed} from 'vue'
import {vsDragResizeStyle} from '@/types/dragResize.module'
import {vsContainerData,obj,vsContainerComp} from '@/types/container.module'
import html2canvas from 'html2canvas'
import vsConfigCommon from '@/components/configStyle/common.vue'
import { useBoardStore } from '@/stores/board'
import { storeToRefs } from 'pinia'
import vsCommonOpt from '@/components/CompOpts/CommonOpt.vue'
import vsTextOpt from '@/components/CompOpts/TextOpt.vue'
import vsDateTimeOpt from '@/components/CompOpts/DateTimeOpt.vue'
const store = useBoardStore()
const {boardOpt,curCompOpt} = storeToRefs(store)
const boardContainer = ref()
const active = ref<string|number>('null')
const updateComp = (data:vsDragResizeStyle)=>{
    console.log(data)
    let compId = data.nodeKey
    delete data.nodeKey
    let comp = boardOpt.value.comps.find((comp)=>{
        return comp.id == compId
    })
    if(comp) comp.style = {...comp.style,...data}
}
const setDragResizeStyle=(index:number,style:obj)=>{
    return {
        zIndex:index+1,
        left:style.left,
        top:style.top,
        width:style.width,
        height:style.height,
    }
}
const optComponent = computed(()=>{
    console.log(curCompOpt.value.tag + '-opt')
    return curCompOpt.value.tag + '-opt'
})
const onSave = async ()=>{
     let canvas = await html2canvas(boardContainer.value)
     console.log(canvas)
     console.log(canvas.toDataURL("image/png"))
}
onMounted(()=>{
    if(!boardOpt.value.common.threeBg){
        boardContainer.value.style.backgroundImage=`url(${boardOpt.value.common.bg})`
    }
})
watch(active,(newVal,oldVal)=>{
    store.setCurComp(boardOpt.value.comps.find((e)=>{return e.id == active.value}) as vsContainerComp )
})
</script>
<style scoped lang='scss'>
.board-container{
    position: relative;
    width: 100%;
    height:100vh;
    background-size: 100% 100%;
    .board-three-bg{
        position: relative;
    }
}
</style>