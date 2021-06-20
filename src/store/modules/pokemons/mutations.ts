import { MutationTree } from 'vuex'
import { Pokemon } from '../../../model/dto/PokemonDto'
import { MutationTypes } from './mutation-types'
import { State } from './state'

export type Mutations<S = State> = {
  [MutationTypes.SET_DATA](state: S, pokemons: Pokemon[]): void,
  [MutationTypes.START_LOADING](state: S): void,
  [MutationTypes.STOP_LOADING](state: S): void,
  [MutationTypes.SEARCHED_POKEMON](state: S, pokemon: Pokemon): void,
  [MutationTypes.NEXT_PAGE](state: S): void,
  [MutationTypes.SET_TOTALPAGES](state: S, totalPages: number): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_DATA](state: State, pokemons: Pokemon[]) {
    state.pokemons = [ ...state.pokemons, ...pokemons ]
  },
  [MutationTypes.START_LOADING](state: State): void {
    state.isLoading = true
  },
  [MutationTypes.STOP_LOADING](state: State): void {
    state.isLoading = false
  },
  [MutationTypes.SEARCHED_POKEMON](state: State, pokemon: Pokemon): void {
    state.searchedPokemon = pokemon
  },
  [MutationTypes.NEXT_PAGE](state: State): void {
    if (state.totalPages > state.page)
      state.page++
  },
  [MutationTypes.SET_TOTALPAGES](state: State, totalPages: number): void {
    state.totalPages = totalPages
  }
}