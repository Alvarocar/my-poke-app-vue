import { Pokemon } from "../../../model/pokeTypes";

export type State = {
    pokemons: Pokemon[],
    isLoading: boolean,
    searchedPokemon: Pokemon | null
}

export const state: State = {
    pokemons: [],
    isLoading: false,
    searchedPokemon: null
}