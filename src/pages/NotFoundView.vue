<template>
  <main class="main">
    <not-found />
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import NotFound from '@src/components/containers/NotFound.vue'
export default defineComponent({
    name: 'NotFoundView',
    components: { NotFound }
})
</script>

<style scoped>
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: monospace;
  }
</style>
