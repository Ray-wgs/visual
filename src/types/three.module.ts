import *as three from "three"
export interface vsThreeEventOps {
    container:string,
    eventType:string,
    callback:Function,
    camera:three.Camera,
    scene:three.Scene
}