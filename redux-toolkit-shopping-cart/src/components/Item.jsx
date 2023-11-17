import React from "react";
import '../style/item.css'
import { useDispatch } from "react-redux";
import { cartAction } from "../redux-store/cartSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Item = ({id, name, price, img}) => {
  const dispatch = useDispatch();

  const fnAddToCart = () => {
    dispatch(cartAction.addToCart({
      name, 
      id, 
      price,
      img
    }));
  }

  return (
    <>
      <div className="card-item">
        <div className="imgBox">
          <img src={img[0]} alt={name}/>
        </div>

        <div className="contentBox">
          <h3 style={{fontSize: '1rem'}}>{name}</h3>
          <h2 className="price">
            <small>LKR {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</small>
          </h2>
          <button className="buy" onClick={fnAddToCart}>
            <b>ADD TO CART</b> <span className="ms-2" style={{fontSize: '1.3rem'}}><AiOutlineShoppingCart/> </span>
          </button>
        </div>
      </div>
    </>
  );
};
