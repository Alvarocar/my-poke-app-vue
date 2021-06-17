<template>
  <header class="header">  
    <div class="nav">
      <section class="pokemon-img-logo">
      <router-link :to="{name: 'Home'}">
        <img src="@src/assets/pokemon-title.svg.png" title="pokemon">
      </router-link>
      </section>
      <section class="search-pokemon">
        <form @submit.prevent="searchPokemon">
        <input type="search" class="search-pokemon-input" v-model="inputSearch" placeholder="search for a pokemon">
        <button class="search-pokemon-button" type="submit">Search</button>
        </form>
      </section>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'NavBar',
  setup() {
    const router = useRouter()
    const inputSearch = ref("")
    const searchPokemon = () => {
      router.push({name: 'Search', query: { q: inputSearch.value } })
    }
    return { searchPokemon, inputSearch }
  }
})
</script>
<style scoped>
  .header {
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .nav {
    display: flex;
    background-color: #f0f5ff;
    height: 5rem;
    padding: 0.8rem 3rem;
    min-width: 600px;
  }
  .pokemon-img-logo {
    width: 8rem;
    align-self: center;
  }
  .pokemon-img-logo  img {
    width: 100%;
    height: auto;
  }
  .search-pokemon {
    align-self: center;
    margin-left: auto;
    margin-right: 3rem;
  }

  .search-pokemon-input {
    outline: none;
    height: 2.2rem;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: .7rem;
    font-size: 1rem;
  }
  .search-pokemon-button {
    height: 2.2rem;
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    background-color: #1A1A1A;
    color: #FFFFFF;
  }
</style>
