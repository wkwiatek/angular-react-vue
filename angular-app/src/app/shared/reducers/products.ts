import { Action } from '@ngrx/store';
import { IProduct } from '../product.interface';

const initialState: IProduct[] = [
  { id: 0, name: 'Apple', isSoldOut: false },
  { id: 1, name: 'Coffee', isSoldOut: false }
];

let lastId = 1;

export function productsReducer(state: IProduct[] = initialState, action: Action): IProduct[] {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const { product } = action.payload;
      return [ ...state, { ...product, id: ++lastId } ];

    case 'BUY_PRODUCT':
      const { id } = action.payload;
      return state.map(
        p => p.id === id
          ? { ...p, isSoldOut: true }
          : p
      );

    default:
      return state;
  }
}

export interface AppState {
  products: IProduct[];
};
