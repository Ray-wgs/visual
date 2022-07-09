<template>
    <div  class="vs-three-container" ref="vsThreeContainer">

    </div>
</template>

<script lang='ts' setup name="vsThree">
import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {DragControls} from 'three/examples/jsm/controls/DragControls.js';
import {TransformControls} from 'three/examples/jsm/controls/TransformControls.js';
import { reactive, toRefs,ref,onMounted} from 'vue'
import threeFuncs from '@/utils/threeToolFuncs/index'
import { AmbientLight } from "three";
    const vsThreeContainer = ref() 
    const scene = new THREE.Scene()
    const renderer = new THREE.WebGLRenderer({ 
                        // 如果想保存three.js canvas画布上的信息，注意设置preserveDrawingBuffer
                        preserveDrawingBuffer: true,
                        alpha:true
                    })
    let camera:THREE.Camera
    let orbitControls:OrbitControls
    const init = ()=>{
        renderer.setSize(vsThreeContainer.value.clientWidth,vsThreeContainer.value.clientHeight)
        vsThreeContainer.value.appendChild(renderer.domElement)
        // renderer.render(scene,camera)
    }
    const initCamera = ()=>{
        let obj = {
            cType:'PerspectiveCamera',
            cLookAt:{x:0,y:0,z:0},
            cPosition:{x:500,y:500,z:500},
            cOpts:{
                fov:50,
                aspect:1,
                near:0.1,
                far:2000
            }
        }
        camera = threeFuncs.camera.creatCamera(obj)
        scene.add(camera)
        renderer.render(scene,camera)
    }
    const initControls = ()=>{
        orbitControls = new OrbitControls(camera, renderer.domElement);
        orbitControls.addEventListener("change", () => {
            console.log('os')
            renderer.render(scene, camera);
        }); //监听鼠标、键盘事件
    }
    const initLight = ()=>{
        let amObj ={
            lType:'AmbientLight',
            lOpts:{
                color:'#ccc'
            },
            lPosition:{
                x:500,
                y:500,
                z:500
            }
        }
        let poObj ={
            lType:'PointLight',
            lOpts:{
                color:'red'
            },
            lPosition:{
                x:500,
                y:500,
                z:500
            }
        }
        let amLight = threeFuncs.light.craeteLight(amObj)
        amLight.position.set(600,600,600)
        scene.add(amLight)
        let pointLight = threeFuncs.light.craeteLight(poObj)
        pointLight.position.set(600,600,600)
        scene.add(pointLight)
        renderer.render(scene,camera)
    }
    const initModel = ()=>{
        let geometry = new THREE.BoxGeometry(200,200,200)
        let  material = new THREE.MeshLambertMaterial({
              color:  'red',
        });
        console.log(geometry,material)
        let mesh =new THREE.Mesh(geometry,material)
        mesh.name = 'test'
        mesh.position.set(0,10,0)
        scene.add(mesh)
        renderer.render(scene,camera)
    }
    const initEvent = ()=>{
        let fn = (model:THREE.Intersection<THREE.Object3D<THREE.Event>>[],ev:MouseEvent)=>{
            console.log(model,ev)
            let ro = ()=>{
                window.requestAnimationFrame(ro)
                model[0].object.rotateY(model[0].object.rotation.y+0.01)
                renderer.render(scene,camera)
            } 
            ro()          
        }
        let obj = {
            container:vsThreeContainer.value,
            eventType:'click',
            camera,
            scene,
            callback:fn
        }
        threeFuncs.event.setEvent(obj)
    }
    let timer:number
    // 新增chart大小随动方法
    const rsOb = new ResizeObserver((e)=>{
        if(timer) clearTimeout(timer)
        timer = window.setTimeout(() => {
            try {
                init()
                renderer.render(scene,camera)
            } catch (error) {
                console.warn('chart重新设置大小失败')
            }
        }, 50);
    })
    onMounted(()=>{
        init()
        initCamera()
        initControls()
        initLight()
        initModel()
        initEvent()
        rsOb.observe(vsThreeContainer.value as Element)
        console.log(scene)
    })
</script>
<style scoped lang='scss'>
.vs-three-container{
    width: 100%;
    height: 100%;
    background: url('@/assets/星空.webp') no-repeat;
    background-size: 100% 100%;
}
</style>