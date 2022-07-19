export interface obj{
    [key:string]:any
}
export interface vsChartOption {
    type:string,
    name:string|number,
    option:any,
    flattenOption:any,
    jsonOption:string,
    data?:any
}
export interface vsChartTemplateOption{
    label:string,
    value:string|number|boolean,
    
}
export interface vsChartTemplateUi<T>{
    type:string,
    model:string,
    value:any,
    step?:number,
    max?:number,
    min?:number,
    placeholder?:string,
    options?:Array<T>,
    [key:string]:any
}
export interface vsChartTemplateCommon{
    [key:string]:vsChartTmeplate
}
export interface vsChartTmeplate{
    name:string,
    model:string,
    children?:obj|obj[],
    tabs?:boolean,
    ui?:vsChartTemplateUi<vsChartTemplateOption>
}