import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Product } from '../components/products/products.component';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  productos: Product[] = [];
  private readonly apiUrl = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

  async getProductos(): Promise<Product[]> {
    return firstValueFrom(this.http.get<Product[]>(`${this.apiUrl}/api/v1/product`));
  }

  getProductoPorId(id: number) {
    return this.productos.find((producto) => producto.id === id);
  }

  addProduct(product: Product) {
    this.productos.push(product);
    console.log('Products in service:', this.productos);
  }
}