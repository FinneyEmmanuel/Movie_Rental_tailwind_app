import { createSlice } from "@reduxjs/toolkit";
import { getGenres } from "../../Service/genre";

const initialState = {
  genres: getGenres(),
};

export const genreSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    deleteGenre: (state, action) => {
      const index = state.genres.findIndex((g) => g._id === action.payload);
      state.genres.splice(index, 1);
    },
  },
});

export const { deleteGenre } = genreSlice.actions;
export default genreSlice.reducer;
