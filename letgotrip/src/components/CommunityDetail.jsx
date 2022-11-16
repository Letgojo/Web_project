import React,{useEffect}from 'react';
import styled from 'styled-components';
import { useParams,useLocation } from "react-router"
import Postlist from './Postlist';
import { useState } from 'react';
import User from '../img/user.png'
import { firestore } from '../firebase.js'
import CommentsList from './CommentsList';
const Template  = styled.div`
    width : 1300px;
    height : 1200px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
    font-family: 'HallymGothic-Regular';
`
const HeaderDiv = styled.div`
    display : flex;
    justify-content : space-between;
    margin : 30px 30px 0 70px;
`
const SectionDiv = styled.div`
    margin-top : 30px;
    margin-left : 70px;
`
const SectionHeader = styled.div`

`
const SectionMain = styled.div`
    margin-top : 10px;
`
const Sectionimg = styled.img`
    margin-top : 30px; 
    width :235px;
    height : 185px;
`
const Comments = styled.div`
    margin-top : 30px;
    margin-left : 70px;
    border: 1px solid black;
    width : 600px
`
const CommentSpan = styled.span`
    border-left: 1px solid black
`
const CommentInput = styled.input`
    border : 0px;
    width : 563px
`
const Commentlist = styled.div`
    margin-top : 30x;
    margin-left: 70px
`
const CommunityDetail =  () => {
    const [PostList , setPostList] = useState([]);
    const location = useLocation();
    const State = location.state
    console.log(State); 
    let user = [];

    try {
    setTimeout(async()=>{
    const db = firestore.collection("게시글").doc(State.id).collection("댓글");
    await db.get().then((result)=>{
        result.forEach((allDoc)=>{
            user.push(allDoc.data())
        })
    })
})
    }
    catch{
        console.log("error")
    }

    useEffect(()=>{
        setTimeout(()=>{
        user.map((element)=>(
            setPostList((Postlist)=> [
                ...Postlist,
                {name : element.작성자, content : element.내용},
            ])))
        },1000)
    },[])
const Upload = async () => { 
    var count =  user.length.toString();
    let sessionStorage = window.sessionStorage;
    const comment = document.getElementById('com').value
    console.log(comment)
    console.log(State.id)
    const bucket = firestore.collection("게시글").doc(State.id).collection("댓글").doc(count);
            await bucket.set({
                "번호" : count,
                "작성자" : sessionStorage.getItem("name"), 
                "내용" : comment,
            })
            console.log("업로드 성공");
}

    return (
        <Template>
            <HeaderDiv>
            <div>작성자 : {State.name}</div>
            <div>{State.upload}</div>
            </HeaderDiv>
            <SectionDiv>
            <SectionHeader>제목 : {State.title}</SectionHeader>
            <SectionMain>내용 : {State.content}</SectionMain>
            <Sectionimg src={State.Url} alt="사진" />
            </SectionDiv>
            <br />
            <br />
            <hr />
            <Comments><CommentInput type="text" placeholder='댓글을 입력하세요' id='com'/><CommentSpan onClick={Upload}>등록</CommentSpan></Comments>
            <Commentlist>
                <ul>
                    {PostList.map((element,index)=>(
                        <CommentsList
                            key={index}
                            name={element.name}
                            comment={element.content}
                        />
                    ))}
                </ul>
            </Commentlist>
        </Template>
    );
};

export default CommunityDetail;