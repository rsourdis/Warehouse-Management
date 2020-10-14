import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import { setNewQtyInventory, cargarInventario } from '../actions';

import '../assets/styles/components/ManualPicking.scss';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    textAlign: 'center',
  },
}));

// function Alert(props) {
//   return <MuiAlert elevation={6} variant='filled' {...props} />;
// }

const ManualPicking = (props) => {
  const classes = useStyles();
  const { name, id, code, bin, floor, itemIndex, QtyActual, binlist, floorlist, inventario } = props;
  const [scanvalue, setScanValue] = useState('');
  const [itemData, setItemData] = useState({
    idbinData: '',
    idInventoryData: '',
    changeQty: '',
  });
  // const itemindex = inventario[binindex].floors[floorindex].findIndex((item) => item.name === name);
  const binId = inventario[bin].idBin;
  // const inventoryId = inventario[binindex].floors[floorindex][itemindex].idInventory;

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
    setItemData({
      ...itemData,
      changeQty: e.target.value,
      idbinData: binId,
      idInventoryData: id,
    });
  };

  const handleRemoveQty = (event) => {
    if (QtyActual >= Number(scanvalue)) {
      setOpenSuccess(true);
      const NewQty = Number(QtyActual) - Number(scanvalue);
      setTimeout(handleClose, 3000);
      props.setNewQtyInventory(bin, floor, itemIndex, NewQty);
      props.cargarInventario();
    } else {
      setOpen(true);
    }
  };

  const handleAddQty = (event) => {
    setOpenSuccess(true);
    const NewQty = Number(QtyActual) + Number(scanvalue);
    props.setNewQtyInventory(bin, floor, itemIndex, NewQty);
    props.cargarInventario();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
    }
  };

  return (
    <div className='manualProcess__container'>
      <Collapse in={openSuccess} className={classes.root} timeout='auto'>
        <Alert
          action={(
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={handleClose}
            />
          )}
        >
          INVENTARIO CAMBIADO CORRECTAMENTE!!!
        </Alert>
      </Collapse>
      <Collapse in={open} className={classes.root} timeout='auto'>
        <Alert
          severity='error'
          action={(
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={handleClose}
            />
          )}
        >
          CANTIDAD MAYOR A LA EXISTENTE!!!
        </Alert>
      </Collapse>
      <div className='manualPicking_title'>Manual Picking From</div>
      <div className='manualPicking_title'>{`Bin: ${binlist[bin].name} - Floor: ${floorlist[floor].name}`}</div>
      <div className='manualPicking_name'>{name}</div>
      <div className='manualPicking_code'>{code}</div>
      <form className='manualPicking__form' onSubmit={handleSubmit}>
        <input onKeyPress={handleEnterKey} className='manualPicking_form-input' onChange={handleScanValue} value={scanvalue} type='text' placeholder='Qty...' />
        <div className='manualPicking-btns-container'>
          <button className='manualPicking_button-pick-remove' type='button' onClick={handleRemoveQty}>Remove</button>
          <button className='manualPicking_button-pick-add' type='button' onClick={handleAddQty}>Add</button>
        </div>
      </form>
      {/* <Snackbar open={openSuccess} autoHideDuration={1000} onClose={handleClose} anchorOrigin={{ vertical: 'center', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity='success'>
          PRODUCTO ESCOGIDO CORRECTAMENTE!!!
        </Alert>
      </Snackbar>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'center', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity='error'>
          CANTIDAD MAYOR A LA EXISTENTE!!!
        </Alert>
      </Snackbar> */}
    </div>
  );
};

const mapDispatchToProps = {
  setNewQtyInventory,
  cargarInventario,
};

const mapStateToProps = (state) => {
  return {
    binindex: state.binindex,
    floorindex: state.floorindex,
    inventario: state.inventario,
    binlist: state.binlist,
    floorlist: state.floorlist,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManualPicking);
