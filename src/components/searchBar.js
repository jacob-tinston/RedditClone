import React from 'react';
import { useSelector } from 'react-redux';
import { search, selectSearchTerm } from '../features/searchBarSlice';
import store from '../App/store'

const SearchBar = () => {
    const searchTerm = useSelector(selectSearchTerm)
    const handleChange = ({ target }) => {
        store.dispatch(search(target.value))
    }

    const fetchData = async (e) => {
        e.preventDefault();
        const data = await fetch(`https://www.reddit.com/r/${searchTerm}.json`);
        const response = await data.json();
        console.log(response.data.children);
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