<template>
    <svg class="iconfont" aria-hidden="true" v-if="type == 'svg'">
            <use :xlink:href="'#icon-'+icon"></use>
    </svg>
    <div v-else class="iconfont" :class="'icon-'+icon">

    </div>
</template>

<script lang='ts' setup name="vsColorsIcon">
import { reactive, toRefs,ref} from 'vue'
    const props = defineProps({
        icon:{
            type:String,
        },
        type:{
            type:String,
            default:'svg',
            validator(value:string) {
                    return ['class', 'svg'].includes(value)
            }
        }
    })
    const {type,icon} = toRefs(props)
</script>
<style scoped lang='scss'>
.iconfont {
    width: 100%;
    height: 100%;
    display: inline-block;
}
</style>