<template>
    <el-row class="vs-header" :align="'middle'">
        <el-col :span="4">
            <el-dropdown  trigger="click" type="primary" @command="addComponent">
                <el-button class="vs-header-btn">
                    添加组件
                </el-button>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="vsText">文字组件</el-dropdown-item>
                    <el-dropdown-item command="vsDateTime">时间组件</el-dropdown-item>
                    <el-dropdown-item command="vsTable">表格组件</el-dropdown-item>
                    <el-dropdown-item command="vsChart">图表组件</el-dropdown-item>
                    <el-dropdown-item command="img">图片组件</el-dropdown-item>
                    <el-dropdown-item command="vsColorsIcon">图标组件</el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-col>
        <el-col :span="4">
            <span>是否开启三维场景</span> 
            <el-switch v-model="boardOpt.common.threeBg">

            </el-switch>
        </el-col>
        <el-col :span="4">
            <span>普通背景</span>
            <el-input 
            v-model="boardOpt.common.bg" 
            style="width: 180px;"
            >

            </el-input>
        </el-col>
        <el-col :span="4">
            <span>分辨率</span>
            <el-input-number 
            v-model="boardOpt.common.width" 
            controls-position="right"
            style="width: 100px;"
            >

            </el-input-number>
            <el-input-number 
            v-model="boardOpt.common.height" 
            controls-position="right"
            style="width: 100px;"
            >

            </el-input-number>
        </el-col>
        <el-col :span="4">
            <el-button @click="view">
                预览
            </el-button>
            <el-button @click="save">
                保存
            </el-button>
        </el-col>
    </el-row>
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
                @mousedown="curCompOpt = comp"
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
            <vs-panel-opt v-if="JSON.stringify(curCompOpt) !=='{}'" />
        </div>
    </div>
</template>

<script lang='ts' setup>
import {ref,onMounted,watch,nextTick} from 'vue'
import {vsDragResizeStyle} from '@/types/dragResize.module'
import html2canvas from 'html2canvas'
import { useBoardStore } from '@/stores/board'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router';
import option from '@/assets/json/comp.default'
import {v4 as uuid} from 'uuid'
import _ from 'lodash'
const router = useRouter()
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
const view = ()=>{
    router.push({path:'/view'})
}
const save = async ()=>{
    let canvas = await html2canvas(boardContainer.value)
    console.log(canvas.toDataURL("image/png"))
    console.log(boardOpt.value)
}
const addComponent = (command:string)=>{
    let id = uuid()
    let compOption = _.cloneDeep(option[command])
    compOption.id = id
    console.log(compOption)
    boardOpt.value.comps.push(compOption)    
}
onMounted(()=>{
    if(!boardOpt.value.common.threeBg){
        boardContainer.value.style.backgroundImage=`url(${boardOpt.value.common.bg})`
    }
    nextTick(()=>{
        boardContainer.value.style.width = boardOpt.value.common.width + 'px'
        boardContainer.value.style.height = boardOpt.value.common.height + 'px'
    })
})
watch(()=>boardOpt.value.common,()=>{
    if(!boardOpt.value.common.threeBg){
        boardContainer.value.style.backgroundImage=`url(${boardOpt.value.common.bg})`
    }
    boardContainer.value.style.width = boardOpt.value.common.width + 'px'
    boardContainer.value.style.height = boardOpt.value.common.height + 'px'
},{deep:true})
</script>
<style scoped lang='scss'>
.vs-header{
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