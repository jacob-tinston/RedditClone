import { createSlice } from '@reduxjs/toolkit';

const searchBarSlice = createSlice({
    name: 'searchTerm',
    initialState: '',
    reducers: {
        search(state, action) {
            state.searchTerm = action.payload
        }
    }
});

export const searchBarReducer = searchBarSlice.reducer;
export const { search } = searchBarSlice.actions;