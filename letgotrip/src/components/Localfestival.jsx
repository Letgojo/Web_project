import React,{ useEffect,useState } from 'react';
import styled from 'styled-components'
import Calender from 'react-calendar'
import moment from 'moment'
import {SearchOutlined,CalendarOutlined} from "@ant-design/icons"
import { firestore } from '../firebase';
import PostListmap from './PostListmap';
import '../font/fontstyle.css';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from "date-fns"
const Template  = styled.div`
    width : 1300px;
    max-height : 100%;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
    font-family: 'HallymGothic-Regular';
    padding-bottom : 300px;
`
const Period  = styled.div`
    display : flex;
    width : 470px;
    height : 42px; 
    border : 1px solid black;
    border-radius: 30px;    
    margin : 30px 0 0 680px;
    padding-left : 40px; 
`
const Periodform = styled.div`
    margin-top: 30x;
    font-size:15spx;
    position:relative;
    display : flex;
    align-items: center;
    text-align : center;
`
const PLDay = styled.input`
    margin-left : 10px;
    margin-right : 10px;
    widht : 98px;
    height :27px; 
    border-radius : 30px;
    text-align : center;
`
const Wave = styled.span`
    margin : 0px 10px;
`
const Local =  styled.div`
    border : 1px solid black;
    width : 470px;
    height : 42px;
    border-radius : 30px;
    margin : 20px 0 0 680px;
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
    height : 24px;
    border-radius: 30px;
    margin-left: 10px;
    margin-right:10px;
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
const LengthState = styled.div`
    margin-left : 100px;
    border-bottom:1px solid black;
    width : 1100px
`
const Localfestival = () => {
    const preson = [];
    const [value, onChange] = useState(new Date());
    const [values, onChanges] = useState(new Date());
    const [postList, setPostList] = useState([]);
    const [CalendarOn1 , setCalendar1] = useState(false)
    const [finish , setfinish ]= useState(false);
    const [State , setState] = useState(0);
    const [state1, setState1] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 1),
          key: 'selection'
        }
      ]);
    const toggleCalendar = () => {
        setCalendar1((CalendarOn1) => !CalendarOn1);    
      };
    const [CalendarOn2 , setCalendar2] = useState(false)
    const toggleCalendar2 = () => {
        setCalendar2((CalendarOn2) => !CalendarOn2);
      };
    const handleOnChange1 = (e) => { 
        onChange(e);
        setCalendar1((CalendarOn1)=> !CalendarOn1);  //CalendarOn1
        setfinish(true);
    }
    const handleOnChange2 = (e) => { 
        onChanges(e);console.log(values)
        setCalendar2((CalendarOn2)=> !CalendarOn2);
    }
    const handleOnDate = (e) => { 
        if()
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
    const City = document.getElementById("City").value
    const Search = document.getElementById("search").value
    const db =  firestore.collection("축제").doc("지역축제");
    var firstmonth =first.split('-')[1]+first.split('-')[2]
    var lastmonth =last.split('-')[1]+last.split('-')[2]
    console.log(firstmonth)
    console.log(lastmonth)
    await db.collection(City).get().then((결과)=>{
    결과.forEach((doc) => {
         let result = doc.data();
         for(let i= firstmonth;i<=lastmonth;i++){
            let firstfestival = result.축제시작기간.split('.')[1]+result.축제시작기간.split('.')[2]
            let lastfestival = result.축제마감기간.split('.')[1]+result.축제마감기간.split('.')[2]
            if(i<=firstfestival && lastmonth >= lastfestival){
                if(result.축제이름.includes(Search)){
                    preson.push(result);
                }else if(Search===""){
                        preson.push(result);
                       }  
         }
        }
        });     
    });
    const set = new Set(preson);
    const arr = [...set];
    setState(arr.length)
    arr.map((element)=>(
    setPostList((postList) =>[
        ...postList,
        { url:element.축제사진URL ,title: element.축제이름, content : element.축제소개, state: element.장소,first:element.축제시작기간,finish:element.축제마감기간},
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
                기간 검색 <PLDay type="test" id='firstDay' value={moment(state1.startDate).format("YYYY-MM-DD")}/>
                <CalendarOutlined  style={{cursor:"pointer"}} onClick={toggleCalendar}/>
                {CalendarOn1 ? (
                    <CalenderTamplate>
                    <DateRange onClick={handleOnDate} editableDateInputs={true} onChange={item => setState1([item.selection])} moveRangeOnFirstSelection={false} ranges={state1}/>
                    {/* <Calender onChange={onChange} value={value} onClickDay={handleOnChange1} /> */}
                    </CalenderTamplate>
                )  : ""}
                {/* {finish ? (  
                <>
                <Wave> ~ </Wave> 
                <PLDay type="test" id='LastDay' value={moment(values).format("YYYY-MM-DD")} />
                <CalendarOutlined  style={{cursor:"pointer"}} onClick={toggleCalendar2}/>
                </>):""}
                {CalendarOn2 ? (
                    <CalenderTamplate>
                    <Calender onChange={onChanges} value={values} onClickDay={handleOnChange2}  />
                    </CalenderTamplate>
                )  : ""}  */}
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
                <span>검색</span> <SearchCity type="text" id='search' /><Search onClick={SearchContent}><SearchOutlined /></Search> 
                </Localform>
            </Local>
            <LengthState>{State}의 몇건 입니다.</LengthState>
            <FestivalContent>
                <div>
                    <ul>
                        {postList.map((element,index) => (                     
                    <PostListmap
                        key={index}
                        url={element.url}
                        title={element.title}
                        content={element.content}
                        state={element.state}
                        first={element.first}
                        finish={element.finish}
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