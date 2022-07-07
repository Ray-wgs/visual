import * as three from "three";
import { vsThreeEventOps } from "@/types/three.module";
const event = {
    /** 
    * 向场景中添加事件
    * @param container threejs渲染所在的dom
    * @param eventType 触发事件的类别，如:click,dbclik,mousedown,mouseup
    * @param camera 通过摄像机和鼠标位置更新射线
    * @param scene 三维场景用于计算物体和射线的焦点
    * @param callback 回调事件携带 触发事件的模型和鼠标事件
    */ 
    setEvent:({container,eventType,camera,scene,callback}:vsThreeEventOps)=>{

        let raycaster = new three.Raycaster();
        let mouse = new three.Vector2();
        let threeDom:HTMLDivElement 
        if(typeof container =='string'){
            threeDom = document.querySelector(container) as HTMLDivElement
        }else{
            threeDom = container as HTMLDivElement
        }
        //@ts-ignore
        threeDom.addEventListener(eventType,(ev:MouseEvent)=>{
            mouse.x = ( ev.clientX / threeDom.offsetWidth ) * 2 - 1;
            mouse.y = - ( ev.clientY / threeDom.offsetHeight ) * 2 + 1;
            // 通过摄像机和鼠标位置更新射线
            raycaster.setFromCamera( mouse, camera );
            // 计算物体和射线的焦点
            let intersects = raycaster.intersectObjects( scene.children );
            if(intersects.length > 0){
                callback(intersects,ev,mouse)
            }
        })
        
        
    }
}
export default event