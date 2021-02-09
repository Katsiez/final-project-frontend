import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { rating } from 'reducers/rating'
import { FaStar } from "react-icons/fa";

export const StarRating = ({book}) => {
  //const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  // const ratedItem = useSelector((store) =>
  //   store.rating.ratedBooks.find((item) => item._id === book._id))

    // const toggleRated = () => {
    //   dispatch(rating.actions.saveRated(book));
    // };
    // const toggleRemoveRated = () => {
    //   dispatch(rating.actions.removeRated(book));
    // };
  
  return (
    <>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            {/* {ratedItem ? (  */}
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              //onClick={toggleRemoveRated}
              key={star}
            />
            {/* ) : ( */}
            <FaStar
              className="star"
			  color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
			  onMouseEnter={() => setHover(ratingValue)}
        onMouseLeave={() => setHover(null)}
        //onClick={toggleRated}
            />
            {/* )} */}
          </label>
        );
      })}
    </>
  );
};
