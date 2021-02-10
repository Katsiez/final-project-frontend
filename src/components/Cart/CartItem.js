import React from "react";
import { cart } from "reducers/cart";
import { useDispatch } from "react-redux";
import { RandomPrice } from "helpers/RandomPrice";

import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

import {
  CartProduct,
  ProductImg,
  ProductWrapper,
  RemoveButton,
  Details,
} from "lib/CartStyling";

export const CartItem = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <CartProduct>
      <ProductWrapper>
        <ProductImg src={book.imageUrl} alt={book.title} />
        <Details>
          <div>
            <p>{book.authors}</p>
            <p>{book.title}</p>
            <p>
              <RandomPrice />
            </p>
          </div>
          <RemoveButton
            type="button"
            onClick={() => dispatch(cart.actions.removeItem(book))}
          >
            <IconContext.Provider value={{ color: "#222" }}>
              <FaTimes />
            </IconContext.Provider>
          </RemoveButton>
        </Details>
      </ProductWrapper>
    </CartProduct>
  );
};
