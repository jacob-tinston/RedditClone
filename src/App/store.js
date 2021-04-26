import { createStore } from 'redux';
import { searchBarReducer } from '../features/searchBarSlice';

export const store = createStore(searchBarReducer);