// 自动注册暂时不用

// import { App } from 'vue'
// const compModules = import.meta.glob('@/components/*.vue')
// const dictModules = import.meta.glob('@/directives/*.ts')
// const install = (app:App<Element>)=>{

//     for (const path in compModules) {
//         compModules[path]().then((module)=>{
//             app.component(module.default.name,module.default)
//         })
//     }
//     console.log('%c---------components加载完成---------','color:#ccc')

//     for (const path in dictModules) {
//         dictModules[path]().then((module)=>{
//             app.directive(module.default.name,module.default.options)
//         })
//     }
//     console.log('%c---------directives加载完成---------','color:#ccc')



//     console.log('%c---------plugins加载完成😊---------','color:#ccc')
// }
// export default {install}

import { App } from 'vue'
import Chart from '@/components/Chart.vue'
import ColorsIcon from '@/components/ColorsIcon.vue'
import DateTime from '@/components/DateTime.vue'
import DragResize from '@/components/DragResize.vue'
import Table from '@/components/Table.vue'
import Text from '@/components/Text.vue'
import Three from '@/components/Three.vue'
import InputNumber from '@/components/InputNumber.vue'
import CodeMirror from '@/components/CodeMirror.vue'

import CommonOpt from '@/components/CompOpts/CommonOpt.vue'
import DateTimeOpt from '@/components/CompOpts/DateTimeOpt.vue'

import TableOpt from '@/components/CompOpts/TableOpt.vue'
import TextOpt from '@/components/CompOpts/TextOpt.vue'
import ImgOpt from '@/components/CompOpts/ImgOpt.vue'
import ChartOpt from '@/components/CompOpts/ChartOpt.vue'

import ColorsIconOpt from '@/components/CompOpts/IconOpt.vue'
const install = (app:App<Element>)=>{
    app.component(Chart.name,Chart)
    app.component(ColorsIcon.name,ColorsIcon)
    app.component(DateTime.name,DateTime)
    app.component(DragResize.name,DragResize)
    app.component(InputNumber.name,InputNumber)
    app.component(Table.name,Table)
    app.component(Text.name,Text)
    app.component(Three.name,Three)
    app.component(CodeMirror.name,CodeMirror)
    

    app.component(CommonOpt.name,CommonOpt)
    app.component(DateTimeOpt.name,DateTimeOpt)
    app.component(TableOpt.name,TableOpt)
    app.component(TextOpt.name,TextOpt)
    app.component(ImgOpt.name,ImgOpt)
    app.component(ChartOpt.name,ChartOpt)
    app.component(ColorsIconOpt.name,ColorsIconOpt)
    
}
export default {install}