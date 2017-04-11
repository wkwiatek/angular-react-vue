import React from 'react';
import { connect } from 'react-redux';
import { LocalForm, Control } from 'react-redux-form';
import { withRouter } from 'react-router-dom';

const AddProductComponent = ({ onAddProductClick, history }) => {
  const handleAddProductSubmit = product => {
    onAddProductClick(product);
    history.push('/products');
  };

  return (
    <LocalForm onSubmit={ handleAddProductSubmit }>
      <Control.text model=".name" />
      <button>Submit</button>
    </LocalForm>
  );
}

const mapStateToProps = state => ({
  products: state
});

const mapDispatchToProps = dispatch => ({
  onAddProductClick(product) {
    dispatch({type: 'ADD_PRODUCT', payload: { product } })
  }
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddProductComponent));