import { MutationTree } from 'vuex'
import { Pokemon } from '../../../types/pokeTypes'
import { MutationTypes } from './mutation-types'
import { State } from './state'

export type Mutations<S = State> = {
  [MutationTypes.SET_DATA](state: S, pokemons: Pokemon[]): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_DATA](state: State, pokemons: Pokemon[]) {
    state.pokemons = pokemons
  }
}