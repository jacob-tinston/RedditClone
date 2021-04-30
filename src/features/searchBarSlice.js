import { createSlice } from '@reduxjs/toolkit';

export const searchBarSlice = createSlice({
    name: 'searchBarSlice',
    initialState: {
        searchTerm: 'Popular'
    },
    reducers: {
        search(state, action) {
            state.searchTerm = action.payload
        }
    }
});

export const selectSearchTerm = state => {
    return state.searchTerm.searchTerm;
}
export const { search } = searchBarSlice.actions;