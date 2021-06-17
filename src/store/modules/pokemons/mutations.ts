import { MutationTree } from 'vuex'
import { Pokemon } from '../../../model/pokeTypes'
import { MutationTypes } from './mutation-types'
import { State } from './state'

export type Mutations<S = State> = {
  [MutationTypes.SET_DATA](state: S, pokemons: Pokemon[]): void,
  [MutationTypes.START_LOADING](state: S): void,
  [MutationTypes.STOP_LOADING](state: S): void,
  [MutationTypes.SEARCHED_POKEMON](state: S, pokemon: Pokemon): void
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
  }
}