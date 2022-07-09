import * as THREE from "three";
import {vsThreeCreateCameraOption} from "@/types/three.module";
import {v1 as uuid} from 'uuid'
const camera = {
    /** 
    * 通过配置项生成相机
    * @param {String} cName 相机的名称
    * @param {String} cType  要生成的相机类别，目前包含 OrthographicCamera,PerspectiveCamera
    * @param {vsThreePoint} cPosition 相机的初始位置
    * @param cLookAt  相机的朝向的点
    * @param cOpts 相机的配置项，如可观测的位置的远近、视角的大小等
    * @return camera 生成的相机实例
    */ 
     creatCamera: ({cName,cType,cPosition,cLookAt,cOpts}:vsThreeCreateCameraOption)=>{
        let camera:THREE.Camera
        const {left,top,right,bottom,near,far,fov,aspect} = cOpts
        switch (cType) {
            case 'OrthographicCamera':
                camera = new THREE.OrthographicCamera(left,top,right,bottom,near,far)
                break;
            case 'PerspectiveCamera':
                camera = new THREE.PerspectiveCamera(fov,aspect,near,far)
                break;
            default:
                camera = new THREE.OrthographicCamera()
                break;
        }
        camera.name = cName || uuid()
        camera.position.set(cPosition.x,cPosition.y,cPosition.z)
        camera.lookAt(cLookAt.x,cLookAt.y,cLookAt.z)
        return camera
    }
}
export default camera