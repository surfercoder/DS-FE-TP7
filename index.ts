import { productService } from './services/product-service.js';
import type { Product } from './types/product.js';
import { simpsonsService } from './services/simpsons-service.js';
import type { Character } from './types/character.ts';
import { pokemonService } from './services/pokemon-service.js';
import type { Pokemon } from './types/pokemon.js';

async function mostrarProductos(): Promise<void> {
  try {
    console.log('Obteniendo productos...');

    const products: Product[] = await productService.getAllProducts();

    console.log(`Se encontraron ${products.length} productos`);

    products.forEach((product: Product) => {
      console.log(`
 ID: ${product.id}
 Nombre: ${product.title}
 Precio: $${product.price}
 Categoría: ${product.category}
 Rating: ${product.rating.rate} (${product.rating.count} valoraciones)
 `);
    });

  } catch (error) {
    console.error('Error al cargar productos:', error);
  }
}

async function mostrarProductoIndividual(id: number): Promise<void> {
  try {
    const product: Product = await productService.getProductById(id);

    console.log('Detalles del producto:', {
      nombre: product.title,
      precio: product.price,
      descripcion: product.description
    });

  } catch (error) {
    console.error(`Error al cargar producto ${id}:`, error);
  }
}

async function mostrarPersonajes(): Promise<void> {
  try {
    console.log('Obteniendo personajes...');

    const data = await simpsonsService.getAllCharacters();

    const characters: Character[] = data.results;

    console.log(`Se encontraron ${characters.length} personajes`);

    characters.forEach((character: Character) => {
      console.log(`
 ID: ${character.id}
 Nombre: ${character.name}
 Edad: ${character.age}
`);
    });

  } catch (error) {
    console.error('Error al cargar personajes:', error);
  }
}

async function mostrarPokemon(nombre: string): Promise<void> {
  try {

    const pokemon: Pokemon = await pokemonService.getPokemonByName(nombre);

    console.log(`
 ID: ${pokemon.id}
 Nombre: ${pokemon.name}
 Peso: ${pokemon.weight}
`);

  } catch (error) {
    console.error('Error al cargar pokemon:', error);
  }
}

// Ejecutar
// mostrarProductos();
// mostrarProductoIndividual(1);
// mostrarPersonajes();
mostrarPokemon('pikachu');