import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./resources/genre/genreSlice";

export const store = configureStore({
  reducer: {
    genreReducer,
  },
});
