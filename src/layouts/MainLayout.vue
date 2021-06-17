<template>
  <NavBar />
  <router-view />
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import NavBar from '@src/components/molecules/NavBar.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { NavBar }
})
</script>
