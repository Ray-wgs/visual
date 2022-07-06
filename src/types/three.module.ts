import *as three from "three"
export interface vsThreeEventOps {
    container:string|Element|HTMLDivElement,
    eventType:string,
    callback:Function,
    camera:three.Camera,
    scene:three.Scene
}