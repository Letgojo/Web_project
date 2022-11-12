import React, {useState} from 'react';
import styled from 'styled-components';
import '../font/fontstyle.css';
import trash from '../img/bin.png'
import { firestore,storage } from '../firebase.js'
import { useNavigate } from 'react-router-dom';
const ListForm = styled.div`
    display : flex;
    width : 1100px;
    margin-bottom : 30px;
    font-family: 'HallymGothic-Regular';
    border : 1px solid black;
`
const ListImg = styled.div`
    width :282px;
    height : 352px;
    border : 1px solid black;
`
const Image = styled.img`
    width :282px;
    height : 352px;
    `
const ListText = styled.div`
    text-align : left;
    margin-left : 40px;
`
const TrashImage = styled.img`
    width : 20px;
    height : 30px;
    text-align : right;
    cursor : pointer;
`
const Postlist = ({Url,name,title,content}) => {
    const navigate = useNavigate();
    const handleDel = () => {
        navigate('/');
        console.log(title,"삭제되었습니다")
        const db = firestore.collection("게시글").doc(title).delete()
        return db
        
    }
    return (
        <ListForm>
            <ListImg>
                <Image src={Url} alt="사진" />
            </ListImg>
            <ListText>
            작성자 :  {name}
            <br />
            제목 : {title}
            <br />
            내용 : {content}
            </ListText>
            <TrashImage onClick={handleDel} src={trash} alt="" />
        </ListForm>
    );
};

export default Postlist;