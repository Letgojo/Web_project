import React,{useState,useEffect} from 'react';
import User from '../img/user.png'
import styled from 'styled-components';
import { firestore } from '../firebase.js'
import { useLocation } from 'react-router-dom';
const Template  = styled.div`
    margin-top : 15px;
    width : 600px;
`
const CommentBox = styled.div`
    display : flex;
    justify-content: space-between;
`
const UserImg = styled.img`
    width : 20px;
    height: 20px;
    margin-right : 10px;
`
const Namediv = styled.div`
    margin-left : 10px;

`
const CommentDiv = styled.div`
    margin-top : 10px;
    margin-left : 20px;

`
const Line = styled.div`
    margin-top : 20px;
    border-bottom : 1px dashed black;
`
const Delete = styled.div`
    cursor :  pointer;
`
const CommentsList = ({name,comment,id}) => {
    let sessionStorage = window.sessionStorage;
    const [DeleteOn, setDelete] = useState(false)
    const location = useLocation();
    const db = firestore.collection("게시글").doc(`${location.state.id}`).collection("댓글");
    const handleDelet = (e) => {
        return db.doc(id).delete();
        console.log(id , "삭제되었습니다")
        alert("삭제되었습니다.")
        window.location.replace(`/Community/detail/${location.state.id}`)
    }
    useEffect(()=>{ 
        if(sessionStorage.getItem('name') === name){
            setDelete(true)
        }else{
            console.log('pass')
        }
    },[])
    return (    
        <Template>
        <CommentBox>
        <Namediv><UserImg src={User} alt="" />{name}</Namediv>{DeleteOn ?<Delete onClick={handleDelet}>삭제</Delete>:" "}
        </CommentBox>
        <CommentDiv>
            {comment}
        </CommentDiv>
        <Line />
        </Template>
    );
};

export default CommentsList;