<template>
    <div>
        <el-table :data="tableData" class="vs-table" v-bind="tableConfig.common">
            <el-table-column 
            v-for="column in tableConfig.column" 
            :key="column.id" 
            :prop="column.prop" 
            :label="column.label" 
            :sortable="column.sortable"
            :stripe="column.stripe"
            :border="column.border"
            :min-width="column.width+'%'"
            >

            </el-table-column>
        </el-table>
    </div>
</template>

<script lang='ts' setup name="vsTable">
import {vsTableConfig} from'@/types/table.module'
import { reactive, toRefs,ref ,PropType} from 'vue'
    const props = defineProps({
        tableData:{
            type:Array,
            default:[{id:1,name:'test1'},{id:2,name:'test2'},]
        },
        tableConfig:{
            type: Object as PropType<vsTableConfig>,
            default:{common:{},column:[{prop:'id',label:'ID',id:1,width:'10'},{prop:'name',label:'名称',id:2,width:'10'},]}
        }
    })
    const {tableData,tableConfig} = toRefs(props)
</script>
<style scoped lang='scss'>
.vs-table{
    width: 100%;
    height:100%;
    overflow: auto;
}
</style>