<template>
    <span>层级管理</span>
    <draggable v-model="boardOpt.comps"  item-key="id">
            <template #item="{element}">
                <div closable @close="remove(element.id)" class="layer">
                    {{element.tag}}
                </div>
            </template>
    </draggable>
</template>

<script lang='ts' setup name="vsLayerOpt">
import { reactive, toRefs,ref} from 'vue'
import { useBoardStore } from '@/stores/board';
import { storeToRefs } from 'pinia';
import draggable from 'vuedraggable'
import { ElMessage } from 'element-plus';
const store = useBoardStore()
const {boardOpt,curCompOpt} = storeToRefs(store)
const remove = (id:string|number)=>{
    let idx = boardOpt.value.comps.findIndex((comp)=>{
        return comp.id == id
    })
    boardOpt.value.comps.splice(idx,1)
    ElMessage.success('移除组件成功')
}
</script>
<style scoped lang='scss'>
.layer{
    width: 87.5%;
    font-size: 16px;
    padding:10px 5%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 2px;
    @include themify($themes) {
        box-shadow: 0 0 2px 2px themed("bg-color2");
    };
}
</style>