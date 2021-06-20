<template>
 <article>
   <figure class="card">
     <figcaption class="card-header"><span class="pokemon-name">{{ pokemon?.name }}</span></figcaption>
     <div class="card-img-container">
      <img class="card-img" :src="pokeImgSelected" :alt="pokemon?.name || 'Pokemon IMG'">
     </div>
     <div class="card-buttons">
        <button id="official-art" class="btn-selected" name="official-art" @click="changePokemon" >Official Art</button>
        <button id="dream_world" name="dream_world" @click="changePokemon">DreamWorld Art</button>
      </div>
   </figure>
 </article>
</template>

<script lang="ts">
import { Pokemon } from '@src/model/dto/PokemonDto'
import { defineComponent, PropType, computed, ref } from 'vue'

export default defineComponent({
  name: 'PokemonDetail',
  props: {
    pokemon: {
      type: Object as PropType<Pokemon | null>
    }
  },
  setup(props) {
    const currentPokeImage = ref('official-art')
    const pokeImgSelected = computed(() => {
        const officialButton =  document.getElementById('official-art')
        const dreamButton =  document.getElementById('dream_world') 
      switch (currentPokeImage.value) {
        case 'official-art':
          officialButton?.classList.add('btn-selected')
          dreamButton?.classList.remove('btn-selected')
          return props.pokemon?.sprites.other['official-artwork'].front_default
        case 'dream_world':
          officialButton?.classList.remove('btn-selected')
          dreamButton?.classList.add('btn-selected')
          return props.pokemon?.sprites.other.dream_world.front_default
        default: return props.pokemon?.sprites.other['official-artwork'].front_default
      }
    })
    const changePokemon = ( e: MouseEvent ) => {
      currentPokeImage.value = (e.target as HTMLButtonElement).name
    }
    return { changePokemon, pokeImgSelected }
  },
})
</script>
  
<style scoped>
  .card {
    border: 5px solid;
    border-color: #ff0000;
    border-radius: 10px;
    background-color: #f5f7ea;
  }
  .card-img-container {
    padding: 1rem 2rem;
  }
  .card-img {
    width: 20rem;
    height: auto;
  }
  .card-header {
    display: flex;
    background-color: #ff0000;
    justify-content: center;
    align-items: center;
    color: white;
    height: 3rem;
    border-radius: 5px 5px 0px 0px;
  }
  .pokemon-name {
    font-size: 2rem;
    font-weight: 900;
    font-family: monospace;
  }
  .card-buttons {
    display: flex;
    justify-content: space-between;
  }
  .card-buttons > button {
    display: block;
    width: 50%;
    padding: 1rem;
    cursor: pointer;
    background-color: #f5f7ea;
    border: none;
  }
  .btn-selected {
    background-color: #d9e0b4 !important;
  }
  .card-buttons > button:hover {
    background-color: #e7ebd4;
  }
</style>
