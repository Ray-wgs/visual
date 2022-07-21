import * as THREE from "three";
import {vsThreeCreateCameraOption} from "@/types/three.module";
import {v1 as uuid} from 'uuid'
const camera = {
    /** 
    * 通过配置项生成相机
    * @param {String} name 相机的名称
    * @param {String} type  要生成的相机类别，目前包含 OrthographicCamera,PerspectiveCamera
    * @param {vsThreePoint} position 相机的初始位置
    * @param lookAt  相机的朝向的点
    * @param opts 相机的配置项，如可观测的位置的远近、视角的大小等
    * @return camera 生成的相机实例
    */ 
     creatCamera: ({name,type,position,lookAt,opts}:vsThreeCreateCameraOption)=>{
        let camera:THREE.Camera
        const {left,top,right,bottom,near,far,fov,aspect} = opts
        switch (type) {
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
        camera.name = name || uuid()
        camera.position.set(position.x,position.y,position.z)
        camera.lookAt(lookAt.x,lookAt.y,lookAt.z)
        return camera
    }
}
export default camera