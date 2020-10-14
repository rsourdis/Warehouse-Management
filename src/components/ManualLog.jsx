import React from 'react';
import { connect } from 'react-redux';
import { MdAddBox, MdRemoveCircle } from 'react-icons/md';
import FloorLayout from './FloorLayout';

import '../assets/styles/components/ManualLog.scss';

const SIZE = '35px';
const ManualLog = (props) => {
  return (
    <>
      {/* <form className='manualLog_form' action='submit'>
        <input className='manualLog_form-input' type='text' placeholder='Product SKU...' />
      </form> */}
      <FloorLayout />
      <div className='manualLog_container'>
        <MdRemoveCircle className='manualLog_removeicon' size={SIZE} />
        <MdAddBox className='manualLog_addicon' size={SIZE} />
      </div>
    </>
  );
};

export default connect(null, null)(ManualLog);
