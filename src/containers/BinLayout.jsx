import React from 'react';
import { Link } from '@reach/router';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { connect } from 'react-redux';
import BinLayoutdetails from '../components/BinLayout';

import '../assets/styles/App.scss';

const SIZE = '45px';
const BinLayout = (props) => {
  const { binindex, inventario } = props;
  const details = inventario[binindex];
  const { name } = details;
  return (
    <div>
      <div className='gobackbtn-container'>
        <Link className='gobackbtn' to='/'>
          <FiArrowLeftCircle size={SIZE} />
        </Link>
        <h1 className='titulo__principal'>{`Bin: ${name}`}</h1>
      </div>
      <BinLayoutdetails />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    binindex: state.binindex,
    inventario: state.inventario,
  };
};

export default connect(mapStateToProps, null)(BinLayout);
