<template>
    <div class="vs-header-container">
        <div class="add-comp">
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
        </div>
        <div class="common">
            <span style="margin-right:12px">选择背景</span>
            <el-radio-group v-model="boardOpt.common.bgType">
                <el-radio label="three" >三维背景</el-radio>
                <el-radio label="two" >普通背景</el-radio>
            </el-radio-group>
            <el-input v-model="boardOpt.common.bg" style="width:250px;margin-left:10px" placeholder="输入三维场景id或普通图片地址">

            </el-input>
        </div>
        <div class="resolution-power">
            <span style="margin-right:12px">分辨率</span>
                <el-input-number 
                    v-model="boardOpt.common.width" 
                    controls-position="right"
                    style="width: 100px;"
                />
                <el-input-number 
                    v-model="boardOpt.common.height" 
                    controls-position="right"
                    style="width: 100px;"
                />
        </div>
        <div class="option">
            <el-button @click="view">
                预览
            </el-button>
            <el-button @click="save">
                保存
            </el-button>
        </div>
    </div>
</template>

<script lang='ts' setup name="vsBoardHeaderOpt">
import { reactive, toRefs,ref} from 'vue'
import { useBoardStore } from '@/stores/board'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router';
import {v4 as uuid} from 'uuid'
import option from '../config/comp.default'
import _ from 'lodash'
const router = useRouter()
const store = useBoardStore()
const {boardOpt} = storeToRefs(store)
const view = ()=>{
    router.push({path:'/view'})
}
const save = async ()=>{
    console.log(document.querySelector('.board-container'))
    // let canvas = await html2canvas(boardContainer.value)
    // console.log(canvas.toDataURL("image/png"))
    console.log(boardOpt.value)
}
const addComponent = (command:string)=>{
    let id = uuid()
    let compOption = _.cloneDeep(option[command])
    compOption.id = id
    console.log(compOption)
    boardOpt.value.comps.push(compOption)    
}
</script>
<style scoped lang='scss'>
.vs-header-container{
    width: 100%;
    height:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .add-comp{
        display: flex;
        align-items: center;
    }
    .common{
       width: 600px;
    }
}
</style>