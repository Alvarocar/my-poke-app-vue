import { GetterTree } from "vuex";
import { RootState } from "../..";
import { Pokemon } from "../../../model/pokeTypes";
import { State } from "./state";

export type Getters = {
    getPokemons(state: State): Pokemon[],
    getLoadingState(state: State): boolean
}

export const getters: GetterTree<State, RootState> & Getters = {
    getPokemons: (state) => state.pokemons,
    getLoadingState: (state) => state.isLoading
}