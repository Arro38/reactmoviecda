import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieResult: [],
  movieLiked: [],
  sortMethod: "top",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieResult: (state, { payload }) => {
      state.movieResult = payload;
    },
    addLikedMovie: (state, { payload }) => {
      state.movieLiked.push(payload);
    },
    removeLikedMovie: (state, { payload }) => {
      state.movieLiked = state.movieLiked.filter(
        (movie) => movie.id !== payload.id
      );
    },
    setSortMethod: (state, { payload }) => {
      state.sortMethod = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setMovieResult,
  addLikedMovie,
  removeLikedMovie,
  setSortMethod,
} = movieSlice.actions;

export default movieSlice.reducer;
