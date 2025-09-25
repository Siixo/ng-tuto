import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-exercice4',
  imports: [NgFor, NgIf, RouterModule],
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.css'],
})
export class Exercice4Component implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  async loadPokemons() {
    const data = await this.pokemonService.fetchPokemonList();

    // Adapter les données venant de l'API au format de notre interface
    this.pokemons = data.map((p: any) => ({
      id: p.pokedex_id,
      name: p.name.fr,
      image: p.sprites.regular,
    }));
  }
}
