import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import BinPicker from './BinPicker';
import FloorPicker from './FloorPicker';
import { setMovement, resetpicker, setMovementExiste } from '../actions';

import '../assets/styles/components/Movement.scss';

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

const Movement = (props) => {
  const classes = useStyles();
  const { id, name, codes, img, bin, floor, itemIndex, QtyActual, binpicker, floorpicker, binlist, floorlist, inventario } = props;
  const [scanvalue, setScanValue] = useState('');
  const [itemMoved, setItemMoved] = useState({
    idInventory: id,
    name,
    quantity: 0,
    img,
    codes,
  });

  const [open, setOpen] = useState(false);
  const [showPicker, setShowPikcer] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openPicker, setOpenPicker] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setOpenSuccess(false);
    setOpenPicker(false);
  };

  const handleScanValue = (e) => {
    setScanValue(e.target.value);
    setItemMoved({
      ...itemMoved,
      quantity: e.target.value,
    });
  };

  const handleMovement = () => {
    if (QtyActual >= Number(scanvalue)) {
      if (binpicker.name !== '' && floorpicker.name !== '') {
        setOpenSuccess(true);
        const newQty = Number(QtyActual) - Number(scanvalue);
        let existeIndex;
        let existeItem;
        const buscarSiExiste = inventario[binpicker.index].floors[floorpicker.index].map((item, itemIndex) => { item.name.toLowerCase() === itemMoved.name.toLowerCase() ? existeItem = true : () => { }; (item.name.toLowerCase() === itemMoved.name.toLowerCase()) ? existeIndex = itemIndex : () => { }; });
        console.log(existeItem);
        console.log(existeIndex);
        if (existeItem) {
          props.setMovementExiste(bin, floor, itemIndex, newQty, binpicker.index, floorpicker.index, existeIndex, itemMoved.quantity);
        } else {
          props.setMovement(bin, floor, itemIndex, newQty, binpicker.index, floorpicker.index, itemMoved);
        }

        props.resetpicker('');
      } else {
        setOpenPicker(true);
        props.resetpicker('');
      }
    } else {
      setOpen(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
    }
  };

  const handlePicker = () => {
    setShowPikcer(true);
  };
  const ClosePicker = () => {
    setShowPikcer(false);
  };

  useEffect(() => {
    setShowPikcer(false);
  }, [floorpicker]);

  return (
    <div className='movementProcess__container'>
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
          MOVIMIENTO EXITOSO!!
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
      <Collapse in={openPicker} className={classes.root} timeout='auto'>
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
          DEBES SELECCIONAR DESTINO BIN Y FLOOR!!!
        </Alert>
      </Collapse>
      <div className='movement_title'>Movement From</div>
      <div className='movement_title'>{`Bin: ${binlist[bin].name} - Floor: ${floorlist[floor].name}`}</div>
      <div className='movement_name'>{name}</div>
      <div className='movement_code'>{codes[2]}</div>
      <hr className='line_solid' />
      <button className='movement_form_button-picker' onClick={handlePicker} type='button'>Select Bin</button>
      <hr className='line_solid' />
      <div className='movement_title'>Movement To</div>
      <div className='movement_title'>{`Bin: ${binpicker.name} - Floor: ${floorpicker.name}`}</div>
      <form className='movementProcess__form' onSubmit={handleSubmit}>
        <input onKeyPress={handleEnterKey} className='movement_form-input' onChange={handleScanValue} value={scanvalue} type='text' placeholder='Qty...' />
        <button className='movement_form_button-make' type='button' onClick={handleMovement}>Make Movement</button>
      </form>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={showPicker}
        onClose={ClosePicker}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showPicker}>
          <div className='div-absolute-top'>
            <BinPicker />
            <FloorPicker />
          </div>
        </Fade>
      </Modal>

      {/* <Snackbar open={openSuccess} autoHideDuration={1000} onClose={handleClose} anchorOrigin={{ vertical: 'center', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity='success'>
          MOVIMIENTO EXITOSO!!
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
  setMovement,
  resetpicker,
  setMovementExiste,
};

const mapStateToProps = (state) => {
  return {
    binindex: state.binindex,
    floorindex: state.floorindex,
    inventario: state.inventario,
    binpicker: state.binpicker,
    floorpicker: state.floorpicker,
    binlist: state.binlist,
    floorlist: state.floorlist,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movement);
