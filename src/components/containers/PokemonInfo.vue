<template>
  <div v-if="error"><h2>Not Found</h2></div>
  <main class="container" v-else>
    <pokemon-detail :pokemon="pokemon" v-show="!isLoading"/>
    <pokemon-spinner v-show="isLoading"/>
  </main>
</template>

<script lang="ts">
import { Pokemon } from '@src/model/dto/PokemonDto'
import pokeRepository from '@src/service/repository/pokeRepository'
import { defineComponent, onBeforeMount, watch, PropType, reactive, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router'
import PokemonDetail from '@src/components/common/PokemonDetail.vue'
import usePokemon from '@src/components/hooks/usePokemon'
import PokemonSpinner from '@src/components/common/PokemonSpinner.vue'

export default defineComponent({
  name: 'PokemonInfo',
  props: {
    PokemonRepository: {
      type: Object as PropType<pokeRepository>,
      required: true
    }
  },
  setup(props) {
    //Data
    const isLoading = ref(true)
    const { currentRoute } = useRouter()
    const currentPokeName = currentRoute.value.params.name as string
    const data = reactive<{pokemon: Pokemon | null, error: Error | null}>({
      pokemon: null,
      error: null
      })
    const { getPokemon } = usePokemon(props.PokemonRepository)
    //Methods
    const fetchPokemon = (pokemonName: string): void => {
      isLoading.value = true
      getPokemon(pokemonName)
      .then( pokemon => {
        data.error = null
        data.pokemon = pokemon
      })
      .catch( (error: Error) => {
        data.error = error
      })
      .finally(() => {
        isLoading.value = false
      })
    }

    //LifeCycle
    onBeforeMount(() => {
      fetchPokemon(currentPokeName)
    })

    //Watch
    watch(() => currentPokeName, () => {
      fetchPokemon(currentPokeName)
    })

    return {...toRefs(data), isLoading}
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