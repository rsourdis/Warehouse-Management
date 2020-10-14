import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ManualPicking from './ManualPicking';
import Movement from './Movement';

import '../assets/styles/components/SearchCard.scss';

const SearchCard = (props) => {
  const { idInventory, name, quantity, codes, img, bin, floor, itemIndex, inventario, binlist, floorlist } = props;
  const [openManual, setOpenManual] = useState(false);
  const [openMovement, setOpenMovement] = useState(false);

  const handleOpenManual = () => {
    setOpenManual(!openManual);
    setOpenMovement(false);
  };
  const handleOpenMovement = () => {
    setOpenMovement(!openMovement);
    setOpenManual(false);
  };

  useEffect(() => {
  }, [inventario]);

  return (
    <>
      <div className='searchCard__container'>
        <img className='searchCard__img' src={img} alt='Foto-Producto' />
        <div className='searchCard__container-details'>
          <div className='displayflex-column-center-flexstart'>
            <div className='searchCard__list-provider'>{name}</div>
            <div className='searchCard__container-details-qtycode'>
              <div className='searchCard__list-qty'>{`Qty: ${quantity}`}</div>
              <div className='searchCard__list-qty'>
                Bin:
                {binlist[bin].name}
              </div>
              <div className='searchCard__list-qty'>
                Floor:
                {floorlist[floor].name}
              </div>
            </div>
            <div className='searchCard__list-code'>{`${codes[2]} - ${codes[1]}`}</div>
          </div>
          <div className='displayflex-row-center'>
            {openMovement ? <button className='searchCard__list-button-red' type='button' onClick={handleOpenMovement}>Move</button> :
            <button className='searchCard__list-button' type='button' onClick={handleOpenMovement}>Move</button>}
            {openManual ? <button className='searchCard__list-button-red' type='button' onClick={handleOpenManual}>Pick</button> :
            <button className='searchCard__list-button' type='button' onClick={handleOpenManual}>Pick</button>}
          </div>
        </div>
      </div>
      <div>
        { openMovement ? <Movement name={name} idInventory={idInventory} codes={codes} img={img} bin={bin} itemIndex={itemIndex} floor={floor} QtyActual={quantity} /> : () => {}}
        { openManual ? <ManualPicking name={name} id={idInventory} codes={codes} bin={bin} floor={floor} itemIndex={itemIndex} QtyActual={quantity} /> : () => {}}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    inventario: state.inventario,
    binlist: state.binlist,
    floorlist: state.floorlist,
  };
};

export default connect(mapStateToProps, null)(SearchCard);
