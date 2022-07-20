export interface obj{
    [key:string]:any
  }
export interface vsContainerCommon{
    bgType:'three'|'two',
    bg?:string,
    width:number,
    height:number
}
export interface vsContainerComp{
    tag:string,
    id?:string|number,
    propValue:obj,
    style:obj,
    [key:string]:any
}
export interface vsContainerData{
    common:vsContainerCommon,
    comps:vsContainerComp[]
}
export interface vsCompOption{
    [key:string]:vsContainerComp
}