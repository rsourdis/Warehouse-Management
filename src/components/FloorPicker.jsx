import React from 'react';
import { connect } from 'react-redux';

import { setFloorPicker } from '../actions';
import '../assets/styles/components/FloorPicker.scss';

const FloorPicker = (props) => {

  const handlefloorPicked = (event) => {
    props.setFloorPicker(event.target.name, event.target.value);
  };

  return (
    <div className='floorpicker_binLayout'>
      <div className='floorpicker__binlayout-floor'>
        <div className='floorPicker_floor-container'>
          <button type='button' id='binFloor' className='floorPicker_number' name='3' value={2} onClick={handlefloorPicked}> Floor 3</button>
        </div>
      </div>
      <div className='floorpicker__binlayout-floor'>
        <div className='floorPicker_floor-container'>
          <button type='button' id='binFloor' className='floorPicker_number' name='2' value={1} onClick={handlefloorPicked}> Floor 2</button>
        </div>
      </div>
      <div className='floorpicker__binlayout-floor'>
        <div className='floorPicker_floor-container'>
          <button type='button' id='binFloor' className='floorPicker_number' name='1' value={0} onClick={handlefloorPicked}> Floor 1</button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setFloorPicker,
};

export default connect(null, mapDispatchToProps)(FloorPicker);

