import React from 'react';

import '../assets/styles/components/LogCard.scss';

const LogCard = (props) => {

  const { action, username, binName, moment, productName, itemCode, quantity } = props;

  return (
    <div className='logCard__container'>
      <div className='logCard__log-action'>{action}</div>
      <div className='logCard__container-details'>
        <div className='logCard__container-first'>
          <div className='logCard__log-name'>{productName}</div>
        </div>
        <div className='logCard__container-second'>
          <div className='logCard__log-items'>Bin: {binName}</div>
          <div className='logCard__log-items'>{itemCode}</div>
          <div className='logCard__log-qty'>Qty: {quantity}</div>
        </div>
        <div className='logCard__container-third'>
          <div className='logCard__log-user'>{username}</div>
          <div className='logCard__log-moment'>{moment}</div>
        </div>
      </div>
    </div>
  );
};

export default LogCard;
