import { HttpService } from './http-service.js';
import type { Product } from '../types/product.js';

class ProductService {
  private httpService: HttpService;

  constructor() {
    const baseUrl = 'https://fakestoreapi.com';
    
    this.httpService = new HttpService(baseUrl);
  }

  async getAllProducts(): Promise<Product[]> {
    return this.httpService.get('/products');
  }

  async getProductById(id: number): Promise<Product> {
    return this.httpService.getById('/products', id);
  }
}

export const productService = new ProductService();