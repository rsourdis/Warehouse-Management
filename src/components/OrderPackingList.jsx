import React from 'react';
import { connect } from 'react-redux';

import '../assets/styles/components/OrderPackingList.scss';

const OrderPackingList = ({ children }) => {
  return (
    <div className='orderPackingList__container'>
      <div className='orderPackingList__ordernumber'>Order No. 1709</div>
      <div className='orderPackingList__orderclient'>Cliente: Alexander Manuel</div>
      <div className='orderPackingList__ordernote'>Nota: Enviar sin Factura, Regalo...</div>
      {children}
    </div>
  );
};

export default connect(null, null)(OrderPackingList);
