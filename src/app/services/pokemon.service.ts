import { Injectable } from '@angular/core';
import { Pokeapi, result } from '../interfaces/pokeapi';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async getByPage(limit: number = 20, offset: number = 0):Promise<result[]>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    const json = await res.json();
    if(json.results.length > 0 ){ return json.results }
    return [];
  }

  async getById(id: number){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const json = await res.json();
    return json;
  }
  


}
