import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ListCard from '../components/ListCard';
import Loader from '../components/Loader';
import Login from './Login';
import { cargarLists } from '../actions';
import '../assets/styles/App.scss';

const Lists = (props) => {
  const { lists, user } = props;

  useEffect(() => {
    // props.cargarLists();
  }, []);

  return (
    <>
      {(user.password) ? (
        <div>
          <h1 className='titulo__principal'>Lists</h1>
          {lists.length > 0 ? (
            lists.map((list) => (
              <ListCard
                key={list.id}
                {...list}
              />
            ))
          ) : (lists.length === 0 ?
            <h3>No Hay Listas Activas...</h3> :
            <Loader />)}

        </div>
      ) : <Login />}
    </>
  );
};

const mapDispatchToProps = {
  cargarLists,
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
    activelist: state.activelist,
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);

