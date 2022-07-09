import * as THREE from 'three'

const model = {
    /** 
    * 通过配置项生成相机
    * @param {String} mType  要生成的相机类别，目前包含 OrthographicCamera,PerspectiveCamera
    * @param {vsThreePoint} mPosition 相机的初始位置
    * @param cLookAt  相机的朝向的点
    * @param mOpts 相机的配置项，如可观测的位置的远近、视角的大小等
    * @return camera 生成的相机实例
    */ 
    createModel : ()=>{

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
   removeModelByName : (names:string[]|string,parent:THREE.Object3D<Event>)=>{
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