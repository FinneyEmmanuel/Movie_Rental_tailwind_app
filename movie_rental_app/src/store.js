import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./resources/genre/genreSlice";
import customerReducer from "./resources/customer/customerSlice";

export const store = configureStore({
  reducer: {
    genreReducer,
    customerReducer,
  },
});
