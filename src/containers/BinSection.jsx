import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import { FiArrowLeftCircle } from 'react-icons/fi';
import SectionCard from '../components/SectionCard';
import { cargarInventario } from '../actions';

import '../assets/styles/App.scss';

const SIZE = '45px';

const Log = (props) => {

  const { binindex, floorindex, floorname, inventario } = props;
  const binlayoutDetail = inventario[binindex];
  const productos = inventario[binindex].floors[floorindex];
  const { name } = binlayoutDetail;

  useEffect(() => {
  }, [inventario]);

  return (
    <div className='margin-down'>
      <div className='gobackbtn-container'>
        <Link className='gobackbtn' to={`/binlayout/${name}`}>
          <FiArrowLeftCircle size={SIZE} />
        </Link>
        <div className='titulos__varios'>
          <h1 className='titulo__principal'>
            {`Bin: ${name}`}
          </h1>
          <h1 className='titulo__principal'>
            {`Floor: ${floorname}`}
          </h1>
        </div>
      </div>
      <div>
        {productos.map((item, itemIndex) => (item.quantity === 0 ? () => {} : (
          <SectionCard
            key={item.idInventory}
            {...item}
            bin={binindex}
            floor={floorindex}
            itemIndex={itemIndex}
          />
        )))}
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  cargarInventario,
};
const mapStateToProps = (state) => {
  return {
    inventario: state.inventario,
    binindex: state.binindex,
    floorindex: state.floorindex,
    floorname: state.floorname,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Log);
