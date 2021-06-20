<template>
  <pokemon-list />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PokemonList from '@src/components/containers/PokemonList.vue'
export default defineComponent({
  name: 'HomeView',
   components: {
     PokemonList
    }
})
</script>
