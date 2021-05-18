<template>
  <ul>
    <li v-for="pokemon in pokemons" :key="pokemon.id">
      <pokemon-card
        :name="pokemon.name"
        :exp="pokemon.base_experience" 
        :srcImage="pokemon.sprites.other.dream_world.front_default"/>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import { useStore } from '../store'
import { ActionTypes as PokeActions } from '../store/modules/pokemons/action-types'
import PokemonCard from './PokemonCard.vue'
export default defineComponent({
  components: { PokemonCard },
  name: 'HelloWorld',
  setup() {
    const { getters, dispatch } = useStore()
    onBeforeMount(() => {
      dispatch(PokeActions.FETCH_POKEMONS, 0)
    })
    const pokemons = computed(() => getters.getPokemons)
    const alvaro = ref(0)
    return { pokemons, alvaro }
  }
})
</script>

<style scoped>
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  li {
    margin: 1rem 1rem;
  }
</style>
