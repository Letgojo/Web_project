import React from 'react';
import styled from 'styled-components';
import { useParams,useLocation } from "react-router"
import Postlist from './Postlist';
import { useState } from 'react';

const Template  = styled.div`
    width : 1300px;
    height : 1200px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
    font-family: 'HallymGothic-Regular';
`
const CommunityDetail = () => {
    const [PostList , setPostList] = useState([]);
    const {id} = useParams();
    const location = useLocation();
    const State = location.state
    const user = [] ;
    user.push(State[0])
    console.log(user[0].Url)
    // State.map((element)=>
    //     setPostList((PostList)=>[
    //         ...PostList,
    //         {name:element.작성자, title:element.제목, content:element.내용 ,Url:element.이미지URL ,upload:element.업로드날짜}
    //     ])
    // )
    return (
        <Template>
            <div>{user[0].name}</div>
            <br />
            <br />
            <div>{user[0].title}</div>
            <img src={user[0].Url} alt="사진" />
        </Template>
    );
};

export default CommunityDetail;