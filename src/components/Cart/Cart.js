import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { CartItem } from './CartItem'
import { ui } from 'reducers/ui'
import { Link, BrowserRouter } from 'react-router-dom'

import { Subtitle } from "lib/Text"
import { Button } from "lib/Button"
import { RandomPrice } from 'helpers/RandomPrice'

import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

export const Cart = () => {

  const dispatch = useDispatch()
  const books = useSelector((store) => store.cart.items)
  const open = useSelector((store) => store.ui.openCart)
  const totalPrice = useSelector((store) => (
	store.cart.items.reduce((total, item) => (total + (<RandomPrice/> * item.quantity)), 0)
  ))
  console.log(books)

  const totalItems = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.quantity)), 0)
  ))

  return (
    <RightCart open={open}>
       <CartContent>
	   <CloseButton onClick={() => dispatch(ui.actions.closeCart())}><IconContext.Provider value={{ color: "#222"}}><FaTimes/></IconContext.Provider></CloseButton>
      <Line/>
	  <Subtitle>My books ({totalItems})</Subtitle>
	  <CartProducts>
        {books.map((book) => (
          <CartItem key={book._id} book={book} />
        ))}
		</CartProducts>
      <Line/>
      <div>
        <div>Total: {totalPrice}:-</div>
		<BrowserRouter>
		<ToShop to="/checkout" onClick={() => dispatch(ui.actions.closeCart())}>CHECKOUT</ToShop>
		</BrowserRouter>
		</div>
	  </CartContent>
    </RightCart>
  )
}


const RightCart = styled.div`
  background-color: #d6f1e9;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  width: 300px;
  overflow-y: scroll;
  padding-top: 20px;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (min-width: 667px) {
    width: 400px;
  }
`;
const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const CloseButton = styled(Button)`
  height: 30px;
  width: 30px;
  padding: 0;
  border: none;
`;

const Line = styled.div`
  border-bottom: 1px solid black;
  width: 200px;
  margin: 10px;
`;
const CartProducts = styled.ul`
  padding: 0;
`;

const ToShop = styled(Link)`
  display: flex;
  align-items: center;
  border: 1px solid black;
  height: 30px;
  font-size: 16px;
  background: transparent;
  padding: 0 20px;
  text-decoration: none;
  color: black;
  margin: 20px;
  transition: all .2s ease-in-out; 
  &:hover {
    background: #dad41e;
  }
`;

