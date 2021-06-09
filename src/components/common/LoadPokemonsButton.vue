<template>
  <section class="load-pokemons-section">
    <button 
      class="load-pokemons-button"
      @click="loadPokemons"
      >Show more</button>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from '../../store'
import { ActionTypes as PokeActions } from '../../store/modules/pokemons/action-types'

export default defineComponent({
    name: 'LoadPokemonsButton',
    setup() {
      const { dispatch } = useStore()
      const page = ref(1)
      const loadPokemons = () => {
        dispatch(PokeActions.FETCH_POKEMONS, page.value)
        page.value++
      }
      return { loadPokemons }
    }
})
</script>

<style scoped>
  .load-pokemons-section {
    display: flex;
    justify-content: center;
  }

  .load-pokemons-button {
    padding: 0.5rem 3rem;
    font-family: pokemon;
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