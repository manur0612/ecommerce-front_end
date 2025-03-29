import { Component, OnInit, Pipe, PipeTransform, inject } from '@angular/core';
import { CurrencyPipe, NgClass, NgFor, NgIf, PercentPipe,} from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ApiProductsService, ProductApi } from '../../Services/api-products.service';
import { ProductoService } from '../../Services/product.service';
import { Usuario } from '../../Services/api-usuario.service';
import { ProductDialogComponent } from './dialog/dialog.component';
import { ProductDetailComponent } from './detail/detail.component';

export type Product = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  description: string;
  isOferta: boolean;
  porcentajeOferta: number;
  finalPrice: number;
};

@Pipe({
  name: 'shorttext',
  standalone: true,
})
export class ShortTextPipe implements PipeTransform {
  transform(value: string) {
    return `${value.substring(0, 50)}...`;
  }
}

@Component({
  selector: 'producto-card',
  imports: [
    NgFor,
    NgIf,
    CurrencyPipe,
    NgClass,
    PercentPipe,
    ShortTextPipe,
    RouterLink,
    MatButtonModule,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductosComponent implements OnInit {
 
  productos?: Product[];
  dialog = inject(MatDialog);
   productosApi: ProductApi[] = [];
  //usuario: Usuario[] = [];
 
  constructor(
    private readonly productoService: ProductoService,
    private readonly apiProductsService: ApiProductsService,
    //private readonly apiUsuarioService: ApiSUsuarioService
  ) {}

  async ngOnInit() {
    console.log('...ngOnInit');
    this.productos = await this.productoService.getProductos();
    this.productosApi = await this.apiProductsService.getAllProducts();
   // this.usuario= await this.apiUsuarioService.getAllStudents();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: {
        animal: 'unicorn',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result:`, result);
    });
  }

  verProducto(product: Product) {
    const dialogRef = this.dialog.open(ProductDetailComponent, {
      data: {
        ...product,
      },
    });
  }
 }
 
