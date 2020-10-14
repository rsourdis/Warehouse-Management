import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ManualPicking from './ManualPicking';
import Movement from './Movement';
import TVCover from '../assets/static/TV-Cover-3032-Black.jpg';

import '../assets/styles/components/SectionCard.scss';

const SectionCard = (props) => {
  const { idInventory, name, quantity, codes, img, bin, floor, itemIndex, inventario } = props;
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
      <div className='sectionCard__container'>
        <img className='sectionCard__img' src={img} alt='Foto-Producto' />
        <div className='sectionCard__container-details'>
          <div className='displayflex-column-center-flexstart'>
            <div className='sectionCard__list-provider'>{name}</div>
            <div className='sectionCard__container-details-qtycode'>
              <div className='sectionCard__list-qty'>{`Qty: ${quantity}`}</div>
              <div className='sectionCard__list-code'>{`${codes[2]} - ${codes[1]}`}</div>
            </div>
          </div>
          <div className='displayflex-row-center'>
            {openMovement ? <button className='sectionCard__list-button-red' type='button' onClick={handleOpenMovement}>Move</button> :
            <button className='sectionCard__list-button' type='button' onClick={handleOpenMovement}>Move</button>}
            {openManual ? <button className='sectionCard__list-button-red' type='button' onClick={handleOpenManual}>Pick</button> :
            <button className='sectionCard__list-button' type='button' onClick={handleOpenManual}>Pick</button>}
          </div>
        </div>
      </div>
      <div>
        { openMovement ? <Movement name={name} id={idInventory} codes={codes} img={img} bin={bin} floor={floor} itemIndex={itemIndex} QtyActual={quantity} /> : () => {}}
        { openManual ? <ManualPicking name={name} id={idInventory} codes={codes} bin={bin} floor={floor} itemIndex={itemIndex} QtyActual={quantity} /> : () => {}}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    inventario: state.inventario,
  };
};

export default connect(mapStateToProps, null)(SectionCard);
