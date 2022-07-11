<template>
    <div class="board-container" ref="boardContainer" @click="active == 'null'">
        <vs-drag-resize
        v-for="(comp,index) in boardOption.comps"
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
        v-if="boardOption.common.threeBg"
        class="board-three-bg"
        >

        </vs-three>
    </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs,ref,onMounted} from 'vue'
import {vsDragResizeStyle} from '@/types/dragResize.module'
import {vsContainerData} from '@/types/container.module'
const boardOption =ref<vsContainerData>({common:{threeBg:false,bg:''},comps:[
    {tag:'vs-text',id:'1',propValue:{text:'12345678',running:true},style:{color:'#fff',width:'300px',height:'500px'}},
    {tag:'vs-date-time',id:'2',propValue:{realTime:true},style:{minh:20,minw:120}}
    ]})
const boardContainer = ref()
const active = ref<string|number>('null')
const updateComp = (data:vsDragResizeStyle)=>{
    console.log(data)
    let compId = data.nodeKey
    delete data.nodeKey
    let comp = boardOption.value.comps.find((comp)=>{
        return comp.id == compId
    })
    if(comp) comp.style = {...comp.style,...data}
}
onMounted(()=>{
    if(!boardOption.value.common.threeBg){
        console.log(boardContainer.value.style, boardContainer.value.style.backgroundImage)
        boardContainer.value.style.backgroundImage=`url(${boardOption.value.common.bg})`
        console.log(boardContainer.value.style, boardContainer.value.style.backgroundImage)
    }
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