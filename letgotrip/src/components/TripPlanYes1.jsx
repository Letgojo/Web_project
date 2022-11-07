    import React,{useState} from 'react';
    import styled from 'styled-components';
    import {Link} from 'react-router-dom'
    import {SearchOutlined,ArrowRightOutlined} from "@ant-design/icons"
    import Calender from 'react-calendar'
    import moment from "moment";
    import 'react-calendar/dist/Calendar.css';
    import Carimg from '../img/car.png'
    import Trainimg from '../img/train.png'
    import Calenderimg from '../img/calender.png'
    import Groupimg from '../img/group.png'
    import plusimg from '../img/plus.png'
    import minus from '../img/minus.png'
    const Transportation = styled.div`
        background-color : white;
        margin : 50px auto;
        width : 400px;
        height : 158px; 
        display : flex;
        border-radius : 30px;
        padding : 0 20px;
        
    `
    const TrafficSpan = styled.span`
        margin : 30px;
    `
    const CalendarValue = styled.div`
        margin-top : 20px;
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
    const TripPlancalrndar = styled.div`
        background-color : white;
        margin : 100px auto;
        width : 939px;
        height : 522px;
        border-radius : 30px;
        padding : 40px;
        padding-top : 70px;
    `
    const Location = styled.div`
        display : flex;
        justify-content: space-between;
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
        margin-top: 100px;
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
        margin-top: 40px;
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
    

    const TripPlan_Yes1 = () => {
        const [CalendarOn1 , setCalendar1] = useState(false)
        const [CalendarOn2 , setCalendar2] = useState(false)
        const [value, onChange3] = useState(new Date());
        const [value1, onChange1] = useState(new Date());
        const [people, setPeople] = useState(1);
        const [firstDay, setfirst] = useState(false);
        const [finish , setfinish] = useState(false);
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
        return (
            <>
                <Transportation>
                    <Trafficdiv><Traffic src={Carimg} alt="자동차"/><TrafficSpan>자차</TrafficSpan></Trafficdiv>
                    <Trafficdiv>
                    <Traffic src={Trainimg} alt="기차"/><TrafficSpan>대중교통</TrafficSpan></Trafficdiv>
                </Transportation>
                <TripPlancalrndar >
                    <Location>
                    <LocationStartorFinsh >
                        <LocationStart type="text"  placeholder='출발지를 입력해주세요'/><SearchOutlined style={{fontSize:"30px",cursor:"pointer"}}/>
                    </LocationStartorFinsh>
                    <ArrowRightOutlined style={{fontSize:"100px",color:"red"}}/>
                    <LocationStartorFinsh >
                    <LocationStart type="text"  placeholder='도착지를 입력해주세요'/><SearchOutlined style={{fontSize:"30px",cursor:"pointer"}}/>
                    </LocationStartorFinsh>
                    </Location>
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
                    <Next><Link to="/TripPlan/Yes2" style={{textDecoration:"none",color:"black"}}>Next</Link></Next>
                </TripPlancalrndar>
            </>
        );
    };

    export default TripPlan_Yes1;