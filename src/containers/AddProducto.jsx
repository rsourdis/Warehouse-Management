import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { agregarProducto } from '../actions';

import '../assets/styles/App.scss';

const useStyles = makeStyles((theme) => ({
  textField: {
    margin: '20px 0px',
    width: '100%',
    '& label.Mui-focused': {
      color: '#7651A1',
    },
  },
}));

const AddProducto = (props) => {

  const classes = useStyles();
  const [nuevoProducto, setnuevoProducto] = useState({
    name: '',
    asin: '',
    upc: '',
    quantity: 0,
  });

  const handleInput = (event) => {
    setnuevoProducto({
      ...nuevoProducto,
      [event.target.name]: event.target.value,
    });
  };
  const handleQty = (event) => {
    setnuevoProducto({
      ...nuevoProducto,
      [event.target.name]: Number(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Link to='/'>
        Lista de Productos
      </Link>
      <form action='' onSubmit={handleSubmit}>
        <TextField
          name='name'
          className={classes.textField}
          label='name'
          variant='outlined'
          onChange={handleInput}
        />
        <TextField
          name='asin'
          className={classes.textField}
          label='asin'
          variant='outlined'
          onChange={handleInput}
        />
        <TextField
          name='upc'
          className={classes.textField}
          label='upc'
          variant='outlined'
          onChange={handleInput}
        />
        <TextField
          name='quantity'
          className={classes.textField}
          label='quantity'
          variant='outlined'
          onChange={handleQty}
        />
        <button type='button' onClick={handleAgregarServicio}>Agregar Producto</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  agregarProducto,
};

const mapStateToProps = (state) => {
  return {
    productos: state.productos,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProducto);
