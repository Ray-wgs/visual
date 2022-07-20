<template>
    <div class="vs-header" >
        <vs-board-header-opt/>
    </div>
    <div class="vs-container">
        <div class="vs-layer">
            <vs-board-layer-opt />
        </div>
        <div class="vs-board">
            <div class="board-container" ref="boardContainer"  >
                <vs-drag-resize
                v-for="(comp,index) in boardOpt.comps"
                :key="comp.id"
                :nodeKey="comp.id"
                :style="{zIndex:index+1,...comp.style}"
                v-bind="comp.style"
                @onDragResize="updateComp"
                @mousedown="curCompOpt = comp"
                >
                    <component :is="comp.tag" v-bind="comp.propValue" :style="comp.style">
                    
                    </component>
                </vs-drag-resize>
                <vs-three
                v-if="boardOpt.common.bgType == 'three'"
                class="board-three-bg"
                >

                </vs-three>
            </div>
        </div>
        <div class="vs-opt" >
            <vs-board-panel-opt v-if="JSON.stringify(curCompOpt) !=='{}'" />
        </div>
    </div>
</template>

<script lang='ts' setup>
import {ref,onMounted,watch,nextTick} from 'vue'
import {vsDragResizeStyle} from '@/types/dragResize.module'
import { useBoardStore } from '@/stores/board'
import { storeToRefs } from 'pinia'
import vsBoardPanelOpt from './components/PanelOpt.vue'
import vsBoardLayerOpt from './components/LayerOpt.vue'
import vsBoardHeaderOpt from './components/HeaderOpt.vue'
const store = useBoardStore()
const {boardOpt,curCompOpt} = storeToRefs(store)
const boardContainer = ref()
const updateComp = (data:vsDragResizeStyle)=>{
    let compId = data.nodeKey
    delete data.nodeKey
    let comp = boardOpt.value.comps.find((comp)=>{
        return comp.id == compId
    })
    if(comp) comp.style = {...comp.style,...data}
}
onMounted(()=>{
    if(boardOpt.value.common.bgType == 'two'){
        boardContainer.value.style.backgroundImage=`url(${boardOpt.value.common.bg})`
    }
    nextTick(()=>{
        boardContainer.value.style.width = boardOpt.value.common.width + 'px'
        boardContainer.value.style.height = boardOpt.value.common.height + 'px'
    })
})
watch(()=>boardOpt.value.common,()=>{
    if(boardOpt.value.common.bgType == 'two'){
        boardContainer.value.style.backgroundImage=`url(${boardOpt.value.common.bg})`
    }
    boardContainer.value.style.width = boardOpt.value.common.width + 'px'
    boardContainer.value.style.height = boardOpt.value.common.height + 'px'
},{deep:true})
</script>
<style scoped lang='scss'>
.vs-header{
    box-sizing: border-box;
    height:50px;
    line-height: 50px;
    width: 100%;
    box-shadow: 0 0 6px 2px #ccc;
    margin-bottom: 10px;
    padding:0 20px;
    .vs-header-btn{
        margin-top:10px;
    }
}
.vs-container{
    display: flex;
    width:100%;
    height:calc(100vh - 60px);
    .vs-layer{
        width:120px;
        box-shadow: 0 0 6px 2px #ccc;
    }
    .vs-board{
        width: calc(100% - 420px);
        height:100%;
        margin:0 10px;
        overflow: auto;
        box-shadow: 0 0 6px 2px #ccc;
        @include themify($themes) {
                background: themed("bg-color2");
        }
        .board-container{
            position: relative;
            @include themify($themes) {
                background: themed("bg-color3");
            }
            background-size: 100% 100%;
            .board-three-bg{
                position: relative;
            }
        }
    }
    
    .vs-opt{
        width:260px;
        padding: 0 10px;
        box-shadow: 0 0 6px 2px #ccc;
    }
}

</style>