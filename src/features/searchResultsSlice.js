import { createSlice } from '@reduxjs/toolkit';

export const searchResultsSlice = createSlice({
    name: 'searchResultsSlice',
    initialState: {
        searchResults: []
    },
    reducers: {
        addSearchResults(state, action) {
            state.searchResults.push(action.payload);
        }
    }
});

export const selectSearchResults = state => {
    return state.searchResults.searchResults;
}
export const { addSearchResults } = searchResultsSlice.actions;