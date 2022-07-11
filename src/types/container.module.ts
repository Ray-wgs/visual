
export interface vsContainerCommon{
    threeBg:boolean,
    bg?:string,
}
export interface vsContainerComp{
    tag:string,
    id:string|number,
    propValue:Object,
    style:Object
}
export interface vsContainerData{
    common:vsContainerCommon,
    comps:vsContainerComp[]
}