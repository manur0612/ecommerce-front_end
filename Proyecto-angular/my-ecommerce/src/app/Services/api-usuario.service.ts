import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export type Usuario = {
  id: number;
  name: string;
  lastname: string;
  rol: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class ApiSUsuarioService {
  private readonly apiUrl = 'https://67ad621d3f5a4e1477dd819c.mockapi.io';
  constructor(private readonly http: HttpClient) {}

  getAllUsuario() {
    return firstValueFrom(
      this.http.get<Usuario[]>(`${this.apiUrl}/api/dmc/usuario/usuario`)
    );
  }
}
