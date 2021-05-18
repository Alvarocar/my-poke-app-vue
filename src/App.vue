<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style>

:root {
  @import url(//db.onlinewebfonts.com/c/f4d1593471d222ddebd973210265762a?family=Pokemon);

  --color-red-card: #ff0000
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
