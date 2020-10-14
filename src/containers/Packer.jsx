import React, { useState } from 'react';
import { connect } from 'react-redux';
import PackingProcess from '../components/Packingprocess';
import OrderPackingList from '../components/OrderPackingList';
import OrderPackingItem from '../components/OrderPackingItem';
import { setCargarOrder } from '../actions';

import '../assets/styles/App.scss';
import '../assets/styles/components/FullfilmentOrders.scss';

const Packer = (props) => {
  const { packingorder } = props;
  const [showOrders, setShowOrders] = useState(false);
  const [activeOrder, setActiveOrder] = useState(false);

  const hanldeFullfilment = () => {
    setShowOrders(!showOrders);
    setActiveOrder(false);
  };

  const handleSelectedFBA = () => {
    setShowOrders(false);
    setActiveOrder(true);
  };

  return (
    <div>
      <div className='gobackbtn-container'>
        <h1 className='titulo__principal'>Packer</h1>
        <button type='button' className='searchorder__logo' label='AmazonLogo' onClick={hanldeFullfilment} />
      </div>
      <PackingProcess />
      { activeOrder && (
        <OrderPackingList>
          <OrderPackingItem />
          <OrderPackingItem />
        </OrderPackingList>
      )}
      {showOrders && (
        <div className='fullfilmentOrders__container'>
          <h2 className='fullfilmentOrders__title'>Fullfilment Orders</h2>
          <button type='button' className='FBA__name-button' onClick={handleSelectedFBA}>FBA Agosto 28, 2020 12:30 pm</button>
          <button type='button' className='FBA__name-button' onClick={handleSelectedFBA}>FBA Agosto 28, 2020 12:30 pm</button>
          <button type='button' className='FBA__name-button' onClick={handleSelectedFBA}>FBA Agosto 28, 2020 12:30 pm</button>
          <button type='button' className='FBA__name-button' onClick={handleSelectedFBA}>FBA Agosto 28, 2020 12:30 pm</button>
          <button type='button' className='FBA__name-button' onClick={handleSelectedFBA}>FBA Agosto 28, 2020 12:30 pm</button>
          <button type='button' className='FBA__name-button' onClick={handleSelectedFBA}>FBA Agosto 28, 2020 12:30 pm</button>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  setCargarOrder,
};

const mapStateToProps = (state) => {
  return {
    packingorder: state.packingorder,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Packer);
