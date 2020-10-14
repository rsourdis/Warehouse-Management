import React, { useEffect } from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import PickingItem from './PickingItem';
import { setListSate } from '../actions';

import '../assets/styles/components/PickingProcess.scss';

const PickingProcess = (props) => {
  const { lists, listId } = props;
  const indexOflist = lists.findIndex((list) => list.id === listId);
  const { items, transactionType, transactionNumber, notes } = lists.find((list) => list.id === listId);

  useEffect(() => {
    if (items.every((item) => item.picked === true)) {
      props.setListSate(indexOflist);

      navigate('/lists');
    }
  }, [lists]);

  return (
    <div className='pickingProcess__container'>
      <div className='pickingProcess_Type'>{transactionType}</div>
      <div className='pickingProcess_number'>{transactionNumber}</div>
      <h6 className='pickingProcess_notes'>
        Notas:
        {notes}
      </h6>
      {items.map((item) => (
        <PickingItem
          key={item.id}
          {...item}
          indexOflist={indexOflist}
          indexOfItem={items.findIndex((list) => list.id === item.id)}
        />
      ))}
    </div>
  );
};

const mapDispatchToProps = {
  setListSate,
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PickingProcess);
