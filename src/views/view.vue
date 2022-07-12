<template>
    <div class="board-container" ref="boardContainer">
            <div
            v-for="(comp,index) in boardOpt.comps"
            :key="comp.id"
            :style="{zIndex:index+1,...comp.style}"
            v-bind="comp.style"
            class="view-box"
            >
                <component :is="comp.tag" v-bind="comp.propValue" :style="comp.style">
                
                </component>
            </div>
            <vs-three
            v-if="boardOpt.common.threeBg"
            class="board-three-bg"
            >

            </vs-three>
        </div>
</template>

<script lang='ts' setup name="vsBoardView">
import { reactive, toRefs,ref} from 'vue'
import { useBoardStore } from '@/stores/board'
import { storeToRefs } from 'pinia'
const store = useBoardStore()
const {boardOpt} = storeToRefs(store)
</script>
<style scoped lang='scss'>
.board-container{
    position: relative;
    width: 1920px;
    height:1080px;
    background-size: 100% 100%;
    .view-box{
        position: absolute;
    }
    .board-three-bg{
        position: relative;
    }
}
</style>