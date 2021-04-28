import React from 'react';
import { useSelector } from 'react-redux';
import { search, selectSearchTerm } from '../features/searchBarSlice';
import { addSearchResults } from '../features/searchResultsSlice';
import store from '../App/store'

const SearchBar = () => {
    const searchTerm = useSelector(selectSearchTerm)

    const handleChange = ({ target }) => {
        store.dispatch(search(target.value))
    }

    const fetchData = async (e) => {
        e.preventDefault();
        try {
            const data = await fetch(`https://www.reddit.com/r/${searchTerm}.json`);
            const json = await data.json();
            const response = await json.data.children;
            for(let key = 0; key <= response.length - 1; key++) {
                store.dispatch(addSearchResults(response[key].data));
            }
        } catch(err) {
            window.alert(`Sorry! Could not find results for '${searchTerm}', please enter a valid search term...`);
            console.log(err);
        };
    }

    return (
        <div>
            <form onSubmit={fetchData}>
                <input type="search" onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default SearchBar;