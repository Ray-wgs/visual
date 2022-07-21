import _ from 'lodash'
interface obj {
    [key:string]:any
}
import { vsChartTmeplate } from '@/types/chart.module';
/** 
* 扁平化函数
* @param {Object} data 要扁平化的数据
* @return obj 扁平化之后的数据
* e.g  { a : { b : 1 } } => { a.b : 1 }
*/ 
const flatten = (obj:obj)=>{
    var result:obj = {};
    function recurse(src:obj, prop:string) {
        var toString = Object.prototype.toString;
        if (toString.call(src) == '[object Object]') {
            var isEmpty = true;
            for (var p in src) {
                isEmpty = false;
                recurse(src[p], prop ? prop + '.' + p : p)
            }
            if (isEmpty && prop) {
                result[prop] = {};
            }
        } else if (toString.call(src) == '[object Array]') {
            var len = src.length;
            if (len > 0) {
                src.forEach(function (item:any, index:string) {
                    recurse(item, prop ? prop + '.' + index : index);
                })
            } else {
                result[prop] = [];
            }
        } else {
            result[prop] = src;
        }
    }
    recurse(obj,'');

    return result;
}
/** 
* 反扁平化函数
* @param {Object} data 要反扁平化的数据
* @return obj 反扁平化之后的数据
* e.g { a.b : 1 } => { a : { b : 1 } }
*/ 
const unflatten = (data:obj)=>{
    if (Object(data) !== data || Array.isArray(data))
        return data;
    let result:obj = {}, cur:obj, prop, idx, last, temp;
    for(let p in data) {
        cur = result, prop = "", last = 0;
        do {
            idx = p.indexOf(".", last);
            temp = p.substring(last, idx !== -1 ? idx : undefined);
            cur = cur[prop] || (cur[prop] = (!isNaN(parseInt(temp)) ? [] : {}));
            prop = temp;
            last = idx + 1;
        } while(idx >= 0);
        cur[prop] = data[p];
    }
    return result[""];
}
/** 
* series to template
* @param {Object}  series chart能使用的option
* @return template 配置所用的数据类型
*/ 
const seriesTotemplate = (series:obj[],template:vsChartTmeplate)=>{
    let templateTabs:vsChartTmeplate = _.cloneDeep(template)
    templateTabs.children = []
    const setModel = (template:obj,index:number)=>{
        template.model = template.model.replace(/series/,`series.${index}`)
        if(template.children){
            Object.keys(template.children).forEach(key=>{
                setModel(template.children[key],index)
            })
        }
    }
    let templateCopy:obj = {}
    series.forEach((seriesItem,index)=>{
        templateCopy = _.cloneDeep(template.children!)
        if(template.children){
            Object.keys(template.children).forEach(key=>{
                setModel(templateCopy[key],index)
            })
            templateTabs.children!.push(templateCopy)
        }
    })
    return templateTabs
}
/** 
* 比对两个数组的差异 不包含函数 
* @param  oldArr 原数组
* @param  newArr 新数组
* e.g oldArr: [{a:1},{b:2},{c:3}],newArr:[{a:1},{b:3}] => {add:[{b: 3}],change:[],delete:[{b: 2},{c: 3}]}
*/ 
const compareArray = (oldArr:any[],newArr:any[])=>{
    let patchs = {
        delete:<any[]>[],
        add:<any[]>[],
        change:<any[]>[]
    }
    let max = Math.max(oldArr.length,newArr.length)
    for (let index = 0; index < max; index++) {
        deep(oldArr[index],newArr[index],index)
    }
    function deep(oldNode:any,newNode:any,index:number){
        // 两个节点 类型一样 继续判断
        if(typeof oldNode == typeof newNode){
            // array or obj
            if(oldNode instanceof Array){
                compareArray(oldNode,newNode)
            }else{
                if(typeof oldNode == 'object'){
                    if(oldNode.hasOwnProperty('key')&&newNode.hasOwnProperty('key')){
                        if(oldNode['key'] == newNode['key']){
                            if(!compareObj(oldNode,newNode)){
                                patchs.change.push(newNode)
                            }
                        }else{
                            patchs.delete.push(oldNode)
                            patchs.add.push(newNode)
                        }
                    }else{
                        if(!compareObj(oldNode,newNode)){
                            patchs.delete.push(oldNode)
                            patchs.add.push(newNode)
                        }
                    }
                    
                }else{
                    if(oldNode !== newNode){
                        patchs.delete.push(oldNode)
                        patchs.add.push(newNode)
                    }
                }
            }
        }else{
            // 两个节点 无旧节点 有新节点 判断为新增 有旧节点则判断为删除
          if(newNode) patchs.add.push(newNode)
          else patchs.delete.push(oldNode)
        }
    }
    return patchs
}
/** 
* 比较两个对象是否相等 不包含函数
* @param  oldObj 原对象
* @param  newObj 新对象
* e.g oldObj: {a:1},newObj:{a:1} => true,oldObj: {a:2},newObj:{a:1} => false,
*/ 
const compareObj = (oldObj:obj,newObj:obj):boolean=>{
    if(oldObj == newObj){
        return true
    }else{
        let oldKeys = Object.getOwnPropertyNames(oldObj)
        let newKeys = Object.getOwnPropertyNames(newObj)
        if(oldKeys.length != newKeys.length){
            return false
        }else{
            for (const key in newObj) {
                if (Object.prototype.hasOwnProperty.call(newObj, key)) {
                    if(typeof newObj[key] == 'object'){
                       return compareObj(oldObj[key],newObj[key])
                    }else if(newObj[key] != oldObj[key] ){
                        return false
                    }
                }
            }
        }
        return true
    }
}
export {unflatten,flatten,seriesTotemplate,compareArray,compareObj}