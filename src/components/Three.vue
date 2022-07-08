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
        let pointLight = new THREE.PointLight('#fff')
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
    onMounted(()=>{
        init()
        initCamera()
        initControls()
        initLight()
        initModel()
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