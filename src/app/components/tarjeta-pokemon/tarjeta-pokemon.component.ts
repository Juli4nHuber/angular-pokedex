import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { result } from '../../interfaces/pokeapi';

@Component({
  selector: 'app-tarjeta-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrl: './tarjeta-pokemon.component.scss'
})
export class TarjetaPokemonComponent {
  @Input() data?:result;
  @Input() selected = false;  
  @Output() clickTarjeta = new EventEmitter<string>();  

  ngOnChanges(): void{
    this.extraerInformacion();
  }
  
  id: string = '';

  extraerInformacion(){
    if(this.data){
      this.id = this.data.url.substring(34, this.data.url.length - 1);
    }
  }
}
