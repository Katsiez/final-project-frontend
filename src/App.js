import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { user } from "./reducers/user";

import { HomePage } from "./pages/HomePage";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Books } from "./components/Books"
import { SingleBook } from "./components/SingleBook"

const reducer = combineReducers({ user: user.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>

      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/signup" exact>
            <SignUp />
          </Route>

          <Route path="/books" exact>
            <Books/>
          </Route>

          <Route path="/books/:bookID">
            <SingleBook/>
          </Route>
          
        </Switch>
      </BrowserRouter> 
    </Provider>
  );
};
