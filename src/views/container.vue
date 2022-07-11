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
    <el-button @click="onSave">

    </el-button>
</template>

<script lang='ts' setup>
import { reactive, toRefs,ref,onMounted} from 'vue'
import {vsDragResizeStyle} from '@/types/dragResize.module'
import {vsContainerData} from '@/types/container.module'
import html2canvas from 'html2canvas'
const boardOption =ref<vsContainerData>({
    common:{
        threeBg:true,
        bg:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210F2130512J47-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660113230&t=862eb7ccd023bbc5024451f3e0d0daed'
    },
    comps:[
        {tag:'vs-text',id:'1',propValue:{text:'12345678',running:true},style:{color:'#fff',width:'300px',height:'500px'}},
        {tag:'vs-date-time',id:'2',propValue:{realTime:true},style:{minh:20,minw:120}}
    ]
})
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
const onSave = async ()=>{
     let canvas = await html2canvas(boardContainer.value)
     console.log(canvas)
     console.log(canvas.toDataURL("image/png"))
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