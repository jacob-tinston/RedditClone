import { configureStore } from "@reduxjs/toolkit";
import { searchBarSlice } from '../features/searchBarSlice';

const searchBarReducer = searchBarSlice.reducer;

export default configureStore({
    reducer: {
      searchTerm: searchBarReducer
    },
  });