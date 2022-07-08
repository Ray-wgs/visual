import * as THREE from "three";
import { vsThreePoint ,vsThreeCameraOption,vsThreeCreateCameraOption} from "@/types/three.module";
const camera = {
    /** 
    * 通过配置项生成相机
    * @property {String} cType  要生成的相机类别，目前包含 OrthographicCamera,PerspectiveCamera
    * @param {vsThreePoint} cPosition 相机的初始位置
    * @property cLookAt  相机的朝向的点
    * @param cOpts 相机的配置项，如可观测的位置的远近、视角的大小等
    * @return camera 生成的相机实例
    */ 
     creatCamera: ({cType,cPosition,cLookAt,cOpts}:vsThreeCreateCameraOption)=>{
        let camera:THREE.Camera
        switch (cType) {
            case 'OrthographicCamera':
                const {left,top,right,bottom,near:ognear,far:ogfar} = cOpts
                camera = new THREE.OrthographicCamera(left,top,right,bottom,ognear,ogfar)
                break;
            case 'PerspectiveCamera':
                const {fov,aspect,near:ppnear,far:ppfar} = cOpts
                camera = new THREE.PerspectiveCamera(fov,aspect,ppnear,ppfar)
                break;
            default:
                camera = new THREE.OrthographicCamera()
                break;
        }
        camera.position.set(cPosition.x,cPosition.y,cPosition.z)
        camera.lookAt(cLookAt.x,cLookAt.y,cLookAt.z)
        return camera
    }
}
export default camera