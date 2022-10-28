import React from 'react';

const PostListmap = ({title,content,state}) => {
    return (
        <div>
            <span>{title}</span>
            <br /><br />
            <span>{content}</span>
            <br /><br />
            <span>{state}</span>
            <br /><br />
            <br /><br />
            <hr />
        </div>
    );
};

export default PostListmap;