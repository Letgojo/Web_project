import React,{useState}from 'react';
import styled from 'styled-components';
import '../font/fontstyle.css';
import Carimg from './../img/car.png'
import Trainimg from './../img/train.png'
import Calenderimg from '../img/calender.png'
import Groupimg from '../img/group.png'
import plusimg from '../img/plus.png'
import minus from '../img/minus.png'
import {SearchOutlined} from "@ant-design/icons"
import Calender from 'react-calendar'
import moment from "moment";
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

const Transportation = styled.div`
background-color : white;
margin : 50px auto;
width : 400px;
height : 300px; 
border-radius : 30px;
padding : 0 20px;
font-family: 'HallymGothic-Regular';
text-align : center;
`
const TripPlancalrndar = styled.div`
background-color : white;
margin : 100px auto;
width : 939px;
height : 522px;
border-radius : 30px;
padding : 40px;
padding-top : 70px;
display : block;
`
const Tamplate = styled.div`
    display : flex;
    margin-top : 25px;
`
const Movetime = styled.div`
    margin-top : 10px;
`
const TypeBtn = styled.div`
    width : 110px;
    height : 46px;
    border : 1px solid black;
    border-radius : 10px;
    text-align : center;
    padding-top : 10px;
    margin-right : 23px;
`
const Trafficdiv = styled.div`
flex-wrap: wrap;
width : 120px; 
margin-left : 65px;
&:hover{
    border: 1px solid red;
`
const Traffic = styled.img`
height : 100px;
cursor : pointer;
margin-left: 5px;
}   
`
const TrafficSpan = styled.span`
        margin : 29px;
    `
const LocationStartorFinsh = styled.div`
        border : 1px solid black;
        border-radius : 30px;
        height : 134px;
        width :324px;
        text-align : center;
    `
    const LocationStart = styled.input`
        border : 0px;
        margin-top : 55px;
        font-size : 23px;
    `
    const GoDay = styled.div`
    margin-top: 50px;
    display : flex;
    justify-content: space-between;
`
const StartorFinshDay = styled.div`
    width : 288px;
    height :140px;
    border : 1px solid black;
    border-radius : 30px;
    display: flex;
`
const Carlenderimg = styled.img`
    width :62px;
    height : 68px;
    margin : 30px;
    cursor : pointer;
`
const CarlenderData = styled.div`
    font-size : 20px;
    margin : 20px 0 0 0;
    z-index : 10;
    `
const Next = styled.div`
    width : 187px;
    height : 58px;
    border : 1px solid black;
    border-radius : 30px;
    background-color : #B9D6F9;
    font-size : 40px;
    text-align : center;
    cursor : pointer;
`
const CalenderTamplate = styled.div`
width : 500px;
height : 200px;
background-color : white;
margin-top : 10px;

`
const Plusbtn = styled.img`
    width : 22px;
    height : 21px;
    cursor : pointer;
    margin-right  : 10px;
`
const Minusbtn = styled.img`
    width : 22px;
    height : 21px;
    cursor : pointer;
    margin-left : 10px; 
`
const Human = styled.div`
    margin : 20px;
`
const Starttime = styled.div`
width : 288px;
height :70px;
border : 1px solid black;
border-radius : 30px;
`
const Threeline = styled.div`
    display : flex;
    justify-content: space-between;
    margin-top : 40px;
`
const TimeSet = styled.div`
    margin-top : 20px;
    margin-left : 40px;
    display:flex;
    font-size:20px;
`
const CalendarValue = styled.div`
margin-top : 20px;
`
const TimeStart = styled.div`

`
const Timetext= styled.select`
    margin-left : 15px
`
const TripPlanNo1 = () => {
    const [CalendarOn1 , setCalendar1] = useState(false)
    const [CalendarOn2 , setCalendar2] = useState(false)
    const [value, onChange3] = useState(new Date());
    const [value1, onChange1] = useState(new Date());
    const [people, setPeople] = useState(1);
    const [firstDay, setfirst] = useState(false);
    const [finish , setfinish] = useState(false);
    const [Oclock,setOclock] = useState(0);
    const [minute,setminute] = useState(0);
    const handleOnChange1 = (e) => {
        onChange3(e);console.log(value)
        setCalendar1((CalendarOn1) => !CalendarOn1);
        setfirst(true);
      };
      const handleOnChange2 = (e) => {
        onChange1(e);console.log(value1)
        setCalendar2((CalendarOn2) => !CalendarOn2);
        setfinish(true);
      };
    const handlePlus = () => { 
        setPeople(people + 1);
    }
    const handleMinus = () => {
        setPeople(people-1);
    }
    const toggleCalendar1 = () => {
        setCalendar1((CalendarOn1) => !CalendarOn1);
      };
      const toggleCalendar2 = () => {
        setCalendar2((CalendarOn2) => !CalendarOn2);
      };
    const Oclocktime = () => {
        const result = [];
        for(let i=0;i<=23;i++){
            result.push(<option value={i}>{i}</option>);
        }
        return result
    }
    const minutetime = () => {
        const result = [];
        for(let i=0;i<=31;i=i+30){
            result.push(<option value={i}>{i}</option>);
        }
        return result
    }
    const handleTime1 = (e) => {
        setOclock(e.target.value);
    };
    const handleTime2 = (e) => {
        setminute(e.target.value);
    };

    return (
        <>
        <Transportation>
            <Movetime>이동시간</Movetime>
            <Tamplate>
            <TypeBtn>1.5시간 미만</TypeBtn>
            <TypeBtn>1.5시간~3시간</TypeBtn>
            <TypeBtn>3시간 이상</TypeBtn>
            </Tamplate>
            <Tamplate>
            <Trafficdiv><Traffic src={Carimg} alt="자동차"/><TrafficSpan>자차</TrafficSpan></Trafficdiv><Trafficdiv>
            <Traffic src={Trainimg} alt="기차"/><TrafficSpan>대중교통</TrafficSpan></Trafficdiv>
            </Tamplate>
        </Transportation>
        <TripPlancalrndar>
        <LocationStartorFinsh >
                        <LocationStart type="text"  placeholder='출발지를 입력해주세요'/><SearchOutlined style={{fontSize:"30px",cursor:"pointer"}}/>
        </LocationStartorFinsh>
        <GoDay>
                    <StartorFinshDay>
                        <Carlenderimg src={Calenderimg} alt="출발캘린더" onClick={toggleCalendar1}/>
                        <CarlenderData>
                            <span>출발</span>
                            <div style={{border : "1px solid black" , width:"150px" ,marginTop:"10px"}}></div>
                            <div>
                            {CalendarOn1 ? (
                            <CalenderTamplate>
                            <Calender onChange={onChange3} value={value}onClickDay={handleOnChange1} />
                            </CalenderTamplate>
                    )  : ""} 
                            </div>
                            {firstDay ?(
                            <CalendarValue>{moment(value).format("YYYY년 MM월 DD일")}</CalendarValue>
                            )  : ""}
                        </CarlenderData>
                    </StartorFinshDay>
                    <StartorFinshDay>
                    <Carlenderimg src={Calenderimg} alt="도착캘린더" onClick={toggleCalendar2}/>
                        <CarlenderData>
                            <span>도착</span>
                            <div style={{border : "1px solid black" , width:"150px" ,marginTop:"10px"}}></div>
                            <div>
                            {CalendarOn2 ? (
                            <CalenderTamplate>
                            <Calender onChange={onChange1} value={value1}  onClickDay={handleOnChange2}/>
                            </CalenderTamplate>
                    )  : ""} 
                            </div>
                            {finish ? (
                            <CalendarValue>{moment(value1).format("YYYY년 MM월 DD일")}</CalendarValue>
                            ): ""}
                        </CarlenderData>
                    </StartorFinshDay>
                    <StartorFinshDay>
                    <Carlenderimg src={Groupimg} alt="그룹" />
                    <CarlenderData>
                            <span>인원</span>
                            <div style={{border : "1px solid black" , width:"150px" ,marginTop:"10px"}}></div>
                            <Human>
                                <Plusbtn src={plusimg} alt="플러스" onClick={handlePlus} />
                                <span style={{fontSize : "30px"}}>{people}</span>
                                <Minusbtn src={minus} alt="마이너스" onClick={handleMinus}/>
                            </Human>
                        </CarlenderData>
                    </StartorFinshDay>
                    </GoDay>
                    <Threeline>
                    <Starttime>
                        <TimeSet>
                        <TimeStart>출발시간 :</TimeStart>
                       <Timetext name="Ocolck" value={Oclock} onChange={handleTime1}>
                        {Oclocktime()}
                        </Timetext>시
                        <Timetext name="" id="" value={minute} onChange={handleTime2}>
                        {minutetime()}
                        </Timetext>분
                        </TimeSet>
                    </Starttime>
                    <Next><Link to="/TripPlan/Yes2" style={{textDecoration:"none",color:"black"}}>Next</Link></Next>
                    </Threeline>
        </TripPlancalrndar>
        </>
    );
};

export default TripPlanNo1;