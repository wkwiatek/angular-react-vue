import React from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';

const ProductsComponent = ({ products, onBuyClick }) => {
  return (
    <div>
      <ul>
        { products.map(p => (
          <li key={ p.id }>
            <Product
              id={ p.id }
              name={ p.name }
              isSoldOut={ p.isSoldOut }
              onBuyClick={ onBuyClick }
            />
          </li>
        )) }
      </ul>
    </div>
  )
};

const mapStateToProps = state => ({
  products: state
});

const mapDispatchToProps = dispatch => ({
  onBuyClick(id) {
    dispatch({type: 'BUY_PRODUCT', payload: { id } })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsComponent);