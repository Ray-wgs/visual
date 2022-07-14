
export interface obj{
    [key:string]:any
}
export interface vsTableConfig{
    common:obj,
    column:vsTableColumnConfig[]
}
export interface vsTableColumnConfig{
    prop:string,
    label:string,
    id:number|string,
    width:number|string,
    [key:string]:any
}
export interface vsTableConfig2{
    dataKey:string,
    title:string,
    width:number|string,
    key:string
}