import { HttpService } from './http-service.js';
import type { Pokemon } from '../types/pokemon.js';

class PokemonService {
  private httpService: HttpService;

  constructor() {
    const baseUrl = 'https://pokeapi.co/api/v2';
    
    this.httpService = new HttpService(baseUrl);
  }

  async getPokemonByName(name: string): Promise<Pokemon> {
    return this.httpService.getById('/pokemon', name);
  }
}

export const pokemonService = new PokemonService();