import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearchResults } from '../features/searchResultsSlice';
import Post from '../components/Post';

const PostList = () => {
    const searchResults = useSelector(selectSearchResults)

    return (
        <div classname="postlist">
            {
                searchResults.map(result => {
                    return (
                        <Post />
                    );
                })
            }
        </div>
    )
};

export default PostList