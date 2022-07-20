

<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import {useThemeStore} from '@/stores/theme'
import { watchEffect,toRefs} from 'vue';
    const store = useThemeStore()
    const {theme} = toRefs(store)
    const localTheme = localStorage.getItem("vs-theme")
    if(localTheme){
        store.setTheme(localTheme)
    }
    watchEffect(()=>{
        document.querySelector('html')!.className = theme.value
    })
</script>
<style>
*{
    padding:0;
    margin: 0;
}
</style>
