import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { search, selectSearchTerm } from '../features/searchBarSlice';
import { addSearchResults, removeSearchResults } from '../features/searchResultsSlice';
import store from '../App/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
    const searchTerm = useSelector(selectSearchTerm);

    useEffect(() => {
        fetchData();
    }, [])

    const handleChange = ({ target }) => {
        store.dispatch(search(target.value))
    };

    const fetchData = async (e) => {
        if(e) {
          e.preventDefault();
        }
        try {
            store.dispatch(removeSearchResults());
            const data = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}`);
            const json = await data.json();
            const response = await json.data.children;
            console.log(response);
            for(let key = 0; key <= response.length - 1; key++) {
                store.dispatch(addSearchResults(response[key].data));
            }
            if(searchTerm === 'Popular') {
                document.title = 'reddit clone';
            } else {
                document.title = `reddit clone: ${searchTerm}`;
            }
        } catch(err) {
            window.alert(`Sorry! Could not find results for '${searchTerm}', please enter a valid search term...`);
            console.log(err);
        };
    };

    return (
        <nav>
            <img src="data:image/png;base64,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" 
                 alt="logo" className="logo1"></img>
            <img src="data:image/png;base64,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"
                 alt="logo" className="logo2"></img>
            <div className="searchbar">
            <form onSubmit={fetchData}>
                <label onClick={fetchData}>{<FontAwesomeIcon icon={faSearch} />}</label>
                <input type="search" onChange={handleChange} placeholder="Search"></input>
            </form>
            </div>
            <button className="navbutton login">Log In</button>
            <button className="navbutton signup">Sign Up</button>
            <div className="account">
                {<FontAwesomeIcon icon={faUser} />}
                {<FontAwesomeIcon id="down" icon={faCaretDown} />}
            </div>
        </nav>
    );
};

export default SearchBar;