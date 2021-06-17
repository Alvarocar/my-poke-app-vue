<template>
  <search-pokemon :pokemonName="q"/>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { mapState } from 'vuex'
import { useStore } from '@src/store'
import SearchPokemon from '@src/components/containers/SearchPokemon.vue'

export default defineComponent({
  name: 'SearchView',
  props: {
    //Queary for Search a pokemon
    q: {
      type: String
    }
  },
  setup(props) {
    const router = useRouter()
    onBeforeMount(() => {
      if (!props.q) {
        router.push({ name: 'Home' })
      }
    })
    watch(() => props.q,
    (queary) => {
      if (!queary) {
        router.push({ name: 'Home' })
      }
    })
    const { getters } = useStore()
    const isLoading = computed(() => getters.getLoadingState)
    return { isLoading }
  },
  components: {
    SearchPokemon
  }
})
</script>
