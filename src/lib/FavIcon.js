import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fav } from "../reducers/fav";
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";

import styled from "styled-components";

export const FavIcon = ({ book }) => {
  const dispatch = useDispatch();
  const favouriteItem = useSelector((store) =>
    store.fav.favItems.find((item) => item._id === book._id)
  );
  const toggleFav = () => {
    dispatch(fav.actions.saveFav(book));
  };
  const toggleRemoveFav = () => {
    dispatch(fav.actions.removeFav(book));
  };

  return (
    <div>
      {favouriteItem ? (
        <Icon type="button" onClick={toggleRemoveFav}>
          <HiHeart color={`#a83f39`}/>
        </Icon>
      ) : (
        <Icon type="button" onClick={toggleFav}>
          <HiOutlineHeart color={`#222`}/>
        </Icon>
      )}
    </div>
  );
};

const Icon = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  outline: none;
  &:hover {
    opacity: 0.3;
  }
`;