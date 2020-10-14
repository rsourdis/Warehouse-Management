/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import LogCard from '../components/LogCard';
import Loader from '../components/Loader';
import Login from './Login';
import { cargarActions } from '../actions';

import '../assets/styles/App.scss';

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
  tableBody: {
    display: 'table-row-group',
    backgroundColor: '#DBE2EA',
  },
});

const Log = (props) => {
  const classes = useStyles();
  const { logs, user } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    // props.cargarActions();
  }, []);

  return (
    <>
      {(user.password) ? (
        <div className='margin-down'>
          <h1 className='titulo__principal'>Log</h1>
          {logs.length > 0 ? (
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label='simple table'>
                <TableBody className={classes.tableBody}>
                  {logs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((log, index) => (
                    <TableRow key={log.id}>
                      <LogCard key={log.itemCode} {...log} />
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component='div'
                count={logs.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableContainer>
          ) : <Loader />}
        </div>
      ) : <Login />}
    </>
  );
};

const mapDispatchToProps = {
  cargarActions,
};

const mapStateToProps = (state) => {
  return {
    logs: state.logs,
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Log);

