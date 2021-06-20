import { Pokemon } from "../../../model/dto/PokemonDto";

export type State = {
    pokemons: Pokemon[]
    isLoading: boolean
    searchedPokemon: Pokemon | null
    page: number,
    totalPages: number
}

export const state: State = {
    pokemons: [],
    isLoading: false,
    searchedPokemon: null,
    page: 0,
    totalPages: 0
}