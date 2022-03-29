<template>
  <ReloadPWA />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReloadPWA from './components/containers/ReloadPWA.vue'

export default defineComponent({
  name: 'App',
  components: {
    ReloadPWA
  }
})
</script>

<style>
  :root {
    --color-red-card: #ff0000;
  }
  body {
    margin: 0;
  }
</style>
