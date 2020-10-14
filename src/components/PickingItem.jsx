import React, { useState } from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { setItemPickedState } from '../actions';

import '../assets/styles/components/PickingProcess.scss';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const SIZE = '25px';

const PickingItem = (props) => {
  const { id, itemCode, upc, asin, quantity, name, picked, binBarcode, hasProblem, indexOflist, indexOfItem } = props;
  const [scanvalue, setScanValue] = useState('');
  const [qtypicked, setQtyPicked] = useState(quantity);

  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setOpenSuccess(false);
  };

  const handleScanValue = (e) => {
    setScanValue(e.target.value);
  };
  const handleQtyValue = (e) => {
    setQtyPicked(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handlePicking = () => {
    if (scanvalue === itemCode || scanvalue === upc) {
      setOpenSuccess(true);
      props.setItemPickedState(indexOflist, indexOfItem);
    } else {
      setOpen(true);
    }
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
    }
  };

  return (
    <div className='pickingitem__container'>
      {picked === true ? () => { } : (
        <div className='pickingitem__goto'>
          {`Bin: ${binBarcode}`}
        </div>
      )}
      <div className='pickingitem__details-container'>
        {picked === true ? <AiFillCheckCircle className='picking__icon-green' size={SIZE} /> : <AiOutlineCheckCircle className='picking__icon-red' size={SIZE} />}
        {/* <div className='pickingProcess__bin'>{binpicking}</div> */}
        <div className='pickingProcess__product-name'>{name}</div>
        <div className='pickingProcess__product-Codes-Contianer'>
          <div className='pickingProcess__product-SKU'>{itemCode}</div>
          <p className='pickingProcess__product-UPC'>{upc}</p>
        </div>
      </div>
      {picked === true ? () => { } : <div className='pickingProcess__product-qty'>{`Items: ${quantity}`}</div>}
      {picked === true ? <div /> : (
        <form className='pickingProcess__form' onSubmit={handleSubmit}>
          <input onKeyPress={handleEnterKey} type='text' name='SKU' className='pickingProcess__form-input' placeholder='Product SKU...' onChange={handleScanValue} value={scanvalue} />
          <input onKeyPress={handleEnterKey} type='text' name='qtyPicked' className='pickingProcess__form-inputQty' placeholder='Qty Picked...' onChange={handleQtyValue} value={qtypicked} />
          {hasProblem ? <button type='button' className='picking__button-pick-Action'>Action Required</button> : <button type='button' onClick={handlePicking} className='picking__button-pick'>Pick</button>}
        </form>
      )}
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'center', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity='error'>
          EL SKU NO ES CORRECTO!!!
        </Alert>
      </Snackbar>
      <Snackbar open={openSuccess} autoHideDuration={1000} onClose={handleClose} anchorOrigin={{ vertical: 'center', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity='success'>
          PRODUCTO ESCOGIDO CORRECTAMENTE!!!
        </Alert>
      </Snackbar>
    </div>
  );
};

const mapDispatchToProps = {
  setItemPickedState,
};

const mapStateToProps = (state) => {
  return {
    inventario: state.inventario,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PickingItem);

