import React from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import floorPallet from '../assets/static/FloorPallet.png';
import { setBinIndex } from '../actions';
import '../assets/styles/components/BinTop.scss';

const FloorPallet = (props) => {
  const { binnumber, binIndex, classImg, classText } = props;

  const handleClick = (binIndex) => {
    props.setBinIndex(binIndex);
  };

  return (

    <Link className='binLink' to={`/binlayout/${binnumber}`} onClick={() => handleClick(binIndex)}>
      <img src={floorPallet} className={classImg} alt='' />
      <div className={classText}>{binnumber}</div>
    </Link>
  );
};

const mapDispatchToProps = {
  setBinIndex,
};

// const mapStateToProps = (state) => {
//   return {
//     serviceDetail: state.serviceDetail,
//   };
// };

export default connect(null, mapDispatchToProps)(FloorPallet);

