import { Component, OnInit } from '@angular/core';
import { FotoPokemonComponent } from '../../components/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from '../../components/tarjeta-pokemon/tarjeta-pokemon.component';
import { PokemonService } from '../../services/pokemon.service';
import { Pokeapi, result } from '../../interfaces/pokeapi';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FotoPokemonComponent, TarjetaPokemonComponent,   ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokemonService){}

  listaPokemon: result[] = [];

  ngOnInit(): void {
    this.cargarLista();
  }

  async cargarLista(){
    this.listaPokemon = [...this.listaPokemon, ... await this.pokemonService.getByPage()];
  }

}
