

<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import {useThemeStore} from '@/stores/theme'
import { watchEffect,toRefs} from 'vue';
    const store = useThemeStore()
    const {theme} = toRefs(store)
    console.log(theme)
    watchEffect(()=>{
        document.querySelector('html')!.className = theme.value
    })
</script>
<style>

</style>
