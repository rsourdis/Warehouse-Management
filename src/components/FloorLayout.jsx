import React from 'react';
import { connect } from 'react-redux';
import BinTop from './BinTop';
import BinTopVertical from './BinTopVertical';
import FloorPallet from './FloorPallet';
import '../assets/styles/components/FloorLayout.scss';

const FloorLayout = (props) => {

  const { inventario } = props;

  return (
    <div className='floorlayout'>
      <div className='bin__row-A'>
        <div className='floorlayout__A'>
          <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[0].name} id={inventario[0].name} binIndex={0} />
          <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[1].name} id={inventario[1].name} binIndex={1} />
          <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[2].name} id={inventario[2].name} binIndex={2} />
          <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[3].name} id={inventario[3].name} binIndex={3} />
          <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[4].name} id={inventario[4].name} binIndex={4} />
          <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[5].name} id={inventario[5].name} binIndex={5} />
          <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[6].name} id={inventario[6].name} binIndex={6} />
          <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[7].name} id={inventario[7].name} binIndex={7} />
        </div>
        <BinTopVertical classImg='binVertical__A' classText='binnumberVertical-A' binnumber={inventario[8].name} id={inventario[8].name} binIndex={8} />
      </div>
      <div className='bin__row-B'>
        <div className='floorlayout__B'>
          <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[9].name} id={inventario[9].name} binIndex={9} />
          <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[10].name} id={inventario[10].name} binIndex={10} />
          <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[11].name} id={inventario[11].name} binIndex={11} />
          <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[12].name} id={inventario[12].name} binIndex={12} />
        </div>
        <BinTopVertical classImg='binVertical__B' classText='binnumberVertical-B' binnumber={inventario[13].name} id={inventario[13].name} binIndex={13} />
      </div>
      <div className='floorlayout__C'>
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[14].name} id={inventario[14].name} binIndex={14} />
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[15].name} id={inventario[15].name} binIndex={15} />
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[16].name} id={inventario[16].name} binIndex={16} />
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[17].name} id={inventario[17].name} binIndex={17} />
      </div>
      <div className='floorlayout__D'>
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[18].name} id={inventario[18].name} binIndex={18} />
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[19].name} id={inventario[19].name} binIndex={19} />
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[20].name} id={inventario[20].name} binIndex={20} />
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[21].name} id={inventario[21].name} binIndex={21} />
      </div>
      <div className='floorlayout__E'>
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[22].name} id={inventario[22].name} binIndex={22} />
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[23].name} id={inventario[23].name} binIndex={23} />
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[24].name} id={inventario[24].name} binIndex={24} />
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[25].name} id={inventario[25].name} binIndex={25} />
      </div>
      <div className='floorlayout__F'>
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[26].name} id={inventario[26].name} binIndex={26} />
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[27].name} id={inventario[27].name} binIndex={27} />
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[28].name} id={inventario[28].name} binIndex={28} />
      </div>
      <div className='floorlayout__G'>
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[29].name} id={inventario[29].name} binIndex={29} />
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[30].name} id={inventario[30].name} binIndex={30} />
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[31].name} id={inventario[31].name} binIndex={31} />
      </div>
      <div className='floorlayout__H'>
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[32].name} id={inventario[32].name} binIndex={32} />
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[33].name} id={inventario[33].name} binIndex={33} />
        <FloorPallet classImg='bintop' classText='binnumber' binnumber={inventario[33].name} id={inventario[33].name} binIndex={33} />
      </div>
      <div className='floorlayout__I'>
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[34].name} id={inventario[34].name} binIndex={34} />
        <BinTop classImg='bintop' classText='binnumber' binnumber={inventario[35].name} id={inventario[35].name} binIndex={35} />
        <FloorPallet classImg='bintop' classText='binnumber' binnumber={inventario[35].name} id={inventario[35].name} binIndex={35} />
      </div>
      <div className='floorlayout__Z'>
        <BinTop classImg='bintop' classText='binnumber-Z' binnumber={inventario[36].name} id={inventario[36].name} binIndex={36} />
      </div>
      <div className='floorlayout__binFloor'>
        <FloorPallet classImg='bintop' classText='binnumber-Z' binnumber={inventario[37].name} id={inventario[37].name} binIndex={37} />
      </div>
      <div className='office'>
        <BinTop classImg='bintop-Y' classText='binnumber-Y' binnumber={inventario[38].name} id={inventario[38].name} binIndex={38} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    inventario: state.inventario,
  };
};

export default connect(mapStateToProps, null)(FloorLayout);
