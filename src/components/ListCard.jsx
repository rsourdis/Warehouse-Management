import React from 'react';
import { Link } from '@reach/router';
import '../assets/styles/components/ListCard.scss';

const ListCard = (props) => {

  const { id, transactionType, transactionNumber, date, items } = props;

  return (
    <div className='listCard__container'>
      <div className='listCard__list-provider'>
        <div>{transactionType}</div>
        <div>{transactionNumber}</div>
      </div>
      <div className='listCard__list-type'>{date}</div>
      <div className='listCard__list-products'>
        {items.map((item) => (
          <div key={item.id}>{item.itemCode}</div>
        ))}
      </div>
      <Link to={`/pickinglist/${id}`}>
        <button className='listCard__list-button' type='button'>Start</button>
      </Link>
    </div>
  );
};

export default ListCard;
