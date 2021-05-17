import { ActionContext, ActionTree } from "vuex";
import { RootState } from "../..";
import pokeRepository from "../../../service/repository/pokeRepository";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import { Mutations } from "./mutations";
import { State } from "./state";

type PokeActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
  [ActionTypes.FETCH_POKEMONS](
    { commit }: PokeActionContext,
    page: number
  ): Promise<void>
}

const pokeRepo = new pokeRepository()

export const actions: ActionTree<State, RootState> & Actions = {
  async [ActionTypes.FETCH_POKEMONS]({ commit }, page: number) {
    try {
      const pokemons = await pokeRepo.getPokeList(page)
      commit(MutationTypes.SET_DATA, pokemons)
    } catch (error) {
      throw new Error(error.message)
    }
  }
}