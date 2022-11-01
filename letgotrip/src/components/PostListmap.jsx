import React from 'react';
import styled from 'styled-components';

const Template1 = styled.div`
    display:flex;
`
const Festival = styled.img`
    width : 154px;
    height : 177px;
    margin-right : 40px;
`
const PostConcent = styled.div`
    width : 1500px;
    height : 300px;
`
const PostListmap = ({url,title,content,state}) => {
    return (
        <Template1>
        <Festival src={url} alt="" />
        <PostConcent>
            <span>{title}</span>
            <br /><br />
            <span>{content}</span>
            <br /><br />
            <span>{state}</span>
            <br /><br />
            <br /><br />
            <hr />  
        </PostConcent>
        </Template1>
    );
};

export default PostListmap;