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
  page: number = 0

  ngOnInit(): void {
    this.cargarLista();
  }

  async cargarLista(){
    this.page++;
    this.listaPokemon = [...this.listaPokemon, ... await this.pokemonService.getByPage(this.page)];
  }

  async onScroll(event: Event){

    const targetElement = event.target as HTMLElement;

    if (targetElement.offsetHeight + targetElement.scrollTop >= targetElement.scrollHeight) {
      await this.cargarLista();
    }
  }

}
