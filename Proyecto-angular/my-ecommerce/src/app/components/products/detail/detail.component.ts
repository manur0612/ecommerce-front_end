import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { ProductoService } from '../../../Services/product.service';
import { Product } from '../products.component';

@Component({
  selector: 'app-product-detail',
  imports: [MatDialogTitle, MatDialogContent, MatDialogModule, MatButton],
  templateUrl: './detail.component.html',
})
export class ProductDetailComponent {
  data = inject(MAT_DIALOG_DATA);
  productId: number = 0;
  product: Product | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly productoService: ProductoService,
    private dialogRef: MatDialogRef<ProductDetailComponent>
  ) {}

  onCancel() {
    this.dialogRef.close();
  }
}