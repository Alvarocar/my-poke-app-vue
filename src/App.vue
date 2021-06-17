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
    @import url(//db.onlinewebfonts.com/c/f4d1593471d222ddebd973210265762a?family=Pokemon);
    --color-red-card: #ff0000
  }
  body {
    margin: 0;
  }
</style>
