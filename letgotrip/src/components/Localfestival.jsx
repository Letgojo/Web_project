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
    width : 520px;
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
    width : 520px;
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
    margin-top : 20em;
    z-index : 1;
    display : content;
    position : absolute;
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
        // if()
    }
    useEffect(()=> { 
        setTimeout(()=>{
        console.log("????????????")
    },1000)
    },[postList])
    const SearchContent = async()=> {
    setPostList([])
    try{
    const first = document.getElementById("firstDay").value
    const last = document.getElementById("LastDay").value
    const City = document.getElementById("City").value
    const Search = document.getElementById("search").value
    const db =  firestore.collection("??????").doc("????????????");
    var firstmonth =first.split('-')[1]+first.split('-')[2]
    var lastmonth =last.split('-')[1]+last.split('-')[2]
    console.log(firstmonth)
    console.log(lastmonth)
    await db.collection(City).get().then((??????)=>{
    ??????.forEach((doc) => {
         let result = doc.data();
         for(let i= firstmonth;i<=lastmonth;i++){
            let firstfestival = result.??????????????????.split('.')[1]+result.??????????????????.split('.')[2]
            let lastfestival = result.??????????????????.split('.')[1]+result.??????????????????.split('.')[2]
            if(i<=firstfestival && lastmonth >= lastfestival){
                if(result.????????????.includes(Search)){
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
        { url:element.????????????URL ,title: element.????????????, content : element.????????????, state: element.??????,first:element.??????????????????,finish:element.??????????????????},
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
                ?????? ?????? <PLDay type="test" id='firstDay' value={moment(value).format("YYYY-MM-DD")}/>
                <CalendarOutlined  style={{cursor:"pointer"}} onClick={toggleCalendar}/>
                {CalendarOn1 ? (
                    <CalenderTamplate>
                    {/* <DateRange onClick={handleOnDate} editableDateInputs={true} onChange={item => setState1([item.selection])} moveRangeOnFirstSelection={false} ranges={state1}/> */}
                    <Calender onChange={onChange} value={value} onClickDay={handleOnChange1} />
                    </CalenderTamplate>
                )  : ""}
                {finish ? (  
                <>
                <Wave> ~ </Wave> 
                <PLDay type="test" id='LastDay' value={moment(values).format("YYYY-MM-DD")} />
                <CalendarOutlined  style={{cursor:"pointer"}} onClick={toggleCalendar2}/>
                </>):""}
                {CalendarOn2 ? (
                    <CalenderTamplate>
                    <Calender onChange={onChanges} value={values} onClickDay={handleOnChange2}  />
                    </CalenderTamplate>
                )  : ""} 
                </Periodform>
            </Period>
            <Local>
                <Localform>
                <span>??????</span>
                <City name="City" id="City">
                    <option value="???????????????">???????????????</option>
                    <option value="????????????">????????????</option>
                    <option value="????????????">????????????</option>
                    <option value="???????????????">???????????????</option>
                </City>
                <span>??????</span> <SearchCity type="text" id='search' /><Search onClick={SearchContent}><SearchOutlined /></Search> 
                </Localform>
            </Local>
            <LengthState>{State}??? ?????? ?????????.</LengthState>
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