import { App } from 'vue'
const compModules = import.meta.glob('@/components/*.vue')
const dictModules = import.meta.glob('@/directives/*.ts')
const install = (app:App<Element>)=>{
    for (const path in compModules) {
        compModules[path]().then((module)=>{
            app.component(module.default.name,module.default)
        })
    }
    for (const path in dictModules) {
        dictModules[path]().then((module)=>{
            app.directive(module.default.name,module.default.options)
        })
    }
}
export default {install}