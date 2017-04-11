import React from 'react';

const Product = ({ id, name, isSoldOut, onBuyClick }) => {
  const handleClick = () => {
    onBuyClick(id)
  }

  return (
    <div>
      <span style={ { textDecoration: isSoldOut ? 'line-through' : 'none' }}>
        { name }
      </span>
      <button onClick={ handleClick }>
        Buy
      </button>
    </div>
  )
};

export default Product;
