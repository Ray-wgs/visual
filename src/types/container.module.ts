export interface obj{
    [key:string]:any
  }
export interface vsContainerCommon{
    threeBg:boolean,
    bg?:string,
}
export interface vsContainerComp{
    tag:string,
    id:string|number,
    propValue:obj,
    style:obj,
    [key:string]:any
}
export interface vsContainerData{
    common:vsContainerCommon,
    comps:vsContainerComp[]
}