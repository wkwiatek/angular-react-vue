import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IProduct } from '../shared/product.interface';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../shared/reducers/products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public product: FormGroup;

  constructor(public router: Router, private store: Store<AppState>) { }

  ngOnInit() {
    this.product = new FormGroup({
      name: new FormControl(''),
    });
  }

  public onSubmit({ value, valid }: { value: IProduct, valid: boolean }): void {
    this.store.dispatch({ type: 'ADD_PRODUCT', payload: { product: value } });
    this.router.navigate(['/products']);
  }

}
