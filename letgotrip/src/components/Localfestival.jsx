import React,{ useState } from 'react';
import styled from 'styled-components'
import Calender from 'react-calendar'
import {CalendarOutlined ,SearchOutlined} from "@ant-design/icons"
import { firestore } from '../firebase';
import PostListmap from './PostListmap';
const Template  = styled.div`
    width : 1300px;
    height : 3000px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
`
const Period  = styled.div`
    display : flex;
    width : 470px;
    height : 42px; 
    border : 1px solid black;
    border-radius: 30px;    
    margin : 30px 0 0 750px;
    padding-left : 40px;    
`
const Periodform = styled.div`
    margin-top: 7x;
    font-size:20px;
`
const PLDay = styled.input`
    margin-left : 10px;
    widht : 98px;
    height :27px; 
    border-radius : 30px;
    margin-top : 8px; 
`
const Local =  styled.div`
    border : 1px solid black;
    width : 450px;
    height : 42px;
    border-radius : 30px;
    margin : 20px 0 0 750px;
    padding-left : 40px; 
`
const Localform = styled.div`
    margin-top : 6px;
    font-size : 20px;
    display : flex;
`
const City = styled.select`
    margin  : 0 10px;
    width : 120px;
    height : 28px;
    border-radius : 30px; 
    text-align : center;  
`
const SearchCity = styled.input`
    width :177px;
    height : 28px;
    border-radius: 30px;
`
const FestivalContent = styled.div`
    margin : 30px 0px 0px 60px;
`
const Search = styled.div`
    cursor : pointer;   
`
const Localfestival = () => {
    const preson = [];
    const [value, onChange] = useState(new Date());
    const [postList, setPostList] = useState([]);
    const FirstDay = () => { 
        
    }


    const SearchContent = ()=> {
    const City = document.getElementById("City").value
    const db = firestore.collection("축제").doc("지역축제");
    db.collection(City).get().then((결과)=>{
    결과.forEach((doc) => {
         let result = doc.data();
         preson.push(result);
        });    
    });
    preson.map((element)=>(
    setPostList((postList) => [
        ...postList,
        { id: 4, title: element.축제이름, content : element.축제소개, state: element.장소 },
    ])));
    // setPostList = preson.map((element)=>([
    //     {name : element.축제이름 , content : element.축제소개 , state : element.장소 }
    // ]))
};
    return (
        <Template>
            <Period>
                <Periodform>
                기간 검색 <PLDay type="text" id='firstDay'/>  <CalendarOutlined onClick={FirstDay} style={{cursor:"pointer"}}/><span> ~ </span> <PLDay type="text" id='LastDay' /><CalendarOutlined  style={{cursor:"pointer"}}/>
                </Periodform>
            </Period>

            <Calender onChange={onChange} value={value} />

            <Local>
                <Localform>
                <span>지역</span>
                <City name="City" id="City">
                    <option value="대구광역시">대구광역시</option>
                    <option value="경상북도">경상북도</option>
                    <option value="경상남도">경상남도</option>
                    <option value="부산광역시">부산광역시</option>
                </City>
                <span>검색</span> <SearchCity type="text" /><Search onClick={SearchContent}><SearchOutlined /></Search> 
                </Localform>
            </Local>
            <FestivalContent>
                <div>
                    <ul>
                        {postList.map((element) => (
                    <PostListmap
                        key={element.id}
                        title={element.title}
                        content={element.content}
                        state={element.state}
                />
              ))}
                    </ul>
                </div>
            </FestivalContent>
        </Template>
    );
};

export default Localfestival;