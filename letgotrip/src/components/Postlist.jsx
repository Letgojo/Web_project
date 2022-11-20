import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import '../font/fontstyle.css';
import trash from '../img/bin.png'
import { firestore } from '../firebase.js'
import { useNavigate } from 'react-router-dom';
import Chat from '../img/chat.png'
const ListForm = styled.div`
    display : flex;
    width : 1100px;
    height : 352px;
    margin-bottom : 30px;
    font-family: 'HallymGothic-Regular';
    border : 1px solid black;
    font-size: 20px;
    cursor: pointer;
`
const ListImg = styled.div`
    width :282px;
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
const Chatdiv = styled.div`
    margin-top : 40px;
`
const Chatimg = styled.img`
    width : 20px;
    height : 20px;
`
const Contentform = styled.div`
    height: 200px;
`
const Postlist = ({id,Url,name,title,content,upload}) => {
    const [count, setCount] = useState("0")
    const navigate = useNavigate();
    const handleDel = () => {
        navigate('/');
        console.log(title,"삭제되었습니다")
        const db = firestore.collection("게시글").doc({id}).delete()
        return db
    }
const user = [];
    useEffect(()=>{
        setTimeout(async()=>{
            const db = firestore.collection("게시글").doc(`${id}`).collection("댓글")
            await db.get().then((result)=>{
                result.forEach(async (allDoc)=>{
                    user.push(allDoc.data())
                })
            })
            setCount(user.length)
            console.log(user.length)
    },500)
},[setCount])

    return (
        <>
        <ListForm>
            <ListImg>
                <Image src={Url} alt="사진" />
            </ListImg>
            <ListText>
            <TitleText>
            <div>제목 : {title}</div>
            <div>{upload}<TrashImage onClick={handleDel} src={trash} alt="휴지통" /></div>
            </TitleText>
            <Contentform>
            <CommunityContent>
            작성자 : {name}
            </CommunityContent>
            <CommunityContent>
            내용 : {content}
            </CommunityContent>
            </Contentform>
            <Chatdiv>
                <Chatimg src={Chat} alt="챗이미지" /><span>{count}</span>
            </Chatdiv>
            </ListText>
        </ListForm>

        </>
    );
};

export default Postlist;