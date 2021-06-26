<template>
  <ul>
    <li v-for="pokemon in pokemons" :key="pokemon.id">
    <router-link class="pokemon-link" :to="{ name: 'PokemonDetail', params: { name: pokemon.name } }">
      <pokemon-card
        :name="pokemon.name"
        :exp="pokemon.base_experience" 
        :srcImage="pokemon.sprites.front_default"/>
    </router-link>
    </li>
  </ul>
  <div v-if="isLoading" class="container-spinner">
    <pokemon-spinner/>
  </div>
  <section class="load-pokemons-section" v-show="!isLoading">
    <button 
      class="load-pokemons-button"
      @click="loadPokemons"
      >Show more</button>
  </section>

</template>
<script lang="ts">
import { computed, defineComponent, onBeforeMount, PropType } from 'vue'
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
        loadPokemons()
    })
    const loadPokemons = () => {
      dispatch(PokeActions.FETCH_POKEMONS)
    }
    return { pokemons, isLoading, loadPokemons }
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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax( 12rem, 1fr ));    
    column-gap: 4rem;
    justify-items: center;
    padding: 0 4rem;
  }

  li {
    margin: 1rem 1rem;
  }

  .pokemon-link {
    text-decoration: none;
  }

  .container-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .load-pokemons-section {
    display: flex;
    justify-content: center;
    padding: 1rem 0 2rem;
    font-family: monospace;
    font-size: 2rem;
  }

  .load-pokemons-button {
    padding: 0.7rem 3rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color:#FFDE00;
    transition: background-color 0.5s;
  }

  .load-pokemons-button:hover {
    background-color: #d4c033;
  }
</style>