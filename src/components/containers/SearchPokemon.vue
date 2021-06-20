<template>
  <h1 v-if="notFound">Not Found 404</h1>
  <main class="container" v-else>
    <pokemon-spinner class="spinner" v-if="isLoading"/>
    <pokemon-detail v-else :pokemon="searchedPokemon"/>
  </main>
</template>
<script lang="ts">
import { useStore } from '@src/store'
import { ActionTypes } from '@src/store/modules/pokemons/action-types'
import { defineComponent, watch, onBeforeMount, computed, ref } from 'vue'
import PokemonDetail from '@src/components/common/PokemonDetail.vue'
import PokemonSpinner from '@src/components/common/PokemonSpinner.vue'

export default defineComponent({
    name: 'SearchPokemon',
    props: {
      pokemonName: {
        type: String
      }  
    },
    setup(props) {
      const { dispatch, state:{ pokemons }, getters } = useStore()
      const notFound = ref(false)
      onBeforeMount(() => {
        if (props.pokemonName)
          dispatch(ActionTypes.SEARCH_POKEMON, props.pokemonName)
          .then(() => { notFound.value = false })
          .catch( () => { notFound.value = true })
      })
      watch(() => props.pokemonName,
      (pokemonName) => {
        if (pokemonName)
          dispatch(ActionTypes.SEARCH_POKEMON, pokemonName)
          .then(() => { notFound.value = false })
          .catch( () => { notFound.value = true })
      })
      const searchedPokemon = computed(() => pokemons.searchedPokemon )
      const isLoading = computed(() => getters.getLoadingState )
      return { searchedPokemon, isLoading, notFound }
    },
    components: {
      PokemonDetail,
      PokemonSpinner
    }
})
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
