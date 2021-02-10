import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "./CartItem";
import { ui } from "reducers/ui";
import { BrowserRouter } from "react-router-dom";

import { Subtitle } from "lib/Text";
import { Generate } from "helpers/RandomPrice";

import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

import {
  RightCart,
  CartContent,
  CloseButton,
  Line,
  CartProducts,
  ToShop,
} from "lib/CartStyling";

export const Cart = () => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.cart.items);
  const open = useSelector((store) => store.ui.openCart);
  const totalPrice = useSelector((store) =>
    store.cart.items.reduce(
      (total, item) => total + Generate() * item.quantity,
      0
    )
  );
  console.log(books);

  const totalItems = useSelector((store) =>
    store.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <RightCart open={open}>
      <CartContent>
        <CloseButton onClick={() => dispatch(ui.actions.closeCart())}>
          <IconContext.Provider value={{ color: "#222" }}>
            <FaTimes />
          </IconContext.Provider>
        </CloseButton>
        <Line />
        <Subtitle>My books ({totalItems})</Subtitle>
        <CartProducts>
          {books.map((book) => (
            <CartItem key={book._id} book={book} />
          ))}
        </CartProducts>
        <Line />
        <div>
          <div>Total: {totalPrice}€:-</div>
          <BrowserRouter>
            <ToShop
              to="/checkout"
              onClick={() => dispatch(ui.actions.closeCart())}
            >
              CHECKOUT
            </ToShop>
          </BrowserRouter>
        </div>
      </CartContent>
    </RightCart>
  );
};
