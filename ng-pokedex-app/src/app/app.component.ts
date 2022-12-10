import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>
        Welcome to {{pokemonList[0]}}!
      </h1>
      `
})
export class AppComponent implements OnInit {
  title = 'ng-pokedex-app';
  pokemonList = ['Salameche','Bulbizarre','Carapuce']

  ngOnInit() {
    console.table(this.pokemonList)
    this.selectPokemon('Bulbizarre')
  }
  selectPokemon(pokmeonName: string) {
    console.log(`Vous avez cliquez sur le pokemon ${pokmeonName}`);
  }
}
