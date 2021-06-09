<template>
  <pokemon-list />
  <load-pokemons-button v-if="!isLoading"/>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import PokemonList from '@src/components/containers/PokemonList.vue'
import LoadPokemonsButton from '@src/components/common/LoadPokemonsButton.vue'
import { useStore } from '@src/store'
export default defineComponent({
  name: 'HomeView',
   components: {
     PokemonList,
     LoadPokemonsButton
    },
  setup() {
    const { getters } = useStore()
    const isLoading = computed(() => getters.getLoadingState)
    return { isLoading }
  }
})
</script>
