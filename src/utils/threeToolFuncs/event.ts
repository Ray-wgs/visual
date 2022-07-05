import * as three from "three";
import { vsThreeEventOps } from "@/types/three.module";
const event = {
    /** 
    * 向场景中添加事件
    * @param  opts 添加事件的配置项
    */ 
    addModelEvent:(opts:vsThreeEventOps)=>{
        const {container,eventType,camera,scene,callback} = opts
        let raycaster = new three.Raycaster();
        let mouse = new three.Vector2();
        let threeDom = document.querySelector(container) as HTMLDivElement
        threeDom.addEventListener(eventType,(ev:MouseEvent|Event)=>{
            mouse.x = ( ev.clientX / threeDom.offsetWidth ) * 2 - 1;
            mouse.y = - ( ev.clientY / threeDom.offsetHeight ) * 2 + 1;
            // 通过摄像机和鼠标位置更新射线
            raycaster.setFromCamera( mouse, camera );
            // 计算物体和射线的焦点
            let intersects = raycaster.intersectObjects( scene.children );
            if(intersects.length > 0){
                callback(intersects,ev)
            }
        })
    }
}
export default event