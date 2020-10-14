import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/BinPicker.scss';
import { setBinPicker } from '../actions';

const BinPicker = (props) => {

  const handleBinPicked = (event) => {
    props.setBinPicker(event.target.name, event.target.value);
  };

  return (
    <div className='binPicker_floorlayout'>
      <div className='bin__row-A'>
        <div className='floorlayout__A'>
          <button type='button' id='binButton' className='binPicker_top-A' name='A01' value={0} onClick={handleBinPicked}>A1</button>
          <button type='button' id='binButton' className='binPicker_top-A' name='A02' value={1} onClick={handleBinPicked}>A2</button>
          <button type='button' id='binButton' className='binPicker_top-A' name='A03' value={2} onClick={handleBinPicked}>A3</button>
          <button type='button' id='binButton' className='binPicker_top-A' name='A04' value={3} onClick={handleBinPicked}>A4</button>
          <button type='button' id='binButton' className='binPicker_top-A' name='A05' value={4} onClick={handleBinPicked}>A5</button>
          <button type='button' id='binButton' className='binPicker_top-A' name='A06' value={5} onClick={handleBinPicked}>A6</button>
          <button type='button' id='binButton' className='binPicker_top-A' name='A07' value={6} onClick={handleBinPicked}>A7</button>
          <button type='button' id='binButton' className='binPicker_top-A' name='A08' value={7} onClick={handleBinPicked}>A8</button>
        </div>
        <button type='button' id='binButton' className='binPicker_Vertical__A' name='A09' value={8} onClick={handleBinPicked}>A9</button>
      </div>
      <div className='bin__row-B'>
        <div className='floorlayout__B'>
          <button type='button' id='binButton' className='binPicker_top-B' name='B01' value={9} onClick={handleBinPicked}>B1</button>
          <button type='button' id='binButton' className='binPicker_top-B' name='B02' value={10} onClick={handleBinPicked}>B2</button>
          <button type='button' id='binButton' className='binPicker_top-B' name='B03' value={11} onClick={handleBinPicked}>B3</button>
          <button type='button' id='binButton' className='binPicker_top-B' name='B04' value={12} onClick={handleBinPicked}>B4</button>
        </div>
        <button type='button' id='binButton' className='binPicker_Vertical__B' name='BC1' value={13} onClick={handleBinPicked}>BC1</button>
      </div>
      <div className='floorlayout__C'>
        <button type='button' id='binButton' className='binPicker_top' name='C01' onClick={handleBinPicked} value={14}>C1</button>
        <button type='button' id='binButton' className='binPicker_top' name='C02' onClick={handleBinPicked} value={15}>C2</button>
        <button type='button' id='binButton' className='binPicker_top' name='C03' onClick={handleBinPicked} value={16}>C3</button>
        <button type='button' id='binButton' className='binPicker_top' name='C04' onClick={handleBinPicked} value={17}>C4</button>
      </div>
      <div className='floorlayout__D'>
        <button type='button' id='binButton' className='binPicker_top' name='D01' onClick={handleBinPicked} value={18}>D1</button>
        <button type='button' id='binButton' className='binPicker_top' name='D02' onClick={handleBinPicked} value={19}>D2</button>
        <button type='button' id='binButton' className='binPicker_top' name='D03' onClick={handleBinPicked} value={20}>D3</button>
        <button type='button' id='binButton' className='binPicker_top' name='D04' onClick={handleBinPicked} value={21}>D4</button>
      </div>
      <div className='floorlayout__E'>
        <button type='button' id='binButton' className='binPicker_top' name='E01' onClick={handleBinPicked} value={22}>E1</button>
        <button type='button' id='binButton' className='binPicker_top' name='E02' onClick={handleBinPicked} value={23}>E2</button>
        <button type='button' id='binButton' className='binPicker_top' name='E03' onClick={handleBinPicked} value={24}>E3</button>
        <button type='button' id='binButton' className='binPicker_top' name='E04' onClick={handleBinPicked} value={25}>E4</button>
      </div>
      <div className='floorlayout__F'>
        <button type='button' id='binButton' className='binPicker_top' name='F01' onClick={handleBinPicked} value={26}>F1</button>
        <button type='button' id='binButton' className='binPicker_top' name='F02' onClick={handleBinPicked} value={27}>F2</button>
        <button type='button' id='binButton' className='binPicker_top' name='F03' onClick={handleBinPicked} value={28}>F3</button>
      </div>
      <div className='floorlayout__G'>
        <button type='button' id='binButton' className='binPicker_top' name='G01' onClick={handleBinPicked} value={29}>G1</button>
        <button type='button' id='binButton' className='binPicker_top' name='G02' onClick={handleBinPicked} value={30}>G2</button>
        <button type='button' id='binButton' className='binPicker_top' name='G03' onClick={handleBinPicked} value={31}>G3</button>
      </div>
      <div className='floorlayout__H'>
        <button type='button' id='binButton' className='binPicker_top' name='H01' onClick={handleBinPicked} value={32}>H1</button>
        <button type='button' id='binButton' className='binPicker_top' name='H02' onClick={handleBinPicked} value={33}>H2</button>
        <button type='button' id='binButton' className='binPicker_floorPallet_top' name='H02' onClick={handleBinPicked} value={33}>H2</button>
      </div>
      <div className='floorlayout__I'>
        <button type='button' id='binButton' className='binPicker_top' name='I01' onClick={handleBinPicked} value={34}>I1</button>
        <button type='button' id='binButton' className='binPicker_top' name='I02' onClick={handleBinPicked} value={35}>I2</button>
        <button type='button' id='binButton' className='binPicker_floorPallet_top' name='I02' onClick={handleBinPicked} value={35}>I2</button>
      </div>
      <div className='floorlayout__Z'>
        <button type='button' id='binButton' className='binPicker_top' name='Z01' onClick={handleBinPicked} value={36}>Z1</button>
      </div>
      <div className='floorlayout__binFloor'>
        <button type='button' id='binButton' className='binPicker_floorPallet_top' name='floor' onClick={handleBinPicked} value={37}>Floor</button>
      </div>
      <div className='office'>
        <button type='button' id='binButton' className='binPicker_Y_top' name='Y01' onClick={handleBinPicked} value={38}>Y1</button>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  setBinPicker,
};

export default connect(null, mapDispatchToProps)(BinPicker);
