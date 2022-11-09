import React ,{useState,useEffect}from 'react';
import  styled  from 'styled-components';
import {Link} from 'react-router-dom'
import {SearchOutlined}  from "@ant-design/icons"
import '../font/fontstyle.css';
import { firestore } from '../firebase.js'
import Postlistfrom from './Postlist';
const Template  = styled.div`
    width : 1300px;
    height : 1200px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
    font-family: 'HallymGothic-Regular';
`
const Writeform = styled.div`
    display : flex; 
    margin : 30px;
    justify-content: space-between;
    font-size : 20px;
`
const Search = styled.div`
    width : 400px;
    background-color : #D9D9D9;
    border : 1px solid black;
    border-radius : 30px;
    text-align : center;
    padding-top : 10px; 
    margin-top : 10px;
    
`
const SearchInput = styled.input`
    width : 300px;
    height : 30px;
    margin-right : 10px;
    border-radius : 30px;
    border : 0px;   
    `
const Write = styled.div`
    cursor : pointer;
    font-size : 30px;
`
const Communityform = () => {
    const [Postlist, setPostList] = useState([]);
    const user= [];
    useEffect(()=>{
        setTimeout(()=>{
    const db = firestore.collection("게시글");
    db.get().then((result)=>{
        result.forEach((allDoc)=>{
            user.push(allDoc.data())
        })
    })
},500)
},[])
useEffect(()=>{
    setTimeout(()=>{
    user.map((element)=>(
        setPostList((Postlist)=> [
            ...Postlist,
            {name:element.작성자, title:element.제목, content:element.내용}
        ])))
    },1000)
})
console.log(Postlist)
    return (
        <Template>
            <Writeform>
                <Link to="/Community/Write" style={{ textDecoration:"none",color:"black"}}><Write>글쓰기</Write></Link>
                <Search>
                <SearchInput type="text" /><span><SearchOutlined /> 검색</span>
                </Search>
            </Writeform>
            <div>
                <ul>
                    {Postlist.map((element,index) => (                     
                        <Postlistfrom
                            key={index}
                            name={element.name}
                            title={element.title}
                            content={element.content}
                />
              ))
              }
              
                </ul>
            </div>
        </Template>
    );
};

export default Communityform;