import { computed } from 'vue'
import pokeRepository from "@src/service/repository/pokeRepository"
import { useStore } from '@src/store'
import { Pokemon } from '@src/model/dto/PokemonDto'

export default function usePokemon(repository: pokeRepository = new pokeRepository()) {
  
  const { getters } = useStore()
  const currentPokemons = computed(() => getters.getPokemons)

  const getPokemon = async (name: string): Promise<Pokemon> => {
    let pokemon: Pokemon
    [ pokemon ] = currentPokemons.value.filter( value => value.name == name)
    if (!pokemon) {
      try {
        pokemon = await repository.searchPokemon(name)
      } catch {
        throw new Error('Not Found')
      }
    } 
    return pokemon
  }
  return { getPokemon }
}