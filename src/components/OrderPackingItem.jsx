import React, { useState } from "react";
import { connect } from "react-redux";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";
import TvCover from "../assets/static/TV-Cover-3032-Black.jpg";
import Success from "../assets/static/success.wav";
import ErrorAlert from "../assets/static/error.wav";
import "../assets/styles/components/OrderPackingItem.scss";

const SIZE = "40px";

const OrderPackingItem = (props) => {
  const [picked, setPicked] = useState(false);
  const [qtyOrder, setQtyOrder] = useState("");

  const successAudio = new Audio(Success);
  const errorAudio = new Audio(ErrorAlert);

  const handleQtyOrder = (e) => {
    setQtyOrder(e.target.value);
  };

  const hanldeSubmit = (event) => {
    event.preventDefault();
    if (Number(qtyOrder) > 0) {
      successAudio.play();
      setPicked(true);
    } else {
      errorAudio.play();
    }
  };

  return (
    <div className='orderPackingItem__container'>
      {picked === true ? (
        <AiFillCheckCircle className='picking__icon-green' size={SIZE} />
      ) : (
        <AiOutlineCheckCircle className='picking__icon-red' size={SIZE} />
      )}
      <div className='OrderPackingItem_container-img'>
        <img
          className='orderPackingItem__img'
          src={TvCover}
          alt='Foto-Producto'
        />
      </div>
      <div className='orderPackingItem_container-details'>
        <div className='orderPackingItem__item'>
          KHOMO GEAR - TV Cover Black 46-48
        </div>
        <div className='orderPackingItem__SKU'>GER-1043 - 736983029058</div>
        {picked ? (
          () => {}
        ) : (
          <form className='orderPackingItem__form' onSubmit={hanldeSubmit}>
            <input
              onChange={handleQtyOrder}
              value={qtyOrder}
              className='orderPackingItem__form-input'
              type='text'
              placeholder='Product Barcode...'
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default connect(null, null)(OrderPackingItem);
