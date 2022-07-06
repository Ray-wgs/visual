<template>
    <div @mousedown="onDrag" ref="vsDragResizeDom" class="vs-drag-resize" :class="curActive ? 'vs-drag-resize-active' : ''">
        <vs-colors-icon
        iconData="icon-youxiajiao1"
        type="class"
        class="vs-resize-dom"
        @mousedown.stop="onResize"
        ref="vsResizeDom"
        >

        </vs-colors-icon>
        <slot>

        </slot>
    </div>
</template>

<script lang='ts' setup name="vsDragResize">
import { reactive, toRefs,ref} from 'vue'
    const vsDragResizeDom = ref()
    const vsResizeDom = ref()
    const minh = 100
    const minw = 100
    const curActive = ref(false)
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
            vsDragResizeDom.value.style.cursor = 'default'
            curActive.value = false
        }
    }
    const onResize = ()=>{
        const parentDom = vsDragResizeDom.value.parentElement
        const node = vsResizeDom.value
        const event = window.event as MouseEvent
        event?.stopPropagation()
        event?.preventDefault()
        const height = vsDragResizeDom.value.clientHeight
        const width = vsDragResizeDom.value.clientWidth
        const startX = event?.clientX
        const startY = event?.clientY
        curActive.value = true
        const move = (moveEvent:MouseEvent) => {
            const currX = moveEvent.clientX > parentDom.clientWidth ? parentDom.clientWidth - node.clientWidth/2 : moveEvent.clientX
            const currY = moveEvent.clientY > parentDom.clientHeight ? parentDom.clientHeight - node.clientHeight/2: moveEvent.clientY
            const disY = currY - startY
            const disX = currX - startX
            const newHeight = (height + disY) > minh ?  (height + disY) : minh
            const newWidth = (width + disX) > minw ? (width + disX) : minw
            vsDragResizeDom.value.style.width = newWidth + "px";
            vsDragResizeDom.value.style.height = newHeight + "px";
            vsDragResizeDom.value.setAttribute('width',newWidth+'px')
            vsDragResizeDom.value.setAttribute('height',newHeight+'px')
        }

        const up = () => {
            document.removeEventListener('mousemove', move)
            document.removeEventListener('mouseup', up)
            curActive.value = false
        }

        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', up)
    }
</script>
<style scoped lang='scss'>
.vs-drag-resize{
    position: absolute;
    width: 400px;
    height:400px;
    padding: 20px;
    .vs-resize-dom{
        position: absolute;
        bottom:0px;
        right:0px;
        font-size: 15px;
        font-weight: 500;
        width: 20px;
        height: 20px;
        cursor: nw-resize;
        @include themify($themes) {
            color: themed("font-color1");
        }
        &:hover{
            font-weight: 700;
            font-size: 20px;
        }
    }
}
.vs-drag-resize-active{
    position: absolute;
    border: 1px dashed #ccc;
    cursor: move;
    @include themify($themes) {
        background: themed("bg-color1");
    }
}
</style>