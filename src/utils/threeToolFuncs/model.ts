import * as THREE from 'three'
import {vsThreeCreateModelOption} from '@/types/three.module'
const model = {
    /** 
    * 通过配置项生成基础模型
    * @param {String} mType  要生成的基础模型类别，目前包含 OrthographicCamera,PerspectiveCamera
    * @param {vsThreePoint} mPosition 模型的初始位置
    * @param mName  模型的名称
    * @param mOpts 模型的配置项，一般为模型的大小
    * @return model 通过配置项创建的简单模型
    */ 
    createBasicModel : async({mName,mType,mMaterial,mPosition,mOpts}:vsThreeCreateModelOption)=>{
        let geometry
        const {width,height,depth,radius,radiusTop,radiusBottom} = mOpts
        switch (mType) {
            // 长方体 长宽高
            case 'box':
                geometry = new THREE.BoxGeometry(width,height,depth)
                break;
            // 球体  半径
            case 'sphere':
                geometry = new THREE.SphereGeometry(radius)
                break;
            // 圆柱体 顶面半径、地面半径、高度
            case 'cylinder':
                geometry = new THREE.CylinderGeometry(radiusTop,radiusBottom,height)
                break;
            default:
                break;
        }
        let material
        if(mMaterial.type = 'color'){
            material = new THREE.MeshLambertMaterial({
                color: mMaterial.material || 0x0000ff,
            });
        }else{
            let textureLoader = new THREE.TextureLoader()
            let texture = await textureLoader.loadAsync(mMaterial.material as string)
            material = new THREE.MeshLambertMaterial({
                map: texture,
            });
        }
        const mesh = new THREE.Mesh(geometry, material)
        mesh.name = mName
        mesh.position.set(mPosition.x,mPosition.y,mPosition.z)
        return mesh
    },
    /** 
    * 移除模型(Removes object as child of this parentobject)
    * @param  models 要移除的模型数据或者模型数据组成的数组
    * @param  parent 删除的模型同属的父级
    */ 
    removeModel : (models:THREE.Object3D<Event>[]|THREE.Object3D<Event>,parent:THREE.Object3D<Event>)=>{
        if(models instanceof Array){
            parent.remove(...models)
        }else{
            parent.remove(models)
        }
    },
  /** 
   * 根据模型的已设置的名称来删除模型 注意：相同名称默认删除第一个
  * @param  names 多个模型的名称数组或者单个模型的名字
  * @param  parent 要删除模型的父级  
  */ 
   removeModelByName : (names:string[]|string,parent:THREE.Object3D<Event>|THREE.Scene)=>{
      if(names instanceof Array){
          names.map(name=>{
                if(parent.getObjectByName(name)){
                    parent.remove(parent.getObjectByName(name) as THREE.Object3D<Event>)
                }
            })
      }else{
        if(parent.getObjectByName(names)){
            parent.remove(parent.getObjectByName(names) as THREE.Object3D<Event>)
        }
      }
  },
  /** 
   * 遍历获取模型的所有后代,以数组的方式返回遍历的模型后代(包含其本身和光源)
   *  @param  model 要遍历的模型对象
     @returns {Array} modelChildren  遍历得到的模型
   */ 
   getModelDetail : (model:THREE.Object3D<THREE.Event>)=>{
    let modelChildren:THREE.Object3D<THREE.Event>[] = []
    model.traverse((modelChild)=>{
      modelChildren.push(modelChild)
    })
    return modelChildren
  }
}
export default model