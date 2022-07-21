<template>
    <div  class="vs-three-container" ref="vsThreeContainer">

    </div>
</template>

<script lang='ts' setup name="vsThree">
import * as THREE from "three";
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {DragControls} from 'three/examples/jsm/controls/DragControls.js';
import {TransformControls} from 'three/examples/jsm/controls/TransformControls.js';
import { reactive, toRefs,ref,onMounted,watch,PropType,watchEffect} from 'vue'
import threeFuncs from '@/utils/threeToolFuncs/index'
import {vsThreeCreateCameraOption,vsThreeCreateLightOption,vsThreeCreateModelOption,vsThreeEventOps,vsThreeHelper,vsThreeEventOpsPart} from '@/types/three.module'
    const props = defineProps({
        modelOpts:{
            type:Array as PropType<vsThreeCreateModelOption[]>,
            require:true
        },
        lightOpts:{
            type:Array as PropType<vsThreeCreateLightOption[]>,
            require:true,
        },
        eventOpts:{
            type:Array as PropType<vsThreeEventOpsPart[]>,
            require:true
        },
        cameraOpt:{
            type:Object as PropType<vsThreeCreateCameraOption>,
            require:true
        },
        helperOpts:{
            type:Array as PropType<vsThreeHelper[]>,
            require:true
        },
        controls:{
            type:Object,
        }
    })
    const {modelOpts,lightOpts,eventOpts,cameraOpt,helperOpts,controls} = toRefs(props)
    const vsThreeContainer = ref() 
    const scene = new THREE.Scene()
    const renderer = new THREE.WebGLRenderer({ 
                        // 如果想保存three.js canvas画布上的信息，注意设置preserveDrawingBuffer
                        preserveDrawingBuffer: true,
                        alpha:true
                    })
    let camera:THREE.Camera
    let orbitControls:OrbitControls
    let transformControls:TransformControls
    let dragControls:DragControls
    const init = ()=>{
        renderer.setSize(vsThreeContainer.value.clientWidth,vsThreeContainer.value.clientHeight)
        vsThreeContainer.value.appendChild(renderer.domElement)
    }
    const initCamera = (cameraOpt:vsThreeCreateCameraOption)=>{
        camera = threeFuncs.camera.creatCamera(cameraOpt)
        scene.add(camera)
        renderer.render(scene,camera)
    }
    const initControls = ()=>{
        orbitControls = new OrbitControls(camera, renderer.domElement);
        orbitControls.addEventListener("change", () => {
            renderer.render(scene, camera);
        }); //监听鼠标、键盘事件
    }
    const initDrag = ()=>{
        transformControls = new TransformControls(camera,renderer.domElement);
        scene.add(transformControls);
        let allowMesh = scene.children.filter((child)=>{
            // @ts-ignore
            return child.isMesh || child.isGroup
        })
        dragControls = new DragControls(allowMesh, camera, renderer.domElement);
        dragControls.transformGroup = true
        dragControls.addEventListener('hoveron', function( event ){
                console.log(event)
                dragControls.activate();
                transformControls.attach(event.object);
                transformControls.setSize(0.4);
                orbitControls.enabled = false
        });
        // 开始拖拽
        dragControls.addEventListener('dragstart', function (event) {
            console.log('start',event)
        });
        dragControls.addEventListener('hoveroff',function(event){
            orbitControls.enabled = true
        })
        // 拖拽结束
        dragControls.addEventListener('dragend', function (event) {
            console.log('end',event)
            transformControls.detach()
            // controls.enabled = true
            renderer.render(scene, camera);
        });
    }   
    const initLight = (lightList:vsThreeCreateLightOption[])=>{
        lightList.forEach(light=>{
            scene.add(threeFuncs.light.craeteLight(light))
        })
        renderer.render(scene,camera)
    }
    const initModel = (modelLists:vsThreeCreateModelOption[])=>{
        modelLists.forEach(model=>{

        })
        let geometry = new THREE.BoxGeometry(200,200,200)
        let  material = new THREE.MeshLambertMaterial({
              color:  'red',
        });
        let mesh =new THREE.Mesh(geometry,material)
        mesh.name = 'test'
        mesh.position.set(0,10,0)
        console.log(mesh)
        scene.add(mesh)
        renderer.render(scene,camera)
    }
    const initEvent = (evnets:vsThreeEventOpsPart[])=>{
        evnets.forEach(ev=>{
            let obj ={
                container:vsThreeContainer.value,
                camera,
                scene,
                ...ev
            } as vsThreeEventOps
            threeFuncs.event.setEvent(obj)
        })
        
    }
    const initHelpers = (helpers:vsThreeHelper[])=>{
        helpers.forEach(helper=>{
            if(helper.value){
                let help 
                switch(helper.name){
                    case 'AxesHelper':
                        help = new THREE.AxesHelper(1000)
                        help.name = helper.name
                        break;
                    case 'GridHelper':
                        help = new THREE.GridHelper(1000,10)
                        help.name = helper.name
                        break;
                    case 'CameraHelper':
                        help = new THREE.CameraHelper(camera)
                        help.name = helper.name
                        break;
                }
                if(!threeFuncs.model.getModelDetail(scene).map(e=>{return e.name}).includes(help.name)){
                    scene.add(help)
                    help = ''
                }
            }else{
                threeFuncs.model.removeModelByName(helper.name,scene)
            }
        })
        console.log(helpers,scene)
        renderer.render(scene,camera)
    }
    let timer:number
    // 新增三维画布大小随动方法
    const rsOb = new ResizeObserver((e)=>{
        if(timer) clearTimeout(timer)
        timer = window.setTimeout(() => {
            try {
                init()
                renderer.render(scene,camera)
            } catch (error) {
                console.warn('three画布重新设置大小失败')
            }
        }, 50);
    })
    // watchEffect(()=>{
    //     initModel(modelOpts!.value!)
    // })
    // watchEffect(()=>{
    //     initLight(lightOpts!.value!)
    // })
    // watchEffect(()=>{
    //     initEvent(eventOpts!.value!)
    // })
    // watchEffect(()=>{
    //     initCamera(cameraOpt!.value!)
    // })
    // watchEffect(()=>{
    //     initHelpers(helperOpts!.value!)
    // })
    watch(()=>modelOpts,()=>{
        initModel(modelOpts!.value!)
    },{
        deep:true
    })
    watch(()=>lightOpts,()=>{
        initLight(lightOpts!.value!)
    },{
        deep:true
    })
    watch(()=>eventOpts,()=>{
        initEvent(eventOpts!.value!)
    },{
        deep:true
    })
    watch(()=>cameraOpt,()=>{
        initCamera(cameraOpt!.value!)
    },{
        deep:true
    })
    watch(()=>helperOpts,()=>{
        initHelpers(helperOpts!.value!)
    },{
        deep:true
    })
    watch(()=>controls,()=>{
        if(controls!.value!.drag){
            initDrag()
        }else{
            if(transformControls) transformControls.dispose()
        }
    },{deep:true})
    onMounted(()=>{
        init()
        initCamera(cameraOpt!.value!)
        initEvent(eventOpts!.value!)
        initLight(lightOpts!.value!)
        initModel(modelOpts!.value!)
        initHelpers(helperOpts!.value!)
        initControls()
        if(controls!.value!.drag){initDrag()}
        rsOb.observe(vsThreeContainer.value as Element)
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