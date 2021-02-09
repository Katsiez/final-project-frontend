import { RandomPrice } from 'helpers/RandomPrice';
import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import styled from 'styled-components/macro';

const Book = styled.article`
  width: 250px;
  margin: 20px;
`
const BookImg = styled.img`
  width: 100%;
`
export const BookCard = ({ book }) => {
  return (
    <Book>
      <BrowserRouter>
      <Link to={`/cart/${book._id}/add`} key={book.title}>
        <BookImg src={book.imageUrl} aria-label={book.title}></BookImg>
        <div>
          <p>{book.title}</p>
          <p><RandomPrice/>-</p>
        </div>
      </Link>
      </BrowserRouter>
    </Book>
  )
}