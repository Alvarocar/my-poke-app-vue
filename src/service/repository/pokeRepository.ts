import pokeAxios from '../../api/pokeAxios'
import { Pokemon } from '../../model/pokeTypes'

export default class pokeRepository {
  
  /**
   * The method bring a Pokemon Array
   * @param page page of the queary and must be positive
   * @param limit optional param for the queary size
   * @returns A list of Pokemons
   */
  async getPokeList(page: number, limit: number = 10): Promise<Array<Pokemon>> {
    if (page < 0) {
      throw new Error('The page must be positive')
    }
    let pokemons: Array<Pokemon> = []
    try {
      for (let i = (page*limit) + 1; i <= (page + 1)*limit; i++) {
        pokemons = [...pokemons, 
         await (await pokeAxios.get<Pokemon>(`/pokemon/${i}`)).data
        ]
      }
      return pokemons
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