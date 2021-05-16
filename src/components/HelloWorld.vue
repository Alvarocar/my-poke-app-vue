<template>
  <ul>
    <li>prueba</li>
    <li v-for="pokemon in pokemons" :key="pokemon.id">
      {{pokemon}}
    </li>
  </ul>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, reactive } from 'vue'
import pokeRepository from '../service/repository/pokeRepository'
import { Pokemon } from '../types/pokeTypes'
export default defineComponent({
  name: 'HelloWorld',
  methods: {

  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
