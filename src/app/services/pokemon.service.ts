import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Le service est disponible globalement
})
export class PokemonService {
  private apiUrl = 'https://tyradex.vercel.app/api/v1/gen/1';

  async fetchPokemonList(): Promise<any> {
    const response = await fetch(this.apiUrl);
    return response.json();
  }
}
