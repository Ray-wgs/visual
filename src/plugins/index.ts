import { App } from 'vue'
console.log('%c---------plugins开始加载---------','color:#ccc')
const compModules = import.meta.glob('@/components/*.vue')
const dictModules = import.meta.glob('@/directives/*.ts')
const install = (app:App<Element>)=>{

    for (const path in compModules) {
        compModules[path]().then((module)=>{
            app.component(module.default.name,module.default)
        })
    }
    console.log('%c---------components加载完成---------','color:#ccc')

    for (const path in dictModules) {
        dictModules[path]().then((module)=>{
            app.directive(module.default.name,module.default.options)
        })
    }
    console.log('%c---------directives加载完成---------','color:#ccc')



    console.log('%c---------plugins加载完成😊---------','color:#ccc')
}
export default {install}