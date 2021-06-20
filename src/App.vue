<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
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
