import React from 'react';
import { Navbar, NavbarBrand, NavLink } from 'reactstrap';
import { AiOutlineShoppingCart } from "react-icons/ai";
import '../style/navbar.css'
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from '../redux-store/uiSlice';

export const NavBar = () => {
  const totalCartCount = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const fnClickCart = () => {
    dispatch(uiActions.setShowCart(true));
  }

  return (
    <>
      <Navbar className="nav-bar ps-5" dark>
        <NavbarBrand href="/">Redux-cart App</NavbarBrand>
        <NavLink onClick={fnClickCart} className="text-light pe-2">
          <div className="cart">
            <span className="count">{totalCartCount}</span>
            <h3 ><AiOutlineShoppingCart /></h3>
          </div>
        </NavLink>
      </Navbar>
    </>
  );
}