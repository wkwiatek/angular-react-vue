import { Injectable } from '@angular/core';
import { IProduct } from './product.interface';

@Injectable()
export class ProductsService {

  public products: IProduct[] = [
    { id: 0, name: 'Apple', isSoldOut: false },
    { id: 1, name: 'Coffee', isSoldOut: false }
  ];

  public lastId = 1;

  public addProduct(product: IProduct): void {
    this.products.push({
      id: ++this.lastId,
      ...product
    });
  }

  public buyProduct(productId: number): void {
    const productToBeSold = this.products.find(p => p.id === productId);
    productToBeSold.isSoldOut = true;
  }

}
