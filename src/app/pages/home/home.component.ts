import { Component, OnInit } from '@angular/core';
import { FotoPokemonComponent } from '../../components/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from '../../components/tarjeta-pokemon/tarjeta-pokemon.component';
import { PokemonService } from '../../services/pokemon.service';
import { result } from '../../interfaces/pokeapi';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FotoPokemonComponent, TarjetaPokemonComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  constructor(private pokemonService: PokemonService){}

  listaPokemon: result[] = [];
  selectedPokemon?: Pokemon;
  page: number = 0

  ngOnInit(): void {
    this.cargarLista();
  }

  async cargarLista(){
    this.listaPokemon = [...this.listaPokemon, ... await this.pokemonService.getByPage(this.page)];
    this.page++;
  }

  async onScroll(event: Event){
    const targetElement = event.target as HTMLElement;

    if (targetElement.offsetHeight + targetElement.scrollTop >= targetElement.scrollHeight) {
      await this.cargarLista();
    }
  }

  async clickedTarjeta(event: string){
    this.selectedPokemon = await this.pokemonService.getById(event);
  }
}
