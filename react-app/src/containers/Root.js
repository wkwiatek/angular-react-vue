import React from 'react';
import HomeComponent from '../components/Home';
import ProductsComponent from './Products';
import AddProductComponent from './AddProduct';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import productsReducer from '../reducers';

const store = createStore(productsReducer);

const Root = () => (
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/products/add">Add Product</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={HomeComponent}/>
        <Route exact path="/products" component={ProductsComponent}/>
        <Route path="/products/add" component={AddProductComponent}/>
      </div>
    </BrowserRouter>
  </Provider>
);

export default Root;

