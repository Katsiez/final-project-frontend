import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { cart } from 'reducers/cart'
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'lib/Spinner'

export const BookDetails = () => {
  const { bookID } = useParams()
  const dispatch = useDispatch()
  const [book, setBook] = useState(Object);
  const [loading, setLoading] = useState(true);

  const itemsAdded = useSelector((store) => (store.cart.items))
  const itemAdded = itemsAdded.find((item) => item._id === bookID)

  useEffect(() => {
    bookID.then(() => {
      setBook();
      setLoading(false);
    });
  }, [bookID]);

  if (loading) return <Spinner />

  return (
    <div>
      <BookContainer>
        {book.map((book) =>
          <div key={book.id}>
            <BookImg src={book.imageUrl} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.price}:-</p>
            <p>{itemAdded ? "(Added to cart)" : ""}</p>
            <button
              type="button"
              onClick={() => dispatch(cart.actions.addItem(book))}>add to cart
             </button>
            <div>
              <BookImg src={book.imageUrl} alt={book.title} />
            </div>
          </div>
        )}
      </BookContainer>
    </div>
  )
}

const BookContainer = styled.article`
  width: 500px;
  margin: 20px;
`
const BookImg = styled.img`
  width: 100%;
`
