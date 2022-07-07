<template>
    <div class="vs-three-container" ref="vsThreeContainer">

    </div>
</template>

<script lang='ts' setup name="three">
import { reactive, toRefs,ref,onMounted} from 'vue'
import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import event from '@/utils/threeToolFuncs/event'
    console.log(event)
    const vsThreeContainer = ref() 
    const scene = new THREE.Scene()
    const renderer = ref<THREE.WebGLRenderer>(
        new THREE.WebGLRenderer({ 
            // 如果想保存three.js canvas画布上的信息，注意设置preserveDrawingBuffer
            preserveDrawingBuffer: true,
            alpha:true
        })
    )
    let camera:THREE.Camera 
    const init = ()=>{
        addModel()
        addLight()
        // 设置相机
        const s = 200
        const k = vsThreeContainer.value.clientWidth / vsThreeContainer.value.clientHeight
        camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
        camera.position.set(100,100,100)
        camera.lookAt(scene.position)
        // 设置渲染尺寸为当前的dom的宽高
        renderer.value.setSize(vsThreeContainer.value.clientWidth,vsThreeContainer.value.clientHeight)
        // 渲染区域的背景颜色
        console.log(renderer.value)
        renderer.value.setClearColor('#ddd')
        vsThreeContainer.value.appendChild(renderer.value.domElement)
        renderer.value.render(scene,camera)
        window.requestAnimationFrame(()=>{
            renderer.value.render(scene, camera);
        })
        console.log(scene)
        var controls = new OrbitControls(camera, renderer.value.domElement);
        controls.addEventListener("change", () => {
            renderer.value.render(scene, camera);
        }); //监听鼠标、键盘事件
    }
    const addModel = ()=>{
        let geometry = new THREE.BoxGeometry(200,200,200)
        let  material = new THREE.MeshLambertMaterial({
              color:  0x0000ff,
        });
        console.log(geometry,material)
        let mesh =new THREE.Mesh(geometry,material)
        mesh.name = 'test'
        mesh.position.set(0,0,0)
        scene.add(mesh)
    }
    const addLight = ()=>{
        let pointLight = new THREE.PointLight('#fff')
        pointLight.position.set(400,400,400)
        scene.add(pointLight)
    }
    onMounted(()=>{
        init()
    })
</script>
<style scoped lang='scss'>
.vs-three-container{
    width: 100%;
    height: 100vh;
    background-color: #eee;
}
</style>