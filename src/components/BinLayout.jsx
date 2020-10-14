import React from 'react';
import { connect } from 'react-redux';
import BinPalletlleno from './BinPalletlleno';
import BinPalletVacio from './BinPalletVacio';

import '../assets/styles/components/BinLayout.scss';

const BinLayout = (props) => {
  const { binindex, inventario } = props;
  const details = inventario[binindex];
  const { name, floors } = details;
  const floor1 = floors[0];
  const floor2 = floors[1];
  const floor3 = floors[2];

  return (
    <div>
      <div className='binLayout'>
        <div className='binlayout__floor'>
          { floor3.length > 0 ? (
            <div className='displayflex-row-center-nomargin'>
              <BinPalletlleno floorDetails={floor3} bin={name} floorname='3' floorIndex={2} />
              <BinPalletlleno floorDetails={floor3} bin={name} floorname='3' floorIndex={2} />
              <BinPalletlleno floorDetails={floor3} bin={name} floorname='3' floorIndex={2} />
            </div>
          ) : (
            <div className='displayflex-row-center-nomargin'>
              <BinPalletVacio />
              <BinPalletVacio />
              <BinPalletVacio />
            </div>
          )}
        </div>
        <div className='binlayout__floor'>
          { floor2.length > 0 ? (
            <div className='displayflex-row-center-nomargin'>
              <BinPalletlleno floorDetails={floor2} bin={name} floorname='2' floorIndex={1} />
              <BinPalletlleno floorDetails={floor2} bin={name} floorname='2' floorIndex={1} />
              <BinPalletlleno floorDetails={floor2} bin={name} floorname='2' floorIndex={1} />
            </div>
          ) : (
            <div className='displayflex-row-center-nomargin'>
              <BinPalletVacio />
              <BinPalletVacio />
              <BinPalletVacio />
            </div>
          ) }
        </div>
        <div className='binlayout__floor'>
          { floor1.length > 0 ? (
            <div className='displayflex-row-center-nomargin'>
              <BinPalletlleno floorDetails={floor1} bin={name} floorname='1' floorIndex={0} />
              <BinPalletlleno floorDetails={floor1} bin={name} floorname='1' floorIndex={0} />
              <BinPalletlleno floorDetails={floor1} bin={name} floorname='1' floorIndex={0} />
            </div>
          ) : (
            <div className='displayflex-row-center-nomargin'>
              <BinPalletVacio />
              <BinPalletVacio />
              <BinPalletVacio />
            </div>
          ) }
        </div>
      </div>
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

