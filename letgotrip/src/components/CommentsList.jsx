import React from 'react';
import User from '../img/user.png'
import styled from 'styled-components';
const Template  = styled.div`
    border : 1px solid black;
    width : 200px;
`
const CommentBox = styled.div`
    display : flex;
`
const UserImg = styled.img`
    width : 20px;
    height: 20px;
`
const Namediv = styled.span`
    margin-left : 10px;
`
const CommentDiv = styled.div`
    margin-top : 5px;
    margin-left : 20px;
`
const CommentsList = ({name,comment}) => {
    return (
        <Template>
        <CommentBox>
            <UserImg src={User} alt="" /><Namediv>{name}</Namediv>
        </CommentBox>
        <CommentDiv>
            {comment}
        </CommentDiv>
        </Template>
    );
};

export default CommentsList;