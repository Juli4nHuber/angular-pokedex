export interface Pokeapi {
    count: number,
    next: string,
    previous: string,
    results: result[]
}

export interface result {
    name: string, 
    url: string
}