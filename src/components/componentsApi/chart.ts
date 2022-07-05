import request from '@/utils/http'

export default {
    /** 
    @param  data 参数(待定)
    @return chartOption 
    */ 
    getChartOption(data:any){
        return request({
            url:'/get/chart',
            method:'post',
            data
        })
    }
}