import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import '../font/fontstyle.css';
import trash from '../img/bin.png'
import { firestore } from '../firebase.js'
import { useNavigate } from 'react-router-dom';
import Chat from '../img/chat.png'
const ListForm = styled.div`
    display : flex;
    width : 1110px;
    height : 352px;
    margin-bottom : 30px;
    font-family: 'HallymGothic-Regular';
    border : 1px solid black;
    margin-left:8px
    font-size: 20px;
    cursor: pointer;
    margin-left : 50px;
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
    width: 700px;
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
    margin-top : 25px;
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
            <div>{title}</div>
            <div>{upload}<TrashImage onClick={handleDel} src={trash} alt="휴지통" /></div>
            </TitleText>
            <Contentform>
            <CommunityContent style={{fontSize:17,marginTop:40}}>
            {content.substring(0,200)}
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