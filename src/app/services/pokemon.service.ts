import { Injectable } from '@angular/core';
import { result } from '../interfaces/pokeapi';
import { Pokemon } from '../interfaces/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async getByPage(page: number = 0):Promise<result[]>{
    const offset = page * 20;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`)
    const json = await res.json();
    if(json.results.length > 0 ){ return json.results }
    return [];
  }

  async getById(id: string): Promise<Pokemon>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return await res.json();
  }
}
