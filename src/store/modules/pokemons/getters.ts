import { GetterTree } from "vuex";
import { RootState } from "../..";
import { Pokemon } from "../../../types/pokeTypes";
import { State } from "./state";

export type Getters = {
    getPokemons(state: State): Pokemon[]
}

export const getters: GetterTree<State, RootState> & Getters = {
    getPokemons: (state) => state.pokemons
}