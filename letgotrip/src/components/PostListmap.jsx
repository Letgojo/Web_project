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
    height : 230px;
`
const PostListmap = ({url,title,content,state}) => {
    return (
        <>
        <Template1>
        <Festival src={url} alt="" />
        <PostConcent>
            <span>제목 : {title}</span>
            <br /><br />
            <span>본문 : {content}</span>
            <br /><br />
            <span>장소 : {state}</span>
            <br /><br />
            <br /><br/>
        </PostConcent>
        </Template1>
        <hr />
        </>
    );
};

export default React.memo(PostListmap);