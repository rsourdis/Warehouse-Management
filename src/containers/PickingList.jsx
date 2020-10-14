import React from 'react';
import { connect } from 'react-redux';
import PickingProcess from '../components/PickingProcess';

import '../assets/styles/App.scss';

const PickingLists = (props) => {
  const { id } = props;
  return (
    <div>
      <h1 className='titulo__principal'>Picking List</h1>
      <PickingProcess listId={id} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  };
};

export default connect(mapStateToProps, null)(PickingLists);

