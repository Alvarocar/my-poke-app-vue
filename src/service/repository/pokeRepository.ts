import pokeAxios from '../../api/pokeAxios'
import { Pokemon } from '../../types/pokeTypes'

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
         await (await pokeAxios.get(`/pokemon/${i}`)).data
        ]
      }
      return pokemons
    } catch (error) {
      throw new Error(error.message)
    }
  }
}