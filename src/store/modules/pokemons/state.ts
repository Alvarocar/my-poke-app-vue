import { Pokemon } from "../../../types/pokeTypes";

export type State = {
    pokemons: Pokemon[],
    isLoading: boolean
}

export const state: State = {
    pokemons: [],
    isLoading: false
}