import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { user } from "../reducers/user";
import { fav } from "../reducers/fav";
import { cart } from "../reducers/cart"
import { ui } from "../reducers/ui"

import { HomePage } from "../pages/HomePage";

import { AllBooks } from "../pages/Books/AllBooks";
import { SingleBook } from "../pages/Books/SingleBook";
import { Bestsellers } from "../pages/Books/Bestsellers";
import { Form } from "pages/Authentication/Form";
import { Banner } from "./Banner";
import { Sidebar } from "./Sidebar/Sidebar";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
//import { ProductDetails } from "./Products/ProductDetails";
import { Cart } from './Cart/Cart'

const reducer = combineReducers({ user: user.reducer, fav: fav.reducer, cart: cart.reducer, ui: ui.reducer});
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = configureStore({ reducer, preloadedState: persistedState });
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Provider store={store}>
        <Cart/>
        {/* <ProductDetails/> */}
        <BrowserRouter>
          <Banner />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/books" exact>
              <AllBooks />
            </Route>

            <Route path="/books/id/:bookID" exact>
              <SingleBook />
            </Route>

            <Route path="/books/bestseller" exact>
              <Bestsellers />
            </Route>

            <div>
              <Form />
            </div>
          </Switch>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
};
