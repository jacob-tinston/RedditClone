import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearchResults } from '../features/searchResultsSlice';
import Post from '../components/Post';

const PostList = () => {
    const searchResults = useSelector(selectSearchResults)

    return (
        <div className="postlist">
            {
                searchResults.map(result => {
                    return (
                        <Post 
                          author={result.author}
                          numComments={result.num_comments}
                          downs={result.downs}
                          ups={result.ups}
                          url={result.url}
                          title={result.title}
                          subreddit={result.subreddit}
                        />
                    );
                })
            }
        </div>
    )
};

export default PostList