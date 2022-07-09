import *as three from "three"
export interface vsThreeEventOps {
    container:string|Element|HTMLDivElement,
    eventType:string,
    callback:Function,
    camera:three.Camera,
    scene:three.Scene
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
    cType:string,
    cPosition:vsThreePoint,
    cLookAt:vsThreePoint,
    cOpts:vsThreeCameraOption,
    cName:string,
    cId:number
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
    lType:string,
    lPosition:vsThreePoint,
    lOpts:vsThreeLightOption,
    lName:string,
    lId:number
}