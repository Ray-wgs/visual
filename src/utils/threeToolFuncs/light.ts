import * as THREE from 'three'
import { vsThreePoint ,vsThreeCameraOption,vsThreeCreateLightOption} from "@/types/three.module";
const light = {
    /** 
    * 通过配置项生成光源
    * @param {String} lType  要生成的光源类别，目前包含 AmbientLight(环境光),SpotLight(聚光灯),PointLight(点光源),HemisphereLight(自然光)
    * @param {vsThreePoint} lOpts 光源配置项，如：color(颜色)，intensity(光线强弱)，distance(距离),angle(角度),penumbra(半影区),decay(衰减),skyColor(从天空发出的光线的颜色),groundColor(从地面发出的光线的颜色)
    * @return light 生成的光源
    */ 
    craeteLight:({lType,lOpts}:vsThreeCreateLightOption)=>{
        let light:THREE.Light
        const {color, intensity, distance, angle, penumbra, decay ,skyColor ,groundColor} = lOpts
        switch(lType){
            case 'AmbientLight' :
                light = new THREE.AmbientLight(color,intensity)
                break;
            case 'SpotLight' :
                light = new THREE.SpotLight(color, intensity, distance, angle, penumbra, decay)
                break;
            case 'PointLight' :
                light = new THREE.PointLight(color, intensity, distance ,decay)
                break;
            case 'HemisphereLight' :
                light = new THREE.HemisphereLight(skyColor,groundColor)
                break;
            default:
                light = new THREE.AmbientLight()
            break;
        }
        return light
    }
}
export default light