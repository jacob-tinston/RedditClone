import { configureStore } from "@reduxjs/toolkit";
import { searchBarSlice } from '../features/searchBarSlice';
import { searchResultsSlice } from '../features/searchResultsSlice';

const searchBarReducer = searchBarSlice.reducer;
const searchResultsReducer = searchResultsSlice.reducer;

export default configureStore({
    reducer: {
      searchTerm: searchBarReducer,
      searchResults: searchResultsReducer
    },
  });