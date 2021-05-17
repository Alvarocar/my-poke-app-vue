<template>
  <ul>
    <li>prueba</li>
    {{pokemons}}
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount } from 'vue'
import { useStore } from '../store'
import { ActionTypes as PokeActions } from '../store/modules/pokemons/action-types'
export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const { getters, dispatch } = useStore()
    onBeforeMount(() => {
      dispatch(PokeActions.FETCH_POKEMONS, 0)
    })
    const pokemons = computed(() => getters.getPokemons)
    return { pokemons }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
