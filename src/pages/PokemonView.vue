<template>
  <PokemonInfo :PokemonRepository="repository" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PokemonInfo from '@src/components/containers/PokemonInfo.vue'
import pokeRepository from '@src/service/repository/pokeRepository'
export default defineComponent({
    name: 'PokemonView',
    setup() {
      const repository = new pokeRepository()
      return { repository }
    },
    components: { PokemonInfo }
})
</script>
