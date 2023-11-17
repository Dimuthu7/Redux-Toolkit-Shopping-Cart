import React from 'react'
import { Item } from '../components/Item'
import { Items } from '../components/Items'
import { Cart } from './Cart'
import { useSelector } from "react-redux";

export const Home = () => {
  const showCart = useSelector(state => state.ui.showCart)

  return (
    <div className='home mt-2'>
        <Items/>
        {showCart && <Cart />}
    </div>
  )
}
