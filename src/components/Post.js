import React from 'react';

const Post = (props) => {
    const author = props.author;
    const numComments = props.numComments;
    const downs = props.downs;
    const ups = props.ups;
    const title = props.title;
    const subreddit = props.subreddit

    return (
        <div className="post">
            <h3>{title}</h3>
            <h3>r/{subreddit}</h3>
            <h4>By: {author}</h4>
            <h4>numComments: {numComments}</h4>
            <h4>Downs: {downs}</h4>
            <h4>Ups: {ups}</h4>
        </div>
    );
};

export default Post;