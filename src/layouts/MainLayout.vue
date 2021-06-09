<template>
  <home-view />
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import HomeView from '@src/pages/HomeView.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { HomeView }
})
</script>
