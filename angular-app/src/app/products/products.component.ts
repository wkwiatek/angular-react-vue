import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
  }

  onBuyClick(id: number) {
    this.productsService.buyProduct(id);
  }

}
