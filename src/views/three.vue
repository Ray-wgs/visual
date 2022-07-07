<template>
    <div class="vs-three-container" ref="vsThreeContainer">

    </div>
    <el-button @click="save">
        保存
    </el-button>
    <el-button @click="initGrid">
        开启网格
    </el-button>
    <el-button @click="initAxes">
        开启坐标轴
    </el-button>
    <el-button @click="updateCamera">
        更新相机
    </el-button>
    <el-button @click="updateModel">
        更新模型信息
    </el-button>
</template>

<script lang='ts' setup name="three">
import { reactive, toRefs,ref,onMounted} from 'vue'
import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {DragControls} from 'three/examples/jsm/controls/DragControls.js';
import {TransformControls} from 'three/examples/jsm/controls/TransformControls.js';
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
        camera.position.set(0,15,0)
        camera.lookAt(scene.position)
        const cameraHelper = new THREE.CameraHelper(camera)
        scene.add(cameraHelper)
        // 设置渲染尺寸为当前的dom的宽高
        renderer.value.setSize(vsThreeContainer.value.clientWidth,vsThreeContainer.value.clientHeight)
        // 渲染区域的背景颜色
        console.log(renderer.value)
        // renderer.value.setClearColor('#ddd')
        vsThreeContainer.value.appendChild(renderer.value.domElement)
        renderer.value.render(scene,camera)
        window.requestAnimationFrame(()=>{
            renderer.value.render(scene, camera);
        })
        initDragModel()
        var controls = new OrbitControls(camera, renderer.value.domElement);
        controls.addEventListener("change", () => {
            renderer.value.render(scene, camera);
        }); //监听鼠标、键盘事件
    }
    const addModel = ()=>{
        let geometry = new THREE.BoxGeometry(20,20,20)
        let  material = new THREE.MeshLambertMaterial({
              color:  0x0000ff,
        });
        console.log(geometry,material)
        let mesh =new THREE.Mesh(geometry,material)
        mesh.name = 'test'
        mesh.position.set(0,10,0)
        scene.add(mesh)
    }
    
    const addLight = ()=>{
        let pointLight = new THREE.PointLight('#fff')
        pointLight.position.set(400,400,400)
        scene.add(pointLight)
    }
    const initAxes = ()=>{
        let axes = new THREE.AxesHelper(200);
        axes.name = 'axes'
        scene.add(axes)
        renderer.value.render(scene,camera)
    }
    const initDragModel = ()=>{
        var transformControls = new TransformControls(camera,renderer.value.domElement);
        scene.add(transformControls);
        let allowMesh = scene.children.filter(child=>{
            if(child.isMesh){
                return child
            }
        })
        console.log(allowMesh)
        //实例化 dargControls
        var dragControls = new DragControls(allowMesh, camera, renderer.value.domElement);
        dragControls.addEventListener('hoveron', function( event ){
                transformControls.attach(event.object);
                transformControls.setSize(0.4);
            dragControls.addEventListener('dragstart', function (event) {
               console.log('start',event)
               dragControls.enabled = false
            });
            // 拖拽结束
            dragControls.addEventListener('dragend', function (event) {
                // controls.enabled = true;
                console.log('end')
                dragControls.enabled = true
            });
        });
    }
    const initGrid = ()=>{
        const size = 500;
        const divisions = 100;
        const gridHelper = new THREE.GridHelper( size, divisions );
        scene.add( gridHelper );
        renderer.value.render(scene,camera)
    }
    const save = ()=>{
        console.log(scene.toJSON())
    }
    const updateCamera = ()=>{
        window.requestAnimationFrame(()=>{
            updateCamera()   
        })
        camera.position.x = camera.position.x + 1
        camera.position.y = camera.position.y + 1
        camera.position.z = camera.position.z + 1
        renderer.value.render(scene,camera)
    }
    const updateModel = ()=>{
        window.requestAnimationFrame(()=>{
                 updateModel()   
        })
        scene.children.forEach(child=>{
            if(child.isMesh){
                if(child.position.x > 50){
                    // 
                }else{
                    child.position.x = child.position.x + 1
                }
                child.position.z = child.position.z + 1
            }
            renderer.value.render(scene,camera)
        })
    }
    onMounted(()=>{
        init()
    })
</script>
<style scoped lang='scss'>
.vs-three-container{
    width: 100%;
    height: 100vh;
    background: url('@/assets/星空.webp') no-repeat;
    background-size: 100% 100%;
}
</style>