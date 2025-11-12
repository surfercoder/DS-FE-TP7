import { HttpService } from './http-service.js';
import type { Character } from '../types/character.ts';

class SimpsonsService {
  private httpService: HttpService;

  constructor() {
    const baseUrl = 'https://thesimpsonsapi.com/api';
    
    this.httpService = new HttpService(baseUrl);
  }

  async getAllCharacters(): Promise<{ results: Character[] }> {
    return this.httpService.get('/characters');
  }

  async getCharacterById(id: number): Promise<Character> {
    return this.httpService.getById('/characters', id);
  }
}

export const simpsonsService = new SimpsonsService();