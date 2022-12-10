import { Component, OnInit } from '@angular/core';
import { pokemonDetail } from './pokemon-detail';
import { pokemonL } from './pokemon-list';

@Component({
  selector: 'app-root',
  template: `
      <h1>
        Voici une liste de {{pokemonList}}!
      </h1>
      `
})

export class AppComponent implements OnInit {
  title = 'ng-pokedex-app';
  pokemonList: pokemonDetail[] = pokemonL ; 




  ngOnInit() {
    console.table(pokemonL)
    this.selectPokemon(this.pokemonList[0])

  }
  selectPokemon(pokemonL : pokemonDetail) {
    console.log(`Vous avez cliquez sur le pokemon ${pokemonDetail.name}`);
  }
}
