import *as three from "three"
export interface obj {
    [key:string]:any
}
export interface vsThreeEventOps {
    container?:string|Element|HTMLDivElement,
    eventType:string,
    callback:Function,
    camera:three.Camera,
    scene:three.Scene
}
export interface vsThreeEventOpsPart {
    container?:string|Element|HTMLDivElement,
    eventType:string,
    callback:Function,
    camera?:three.Camera,
    scene?:three.Scene
}
export interface vsThreePoint {
    x:number,
    y:number,
    z:number
}
export interface vsThreeCameraOption {
    left?:number,
    top?:number,
    right?:number,
    bottom?:number,
    fov?:number,
    aspect?:number,
    near?:number,
    far?:number,
}
export interface vsThreeCreateCameraOption{
    type:'OrthographicCamera'|'PerspectiveCamera',
    position:vsThreePoint,
    lookAt:vsThreePoint,
    opts:vsThreeCameraOption,
    name?:string,
}
export interface vsThreeLightOption {
    color?:THREE.ColorRepresentation,
    intensity?:number,
    distance?:number,
    angle?:number,
    penumbra?:number,
    decay?:number,
    skyColor?:THREE.ColorRepresentation,
    groundColor?:THREE.ColorRepresentation,
}
export interface vsThreeCreateLightOption{
    type:'AmbientLight'|'SpotLight'|'PointLight'|'HemisphereLight',
    position:vsThreePoint,
    opts:vsThreeLightOption,
    name?:string,
}
export interface vsThreeModelOption{
    width?:number,
    height?:number,
    depth?:number,
    radius?:number,
    radiusTop?:number,
    radiusBottom?:number,
}
export interface vsThreeCreateModelOption{
    name:string,
    type:string,
    material:{
        type:'color'|'img',
        material:three.ColorRepresentation|string
    },
    position:vsThreePoint,
    opts:vsThreeModelOption
}
export interface vsThreeHelper{
    name:'AxesHelper'|'GridHelper'|'CameraHelper',
    value:boolean,
    label:string
}

export interface vsThreeOpt{
    name:string,
    option:{
        models?:vsThreeCreateModelOption[]|obj[],
        lights?:vsThreeCreateLightOption[]|obj[],
        events?:vsThreeEventOpsPart[]|obj[],
        camera?:vsThreeCreateCameraOption|obj,
        helpers?:vsThreeHelper|obj
    },
    controls:{
        drag:boolean
    }
}