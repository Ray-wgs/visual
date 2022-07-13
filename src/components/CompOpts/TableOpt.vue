<template>
    <el-button @click="onViewData">
        查看源数据
    </el-button>
    <el-tabs
        v-model="actvieTab"
        type="card"
        editable
        class="vs-tabs"
        @edit="handleTabsEdit"
    >
        <el-tab-pane
        v-for="(config,index) in curCompOpt.propValue.tableConfig"
        :key="config.id"
        :label="'第'+(index+1)+'列'"
        :name="config.id"
        >
            <el-form-item label="id">
                <el-input v-model="config.id" readonly ></el-input>
            </el-form-item>
            <el-form-item label="字段">
                <el-input v-model="config.prop"></el-input>
            </el-form-item>
            <el-form-item label="列名">
                <el-input v-model="config.label"></el-input>
            </el-form-item>
            <el-form-item label="宽度">
                <el-input-number v-model="config.width" :min="0"></el-input-number>
            </el-form-item>
        </el-tab-pane>
    </el-tabs>
    <el-dialog
    v-model = 'dialogShow'
    title="此表格源数据"
    >
        
        <div class="vs-view-data">
            <el-auto-resizer>
                <template #default="{ height, width }">
                    <el-table-v2
                    :columns="viewTableConfig"
                    :data="curCompOpt.propValue.tableData"
                    :width="width"
                    :height="height"
                    fixed
                    />
                </template>
            </el-auto-resizer>
        </div>
    </el-dialog>
</template>

<script lang='ts' setup name="vsTableOpt">
import {vsTableConfig} from'@/types/table.module'
import { useBoardStore } from '@/stores/board';
import {useCompOptStore} from '@/stores/compOpt'
import {storeToRefs} from 'pinia'
import {ref} from 'vue'
import {v4 as uuid} from 'uuid'
import {vsTableConfig2} from '@/types/table.module'
const store = useBoardStore()
const optStore = useCompOptStore()
const {curCompOpt} = storeToRefs(store)
const actvieTab = ref('')
const handleTabsEdit = (targetName: string, action: 'remove' | 'add')=>{
    console.log(targetName,action)
    if(action == 'remove'){
        remove()
    }else{
        add()
    }
}
const remove = ()=>{
    curCompOpt.value.propValue.tableConfig = curCompOpt.value.propValue.tableConfig.filter((column:vsTableConfig)=>{
        return column.id != actvieTab.value
    })
    actvieTab.value = curCompOpt.value.propValue.tableConfig[0].id
}
const add = ()=>{
    if(curCompOpt.value.propValue.tableConfig){
        curCompOpt.value.propValue.tableConfig.push({
            id:uuid(),
            prop:'字段英文名',
            label:'列名',
            width:150
        })
    }else{
        curCompOpt.value.propValue['tableConfig'] = [{
            id:uuid(),
            prop:'字段英文名',
            label:'列名',
            width:150
        }]
    }
    actvieTab.value = curCompOpt.value.propValue.tableConfig[curCompOpt.value.propValue.tableConfig.length - 1].id
}
const dialogShow = ref(false)
const viewTableConfig = ref<vsTableConfig2[]>([])
const onViewData = ()=>{
    viewTableConfig.value = []
    if(curCompOpt.value.propValue.tableData){
        let tableItem = curCompOpt.value.propValue.tableData[0]
        Object.keys(tableItem).forEach(key=>{
            viewTableConfig.value.push({
                dataKey:key,
                title:key,
                width:150,
                key:key
            })
        })
    }
    dialogShow.value = true
}
</script>
<style scoped lang='scss'>
.vs-view-data{
    height: 600px;
}
</style>