import { PokemonListDto } from '@src/model/dto/PokemonListDto'
import pokeAxios from '../../api/pokeAxios'
import { Pokemon } from '../../model/dto/PokemonDto'

export default class pokeRepository {
  
  /**
   * The method bring a Pokemon Array
   * @param page page of the queary and must be positive
   * @param limit optional param for the queary size
   * @returns A list of Pokemons
   */
  async getPokeList(page: number, limit: number = 10): Promise<{ totalPages: number, pokemons: Array<Pokemon>}> {
    if (page < 0) {
      throw new Error('The page must be positive or be zero')
    }
    if (limit <= 0) {
      throw new Error('The limit must be positive')
    }
    try {
      const pokemonListDto = (await pokeAxios.get<PokemonListDto>('/pokemon',{
        params: {
          limit,
          offset: page*limit
        }
      })).data
      let pokemonList: Array<Pokemon> = []
      for (const pokemonData of pokemonListDto.results) {
        pokemonList = [ ...pokemonList, (await pokeAxios.get<Pokemon>(pokemonData.url)).data]
      }
      const totalPages = Math.ceil(pokemonListDto.count / limit)
      return { totalPages, pokemons: pokemonList}
    } catch (error) {
      throw new Error(error.message)
    }
  }
  /**
   * The method search a pokemon by name, if the pokemon doesn't exist
   * the method throws an error.
   * @param name Pokemon's name
   */
  async searchPokemon(name: string): Promise<Pokemon> {
    try {
      return ( await pokeAxios.get<Pokemon>(`/pokemon/${name}`)).data
    } catch (error) {
      throw new Error(error.message)
    }
  }
}