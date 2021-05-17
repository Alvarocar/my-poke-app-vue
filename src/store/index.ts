import { createStore } from "vuex";

import { PokemonStore, State as PokemonState, store as pokemons } from './modules/pokemons'

export type RootState = {
  pokemons: PokemonState
}

export type Store = PokemonStore<Pick<RootState, 'pokemons'>>

export const store = createStore({
  modules: {
    pokemons
  }
})

export function useStore(): Store {
  return store as Store
}
