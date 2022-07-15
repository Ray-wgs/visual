interface obj {
    [key:string]:any
}
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
                    recurse(item, prop ? prop + '.[' + index + ']' : index);
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
export {unflatten,flatten}