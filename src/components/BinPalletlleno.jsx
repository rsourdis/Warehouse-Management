import React from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import palletlleno from '../assets/static/PalletLleno.png';
import { setFloorName, setFloorIndex } from '../actions';
import '../assets/styles/components/BinPalletlleno.scss';

const BinPalletlleno = (props) => {
  const { floorIndex, bin, floorname } = props;

  const handleClick = (floorname, floorIndex) => {
    props.setFloorName(floorname);
    props.setFloorIndex(floorIndex);
  };

  return (
    <Link className='binpallet' to={`/binsection/${bin}`} onClick={() => handleClick(floorname, floorIndex)}>
      <img src={palletlleno} className='binpalletlleno' alt='' />
    </Link>
  );
};
const mapDispatchToProps = {
  setFloorName,
  setFloorIndex,
};

export default connect(null, mapDispatchToProps)(BinPalletlleno);
