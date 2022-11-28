import React,{useEffect}from 'react';
import styled from 'styled-components';
import { useParams,useLocation } from "react-router"
import Postlist from './Postlist';
import { useState } from 'react';
import User from '../img/user.png'
import chat from '../img/chat.png'
import { firestore } from '../firebase.js'
import CommentsList from './CommentsList';
import heartimg from '../img/heart.png'
import binheartimg from '../img/binheart.png'
const Template  = styled.div`
    width : 1300px;
    max-height : 100%;
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
    width : 1200px;
`
const SectionHeader = styled.div`
    font-size: 25px;
    margin-bottom : 50px;
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
const ChatImg = styled.img`
    margin-left : 70px;
    width:30px;
    height : 30px;
`
const Heartimg = styled.img`
    margin-left : 10px;
    width : 35px;
    height : 35px;
`
const ChatText = styled.span`
    font-size : 25px;
    margin-left : 10px
`
const Contentdiv = styled.div`
    display : flex;
`
const CommunityDetail =  () => {
    const [PostList , setPostList] = useState([]);
    const [heart ,setheart] =useState(false)
    const [count , setCount]=useState("0")
    const location = useLocation();
    const State = location.state
    const handleheart = (e) => { 
        setheart((heart)=> !heart)
        const db = firestore.collection("게시글")
        if(heart===true){
        db.doc(State.id).update({좋아요 : +1})
        console.log("향상")
    }
        else if(heart===false){
            db.doc(State.id).update({좋아요 : -1})
            console.log("나락")
        }
    }
    let user = [];
    try {
    setTimeout(async()=>{
    const db = firestore.collection("게시글").doc(State.id).collection("댓글");
    await db.get().then((result)=>{
        result.forEach((allDoc)=>{
            user.push(allDoc.data())
        })
    })
    setCount(user.length)
},100)
    }
    catch{
        console.log("error")
    }
    useEffect(()=>{
        setTimeout(()=>{
        user.map((element,index)=>(
            setPostList((Postlist)=> [
                ...Postlist,
                {name : element.작성자, content : element.내용, count : element.번호},
            ])))
        },1000)
    },[Postlist])
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
            <SectionHeader>{State.title}</SectionHeader>
            <SectionMain>   {State.content}</SectionMain>
            <Sectionimg src={State.Url} alt="사진" />
            </SectionDiv>
            <br />
            <br />
            <Contentdiv><ChatImg src={chat} alt="챗"/><ChatText>{count}</ChatText><div onClick={handleheart}>{heart ? <Heartimg src={binheartimg} alt="하트"/>: <Heartimg src={heartimg} alt="하트" />} </div></Contentdiv>
            <hr />
            <Comments><CommentInput type="text" placeholder='댓글을 입력하세요' id='com'/><CommentSpan onClick={Upload}>등록</CommentSpan></Comments>
            <Commentlist>
                <ul>
                    {PostList.map((element,index)=>(
                        <CommentsList
                            key={index}
                            id={element.count}
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