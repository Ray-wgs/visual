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
export {unflatten,flatten,seriesTotemplate}