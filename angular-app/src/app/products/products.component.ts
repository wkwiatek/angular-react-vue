import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../shared/reducers/products';
import { IProduct } from '../shared/product.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Observable<IProduct[]>;

  constructor(private store: Store<AppState>) {
    this.products = store.select('products');
  }

  ngOnInit() {
  }

  onBuyClick(id: number) {
    this.store.dispatch({ type: 'BUY_PRODUCT', payload: { id } });
  }

}
