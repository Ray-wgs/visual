<template>
    <draggable v-model="boardOpt.comps"  item-key="id">
            <template #item="{element}">
                <div class="layer">
                    {{element.tag + element.id}}
                </div>
            </template>
    </draggable>
</template>

<script lang='ts' setup name="vsLayerOpt">
import { reactive, toRefs,ref} from 'vue'
import { useBoardStore } from '@/stores/board';
import { storeToRefs } from 'pinia';
import draggable from 'vuedraggable'
const store = useBoardStore()
const {boardOpt} = storeToRefs(store)
</script>
<style scoped lang='scss'>
.layer{
    background: #ccc;
    border: 1px solid #ddd;
    margin: 10px 0;
}
</style>