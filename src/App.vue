

<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import {testStore} from './stores/test'
    const sotore = testStore()
    console.log(sotore.testName)
</script>
<style>

</style>
