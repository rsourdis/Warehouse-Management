import React from 'react';
import palletVacio from '../assets/static/palletVacio.png';
import '../assets/styles/components/BinPalletlleno.scss';

const BinPalletVacio = ({ id }) => {

  return (
    <div className='binpallet_vacio'>
      <img src={palletVacio} className='binpalletvacio' alt='' />
    </div>
  );
};

export default BinPalletVacio;
