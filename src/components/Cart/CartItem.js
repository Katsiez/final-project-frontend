import React from 'react'
import { cart } from 'reducers/cart'
import { useDispatch } from 'react-redux';
import { RandomPrice } from 'helpers/RandomPrice';
import { Button } from 'lib/Button'

import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa';
import { IconContext } from "react-icons";

const CartProduct = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

const ProductImg = styled.img`
  height: 120px;
`

const ProductWrapper = styled.div`
  padding: 10px;
  display: flex;
  background: white;
`;

const RemoveButton = styled(Button)`
  height: 30px;
  width: 30px;
  padding: 0;
  margin: 0 3px;
  border: none;
`;

const Details = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CartItem = ({ book }) => {
  const dispatch = useDispatch()
  return (
    <CartProduct>
      <ProductWrapper>
        <ProductImg
          src={book.imageUrl}
          alt={book.title}
        />
        <Details>
          <div>
            <p>{book.authors}</p>
            <p>{book.title}</p>
            <p><RandomPrice/></p>
          </div>
          <RemoveButton type="button" onClick={() => dispatch(cart.actions.removeItem(book))}><IconContext.Provider value={{ color: "#222"}}><FaTimes/></IconContext.Provider></RemoveButton>
        </Details>
      </ProductWrapper>
    </CartProduct>
  )
}

//Where is the total price?
//Why is it removing only one item as it should, but adding plus one to all?
//Even though it's adding +1 to all, it's not updating the bag quantity