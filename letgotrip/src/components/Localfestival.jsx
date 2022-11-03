import React,{ useEffect,useState } from 'react';
import styled from 'styled-components'
import Calender from 'react-calendar'
import moment from 'moment'
import {SearchOutlined,CalendarOutlined} from "@ant-design/icons"
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
    position:relative;
    display : flex;
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
const CalenderTamplate = styled.div`
    width : 350px;
    height : 258px;
    border : 1px solid black;
    background-color : white;
    margin-top : 10px;
    z-index : 1;
    display : content;
`
const Localfestival = () => {
    const preson = [];
    const [value, onChange] = useState(new Date());
    const [values, onChanges] = useState(new Date());
    const [postList, setPostList] = useState([]);
    const [CalendarOn1 , setCalendar1] = useState(false)
    const toggleCalendar = () => {
        setCalendar1((CalendarOn1) => !CalendarOn1);console.log(CalendarOn1)
      };
    const [CalendarOn2 , setCalendar2] = useState(false)
    const toggleCalendar2 = () => {
        setCalendar2((CalendarOn2) => !CalendarOn2);console.log(CalendarOn2)
      };
    const handleOnChange1 = (e) => { 
        onChange(e);console.log(value)
        setCalendar1((CalendarOn1)=> !CalendarOn1);
    }
    const handleOnChange2 = (e) => { 
        onChanges(e);console.log(values)
        setCalendar2((CalendarOn2)=> !CalendarOn2);
    }
    

    useEffect(()=> { 
        setTimeout(()=>{
        console.log("랜더링됨")
    },1000)
    },[postList])
    const SearchContent = async()=> {
    setPostList([])
    try{
    const first = document.getElementById("firstDay").value
    const last = document.getElementById("LastDay").value
    const City   = document.getElementById("City").value
    
    const db =  firestore.collection("축제").doc("지역축제");
    await db.collection(City).get().then((결과)=>{
    결과.forEach((doc) => {
         let result = doc.data();
         preson.push(result);
        });    
    });
    preson.map((element)=>(
    setPostList((postList) =>[
        ...postList,
        { url:element.축제사진URL ,title: element.축제이름, content : element.축제소개, state: element.장소 },
    ])));
    
}
catch(error){
    console.log(error)
}
};
    return (
        <Template>
            <Period>
                <Periodform>
                기간 검색 <PLDay type="test" id='firstDay' value={moment(value).format("YYYY년 MM월 DD일")}/>
                <CalendarOutlined  style={{cursor:"pointer"}} onClick={toggleCalendar}/>
                {CalendarOn1 ? (
                    <CalenderTamplate>
                    <Calender onChange={onChange} value={value} onClickDay={handleOnChange1} />
                    </CalenderTamplate>
                )  : ""} 
                <span> ~ </span> 
                <PLDay type="test" id='LastDay' value={moment(values).format("YYYY년 MM월 DD일")} />
                <CalendarOutlined  style={{cursor:"pointer"}} onClick={toggleCalendar2}/>
                {CalendarOn2 ? (
                    <CalenderTamplate>
                    <Calender onChange={onChanges} value={values} onClickDay={handleOnChange2}  />
                    </CalenderTamplate>
                )  : ""} 
                </Periodform>
            </Period>
            <Local>
                <Localform>
                <span>지역</span>
                <City name="City" id="City">
                    <option value="대구광역시">대구광역시</option>
                    <option value="경상북도">경상북도</option>
                    <option value="경상남도">경상남도</option>
                    <option value="부산광역시">부산광역시</option>
                </City>
                `<span>검색</span> <SearchCity type="text" /><Search onClick={SearchContent}><SearchOutlined /></Search> 
                </Localform>
            </Local>
            <FestivalContent>
                <div>
                    <ul>
                    <hr />
                        {postList.map((element,index) => (                      
                    <PostListmap
                        key={index}
                        url={element.url}
                        title={element.title}
                        content={element.content}
                        state={element.state}
                />
              ))
              
              }
                    </ul>
                </div>
            </FestivalContent>
        </Template>
    );
};

export default Localfestival;