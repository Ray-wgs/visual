<template>
    <div @mousedown="onDrag" ref="vsDragResizeDom" class="vs-drag-resize" :class="curActive ? 'vs-drag-resize-active' : ''">
        <div  class="vs-resize-dom">
            <vs-colors-icon
            icon="youxiajiao1"
            type="class"
            @mousedown.stop="onResize"
            >

            </vs-colors-icon>
        </div>
        <slot>

        </slot>
    </div>
</template>

<script lang='ts' setup name="vsDragResize">
import { reactive, toRefs,ref} from 'vue'
    const vsDragResizeDom = ref()
    const curActive = ref(false)
    const props = defineProps({
        minh:{
            type:Number,
            default:100
        },
        minw:{
            type:Number,
            default:100
        },
        // emit的id
        nodeKey:{
            type:String,
            default:'nodeKey'
        }
    })
    const {minh,minw,nodeKey} = toRefs(props)
    const emits = defineEmits(['onDragResize'])
    const onDrag = (e:MouseEvent)=>{
        const parentDom = vsDragResizeDom.value.parentElement
        parentDom.style.position = 'relative'
        curActive.value = true
        let disX = e.clientX - vsDragResizeDom.value.offsetLeft;
        let disY = e.clientY - vsDragResizeDom.value.offsetTop;
        //阻止浏览器的默认事件
        e.preventDefault();
        document.onmousemove = function(e) {
            var x = e.clientX - disX;
            var y = e.clientY - disY;
            if (x < 0) {
                x = 0
            } else if (x > (parentDom.clientWidth - vsDragResizeDom.value.clientWidth)) {
                x = parentDom.clientWidth - vsDragResizeDom.value.clientWidth
            }
            if (y < 0) {
                y = 0
            } else if (y > (parentDom.clientHeight - vsDragResizeDom.value.clientHeight)) {
                y = parentDom.clientHeight - vsDragResizeDom.value.clientHeight
            }
            vsDragResizeDom.value.style.left = x + "px";
            vsDragResizeDom.value.style.top = y + "px";
            vsDragResizeDom.value.setAttribute('left',x+'px')
            vsDragResizeDom.value.setAttribute('right',y+'px')
        }
        document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
            console.log(vsDragResizeDom.value.clientHeight,vsDragResizeDom.value.style)
            emits('onDragResize',{
                left:vsDragResizeDom.value.style.left,
                top:vsDragResizeDom.value.style.top,
                height:vsDragResizeDom.value.style.height,
                width:vsDragResizeDom.value.style.width,
                nodeKey:nodeKey.value
            })
            curActive.value = false
        }
    }
    const onResize = ()=>{
        const parentDom = vsDragResizeDom.value.parentElement
        const event = window.event as MouseEvent
        event?.stopPropagation()
        event?.preventDefault()
        const height = vsDragResizeDom.value.clientHeight
        const width = vsDragResizeDom.value.clientWidth
        const startX = event.clientX
        const startY = event.clientY
        curActive.value = true
        const move = (moveEvent:MouseEvent) => {
            const currX = moveEvent.clientX
            const currY = moveEvent.clientY
            const disY = currY - startY
            const disX = currX - startX
            const newHeight = (height + disY) > minh.value ?  (height + disY) > parentDom.clientHeight ? parentDom.clientHeight:(height + disY) : minh.value
            const newWidth = (width + disX) > minw.value ? (width + disX) > parentDom.clientWidth ? parentDom.clientWidth : (width + disX) : minw.value
            vsDragResizeDom.value.style.width = newWidth + "px";
            vsDragResizeDom.value.style.height = newHeight + "px";
            vsDragResizeDom.value.setAttribute('width',newWidth+'px')
            vsDragResizeDom.value.setAttribute('height',newHeight+'px')
        }

        const up = () => {
            document.removeEventListener('mousemove', move)
            document.removeEventListener('mouseup', up)
            emits('onDragResize',{
                left:vsDragResizeDom.value.style.left,
                top:vsDragResizeDom.value.style.top,
                height:vsDragResizeDom.value.style.height,
                width:vsDragResizeDom.value.style.width,
                nodeKey:nodeKey.value
            })
            curActive.value = false
        }

        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', up)
    }
</script>
<style scoped lang='scss'>
.vs-drag-resize{
    position: absolute;
    border: 1px dashed #ccc;
    .vs-resize-dom{
        position: absolute;
        bottom:0px;
        right:0px;
        font-size: 15px;
        font-weight: 400;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: right;
        cursor: nw-resize;
        z-index: 50;
        @include themify($themes) {
            color: themed("font-color2");
        }
        &:hover{
            font-weight: 700;
            font-size: 20px;
        }
    }
}
.vs-drag-resize-active{
    position: absolute;
    @include themify($themes) {
        border: 1px dashed themed("bg-color1");
        background: themed("bg-color1");
    }
    cursor: move;
}
</style>