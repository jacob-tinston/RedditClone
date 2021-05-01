import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faPlus, faCommentAlt, faShare, faBookmark, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const Post = (props) => {
    const author = props.author;
    let numComments = props.numComments;
    const downs = props.downs;
    const ups = props.ups;
    const title = props.title;
    const subreddit = props.subreddit

    let upsNumber = ups - downs;
    if(upsNumber < 1000) {
        upsNumber = ups - downs;
    } else if(upsNumber > 1000) {
        upsNumber = (Math.round(upsNumber/100)* 100) / 1000 + 'k';
    };

    if(numComments < 1000) {
        if (numComments === 0 || numComments < 1) {
        numComments = numComments + ' comments';
        } else {
            numComments = '1 comment';
        };
    } else if(numComments > 1000) {
        numComments = (Math.round(numComments/100)* 100) / 1000 + 'k comments';
    };

    return (
        <div className="post">
            <div className="ups-container">
                <i>{<FontAwesomeIcon id="uparrow" icon={faArrowUp} />}</i>
                <h6>{upsNumber}</h6>
                <i>{<FontAwesomeIcon id="downarrow" icon={faArrowDown} />}</i>
            </div>
            <div className="info-container">
                <div className="topbar-container">
                    <div className="topbar">
                        <a href={`https://www.reddit.com/r/${subreddit}/`} target="_blank"
                           rel="noreferrer">r/{subreddit}</a>
                        <a className="author" href={`https://www.reddit.com/user/${author}/`} 
                           target="_blank" rel="noreferrer">Posted by u/{author}</a>
                    </div>
                    <button className="join">{<FontAwesomeIcon id="plus" icon={faPlus} />} Join</button>
                </div>
                <h3>{title}</h3>
                <div className="bottombar">
                    <button className="bottom-buttons comment">{<FontAwesomeIcon id="commenticon" icon={faCommentAlt} />}{numComments}</button>
                    <button className="bottom-buttons">{<FontAwesomeIcon icon={faShare} />} Share</button>
                    <button className="bottom-buttons">{<FontAwesomeIcon icon={faBookmark} />} Save</button>
                    <button className="bottom-buttons">{<FontAwesomeIcon icon={faEllipsisH} />}</button>
                </div>
            </div>
        </div>
    );
};

export default Post;