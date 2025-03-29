import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export type ProductApi = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
    description: string;
    isOferta: boolean;
    porcentajeOferta: number;
    finalPrice: number;
};

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  private readonly apiUrl = 'http://localhost:3000';
  constructor(private readonly http: HttpClient) {}

  getAllProducts() {
    return firstValueFrom(
      this.http.get<ProductApi[]>(`${this.apiUrl}/api/v1/product`)
    );
  }
}
