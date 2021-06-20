import {
  CommitOptions,
  DispatchOptions,
  Store as VuexStore,
  Module
} from 'vuex'

import { state } from './state'
import { RootState } from '../..';
import { Actions, actions } from './actions';
import { Getters, getters } from './getters';
import { Mutations, mutations } from './mutations';
import type { State } from './state'

export { State }

export type PokemonStore<S = State> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'>
  & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
      key: K,
      payload: P,
      options?: CommitOptions
    ): ReturnType<Mutations[K]>;
  } & {
    dispatch<K extends keyof Actions>(
      key: K,
      payload?: Parameters<Actions[K]>[1],
      options?: DispatchOptions
    ): ReturnType<Actions[K]>;
  } & {
    getters: {
      [K in keyof Getters]: ReturnType<Getters[K]>
    }
  }

export const store: Module<State, RootState> = {
  state,
  getters,
  mutations,
  actions
}