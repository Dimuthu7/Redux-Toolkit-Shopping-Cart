import React, { useState } from 'react';
import { FcPlus, FcMinus } from "react-icons/fc";
import { FaTrash } from "react-icons/fa";
import '../style/cart.css'
import { useDispatch } from 'react-redux';
import { cartAction } from '../redux-store/cartSlice';

export const CartItem = ({ name, quantity, total, price, id, img }) => {
  const dispatch = useDispatch();

  const fnAddQty = () => {
    dispatch(cartAction.increaseQty({
      name, 
      id, 
      price,
      img
    }));
  }

  const fnMinusQty = () => {
    dispatch(cartAction.removeFromCart(id));
  }

  const fnClearItem = () => {
    dispatch(cartAction.clearItem(id));
  }

  return (
    <>
      <div className="card rounded-3 mb-4" key={id}>
        <div className="card-body p-4">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-2 col-lg-2 col-xl-2">
              <img src={img[0]} alt={name} className="img-fluid rounded-3" />
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <p className="lead fw-normal mb-2">{name}</p>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
              <button className="btn btn-link px-2" onClick={fnMinusQty}>
                <FcMinus />
              </button>
              <span
                className="badge bg-primary text-wrap mt-1 fw-bold ms-2 me-2"
                style={{
                  height: "fit-content",
                  fontSize: "1.3rem",
                }}
              >
                {quantity}
              </span>
              <button className="btn btn-link px-2" onClick={fnAddQty}>
                <FcPlus />
              </button>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h5 className="mb-0">
                LKR {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h5>
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
              <a className="trash-icon" onClick={fnClearItem}>
                <FaTrash />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
