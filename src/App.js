import React from "react"; 
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { user } from "./reducers/user";

import { HomePage } from "./pages/HomePage";

import { AllBooks } from "./pages/Books/AllBooks"
import { SingleBook } from "./pages/Books/SingleBook"
import { Bestsellers } from "./pages/Books/Bestsellers"
import { Form } from "pages/Authentication/Form";

const reducer = combineReducers({ user: user.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/books" exact>
            <AllBooks/>
          </Route>

          <Route path="/books/id/:bookID" exact>
            <SingleBook/>
          </Route>

          <Route path="/books/bestseller" exact>
            <Bestsellers/>
          </Route>
          
          <div>
            <Form/>
          </div>
          
        </Switch>
      </BrowserRouter> 
    </Provider>
    </>
  );
};
