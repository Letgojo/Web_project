import React from 'react';
import styled from 'styled-components';
import '../font/fontstyle.css';

const Template1 = styled.div`
    display:flex;
    font-family: 'HallymGothic-Regular';
    margin-top:40px;
    border-bottom:1px solid black;
    width:1100px;
`
const Festival = styled.img`
    width : 154px;
    height : 177px;
    margin-right : 40px;
`
const PostConcent = styled.div`
    width : 900px;
    height : 230px;
`
const PostListmap = ({url,title,content,state,first,finish}) => {
    return (
        <>
        <Template1>
        <Festival src={url} alt="" />
        <PostConcent>
            <span>제목 : {title}</span>
            <br /><br />
            <span>본문 : {content.substring(0,200)+"..."}</span>
            <br /><br />
            <span>장소 : {state}</span>
            <br /><br />
            <span>날짜 : {first} ~ {finish}</span>
        </PostConcent>
        </Template1>
        </>
    );
};

export default React.memo(PostListmap);