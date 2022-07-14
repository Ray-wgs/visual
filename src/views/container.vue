<template>
    <div class="vs-header">
        <span>是否开启三维场景</span> 
        <el-switch v-model="boardOpt.common.threeBg">

        </el-switch>
        <span>普通背景</span>
        <el-input v-model="boardOpt.common.bg" style="width: 50px;">

        </el-input>
        <el-button @click="view">
            预览
        </el-button>
    </div>
    <div class="vs-container">
        <div class="vs-layer">
            <vs-layer-opt />
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
                @click.stop="curCompOpt = comp"
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
        </div>
        <div class="vs-opt" >
            <el-form :model="curCompOpt" label-width="80px" label-position="top"  v-if="curCompOpt">
                <component :is="curCompOpt.optComp"></component>
            </el-form>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs,ref,onMounted,watch,nextTick,watchEffect,computed} from 'vue'
import {vsDragResizeStyle} from '@/types/dragResize.module'
import {vsContainerData,obj,vsContainerComp} from '@/types/container.module'
import html2canvas from 'html2canvas'
import { useBoardStore } from '@/stores/board'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router';
const router = useRouter()
const store = useBoardStore()
const {boardOpt,curCompOpt} = storeToRefs(store)
const boardContainer = ref()
const updateComp = (data:vsDragResizeStyle)=>{
    console.log(data)
    let compId = data.nodeKey
    delete data.nodeKey
    let comp = boardOpt.value.comps.find((comp)=>{
        return comp.id == compId
    })
    if(comp) comp.style = {...comp.style,...data}
}
const view = ()=>{
    router.push({path:'/view'})
}

onMounted(()=>{
    if(!boardOpt.value.common.threeBg){
        boardContainer.value.style.backgroundImage=`url(${boardOpt.value.common.bg})`
    }
})
watch(()=>boardOpt.value.common.bg,()=>{
    if(!boardOpt.value.common.threeBg){
        boardContainer.value.style.backgroundImage=`url(${boardOpt.value.common.bg})`
    }
})
</script>
<style scoped lang='scss'>
.vs-header{
    height:60px;
    width: 100%;
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
        .board-container{
            position: relative;
            width: 1920px;
            height:1080px;
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