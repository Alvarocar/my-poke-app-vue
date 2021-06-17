<template>
  <ul>
    <li v-for="pokemon in pokemons" :key="pokemon.id">
      <pokemon-card
        :name="pokemon.name"
        :exp="pokemon.base_experience" 
        :srcImage="pokemon.sprites.other.dream_world.front_default"/>
    </li>
  </ul>
  <div v-if="isLoading" class="container-spinner">
    <pokemon-spinner/>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onBeforeMount } from 'vue'
import { useStore } from '@src/store'
import { ActionTypes as PokeActions } from '../../store/modules/pokemons/action-types'
import PokemonCard from '../common/PokemonCard.vue'
import PokemonSpinner from '@src/components/common/PokemonSpinner.vue'

export default defineComponent({
    name: 'PokemonList',
    setup() {
    const { getters, dispatch } = useStore()
    const pokemons = computed(() => getters.getPokemons)
    const isLoading = computed(() => getters.getLoadingState)
    onBeforeMount(() => {
      if (pokemons.value.length == 0)
        dispatch(PokeActions.FETCH_POKEMONS, 0)
    })
    return { pokemons, isLoading }
  },
  components: {
    PokemonCard,
    PokemonSpinner
  }
})
</script>

<style scoped>
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    justify-content: center;
  }

  li {
    margin: 1rem 1rem;
  }

  .container-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>