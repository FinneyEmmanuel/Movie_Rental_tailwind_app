import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Components/Movies";
import Genres from "./Components/Genres";
import Customers from "./Components/Customers";
import Rentals from "./Components/Rentals";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Provider } from "react-redux";
import { store } from "./store";
import TestForm from "./Components/TestForm";

import "./index.css";
import App from "./App";
import Genreform from "./Components/genreForm";

import Movieform from "./Components/MovieForm";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<Movieform />} />
          <Route path="movies/new" element={<Genreform />} />
          <Route path="Genres" element={<Genres />} />
          <Route path="customers" element={<Customers />} />
          <Route path="Rentals" element={<Rentals />} />
          <Route path="Genres/:genreId" element={<Genreform />} />
          <Route path="Genres/new" element={<Genreform />} />
          <Route path="customers/:customerId" element={<TestForm />} />
          <Route path="customers/new" element={<TestForm />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  rootElement
);
