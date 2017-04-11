import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IProduct } from '../shared/product.interface';
import { Router } from '@angular/router';
import {ProductsService} from "../shared/products.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public product: FormGroup;

  constructor(public router: Router, public productsService: ProductsService) { }

  ngOnInit() {
    this.product = new FormGroup({
      name: new FormControl(''),
    });
  }

  public onSubmit({ value, valid }: { value: IProduct, valid: boolean }): void {
    this.productsService.addProduct(value);
    this.router.navigate(['/products']);
  }

}
