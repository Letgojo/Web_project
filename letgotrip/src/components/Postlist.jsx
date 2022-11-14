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
    font-size: 20px;
    cursor: pointer;
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
    margin-left : 40px;
`
const TrashImage = styled.img`
    width : 20px;
    height : 30px;
    text-align : right;
    cursor : pointer;
    margin-left :10px;
`
const TitleText = styled.div`
    margin-top : 10px;
    width : 750px;
    display : flex;
    justify-content : space-between;
`
const CommunityContent = styled.div`
    margin-top : 25px;
`
const Postlist = ({Url,name,title,content,upload}) => {
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
            <TitleText>
            <div>제목 : {title}</div>
            <div>{upload}<TrashImage onClick={handleDel} src={trash} alt="휴지통" /></div>
            </TitleText>
            <CommunityContent>
            작성자 : {name}
            </CommunityContent>
            <CommunityContent>
            내용 : {content}
            </CommunityContent>
            </ListText>

        </ListForm>
    );
};

export default Postlist;