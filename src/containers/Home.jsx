import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import FloorLayout from '../components/FloorLayout';
import { cargarInventario } from '../actions';
import Loader from '../components/Loader';
import Search from '../components/Search';
import SearchCard from '../components/SearchCard';
import Login from './Login';
import '../assets/styles/App.scss';

const Home = (props) => {

  const { inventario, searching, isSearching, user } = props;

  useEffect(() => {
    // props.cargarInventario();
  }, []);

  return (
    <>

      {(user.password) ? (
        <div>
          <Search />

          {isSearching === true && (
            searching.length > 0 ? (
              <div>
                {searching.map((bin, binIndex) => bin.map((floor, floorIndex) => floor.map((item, itemIndex) => (item.quantity === 0 ? () => { } : (
                  <SearchCard
                    key={binIndex + floorIndex + itemIndex}
                    {...item}
                    bin={binIndex}
                    floor={floorIndex}
                    itemIndex={itemIndex}
                  />
                )))))}
              </div>
            ) :
              (
                <>
                  <h2 className='alert-message'>No se encuentran resultados...</h2>
                </>
              )
          )}
          <h1 className='titulo__principal'>Electrostore Layout</h1>
          {inventario.length > 0 ? <FloorLayout /> : <Loader />}
        </div>
      ) : <Login />}

    </>
  );
};

const mapDispatchToProps = {
  cargarInventario,
};

const mapStateToProps = (state) => {
  return {
    inventario: state.inventario,
    searching: state.searching,
    isSearching: state.isSearching,
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
