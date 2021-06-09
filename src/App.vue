<template>
  <MainLayout />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from '@src/layouts/MainLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    MainLayout
  }
})
</script>

<style>
  :root {
    @import url(//db.onlinewebfonts.com/c/f4d1593471d222ddebd973210265762a?family=Pokemon);

    --color-red-card: #ff0000
  }
</style>
