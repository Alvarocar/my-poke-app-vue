export interface PokemonListDto {
    count: number
    next: string
    previous: string
    //pokemon's name and url for get pokemon info.
    results: Array<{ name: string, url: string }>
}