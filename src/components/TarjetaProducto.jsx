import React from 'react';

const TarjetaProductos = (props) => {

  const { upc, asin, name, quantity } = props;
  return (
    <div>
      <h1>{name}</h1>
      <h3>{asin}</h3>
      <h3>{upc}</h3>
      <h4>{quantity}</h4>
    </div>
  );
};

export default TarjetaProductos;
