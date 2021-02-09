import React from 'react'
import { cart } from 'reducers/cart'
import { useDispatch } from 'react-redux';
import { RandomPrice } from 'helpers/RandomPrice';

export const CartItem = ({ book }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <div>
	  	<p>{book.imageUrl}</p>
        <p>{book.title} by {book.authors}</p>
        <p>x{book.quantity}</p>
        <p> = {<RandomPrice/> * book.quantity}:-</p>
      </div>

      <span className="actions">
        <button type="button" onClick={() => dispatch(cart.actions.removeItem(book))}>-</button>
        <button type="button" onClick={() => dispatch(cart.actions.addItem(book))}>+</button>
      </span>
    </div>
  )
}







// import React from "react";
// import { useDispatch } from "react-redux";
// import { cart } from "reducers/cart"

// import { FaPlus } from "react-icons/fa";
// import { FaMinus } from "react-icons/fa";

// import styled from "styled-components";

// export const CartItem = ({ book }) => {
//   const dispatch = useDispatch();

//   const increaseQuantity = () => {
//     dispatch(cart.actions.addBook(book));
//   };

//   const reduceQuantity = () => {
//     dispatch(cart.actions.removeBook(book));
//   };

//   const Random = () => {
//     const precision = 100; // 2 decimals
//     const randomnum =
//       Math.floor(
//         Math.random() * (10 * precision - 1 * precision) + 1 * precision
//       ) /
//       (1 * precision);
//     return <div>{randomnum}€</div>;
//   };

//   return (
//     <CartBook>
//       <ImageWrapper>
//         <BookImage>
//           <img
//             className="book-image-all"
//             src={book.imageUrl}
//             alt={book.title}
//           />
//         </BookImage>
//       </ImageWrapper>
//       <BookInfo>
//         {" "}
//         <p className="book-title">{book.title}</p>
//         <p className="book-author">{book.authors}</p>
//         <p className="random-num">
//           <Random />
//         </p>
//         <p>
//           <div>
//             <QuantityButton type="button" onClick={increaseQuantity}>
//               <FaPlus width="15" height="20" fill="whitesmoke" />
//             </QuantityButton>
//             <span>{book.quantity}</span>
//             <QuantityButton type="button" onClick={reduceQuantity}>
//               <FaMinus width="15" height="20" fill="whitesmoke" />
//             </QuantityButton>
//           </div>
//         </p>
//       </BookInfo>
//     </CartBook>
//   );
// };

// const CartBook = styled.div`
//   background: whitesmoke;
//   display: flex;
//   flex-direction: column;
//   width: 80%;
//   margin-bottom: 20px;
//   @media (min-width: 700px) {
//     flex-direction: row;
//     height: 300px;
//     width: 40%;
//     margin-left: 20px;
//     margin-right: 20px;
//   }
//   @media (min-width: 1024px) {
//     width: 33%;
//     height: 300px;
//     margin-left: 0;
//     margin-right: 0;
//   }
//   @media (min-width: 1500px) {
//     width: 40%;
//     height: 300px;
//   }
// `;

// const ImageWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   @media (min-width: 700px) {
//     width: 50%;
//     height: 100%;
//   }
//   @media (min-width: 700px) {
//     width: 60%;
//   }
// `;

// const BookImage = styled.img`
//   width: 80%;
//   object-fit: cover;
//   @media (min-width: 700px) {
//     width: 100%;
//     height: 100%;
//   }
// `;

// const BookInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   div {
//     display: flex;
//     align-items: baseline;
//     justify-content: space-between;
//     font-size: 30px;
//   }
//   @media (min-width: 700px) {
//     align-items: baseline;
//     justify-content: center;
//     margin-left: 10px;
//   }
// `;

// const QuantityButton = styled.button`
//   background: #cdd0cb;
//   border: none;
// `;
