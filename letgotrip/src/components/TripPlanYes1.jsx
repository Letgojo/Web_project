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
    const Transportation = styled.div`
        background-color : white;
        margin : 50px auto;
        width : 537px;
        height : 158px; 
        display : flex;
        border-radius : 30px;
        justify-content : space-between;
        padding : 0 20px;
    `
    const Traffic = styled.img`
        height : 100px;
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
    border : 1px solid black;
    border-radius : 30px;
    background-color : white;
    margin-top : 10px;
    z-index : 1;
`
    const TripPlan_Yes1 = () => {
        const [CalendarOn1 , setCalendar1] = useState(false)
        const [value, onChange] = useState(new Date());
        const toggleCalendar = () => {
            setCalendar1((CalendarOn1) => !CalendarOn1);console.log(CalendarOn1)
          };
        return (
            <>
                <Transportation>
                    <div style={{fontSize:"30px"}}>
                    <Traffic src={Carimg} alt="자동차" style={{marginLeft :'50px'}}/>
                    </div>
                    <div style={{borderLeft :"1px solid black"}}></div>
                    <Traffic src={Trainimg} alt="기차"  style={{marginRight :'50px'}}/>
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
                        <Carlenderimg src={Calenderimg} alt="출발캘린더" />
                        <CarlenderData>
                            <span>출발</span>
                            <div style={{border : "1px solid black" , width:"150px" ,marginTop:"10px"}}></div>
                            <div></div>
                        </CarlenderData>
                    </StartorFinshDay>
                    <StartorFinshDay>
                    <Carlenderimg src={Calenderimg} alt="도착캘린더" onClick={toggleCalendar}/>
                        <CarlenderData>
                            <span>도착</span>
                            <div style={{border : "1px solid black" , width:"150px" ,marginTop:"10px"}}></div>
                            <div>
                            {CalendarOn1 ? (
                            <CalenderTamplate>
                            <Calender onChange={onChange} value={value} />
                            </CalenderTamplate>
                    )  : ""} 
                            </div>
                            <div className="text-gray-500 mt-4">{moment(value).format("YYYY년 MM월 DD일")}</div>
                        </CarlenderData>
                    </StartorFinshDay>
                    <StartorFinshDay>
                    <Carlenderimg src={Groupimg} alt="그룹" />
                    <CarlenderData>
                            <span>인원</span>
                            <div style={{border : "1px solid black" , width:"150px" ,marginTop:"10px"}}></div>
                            <div className="text-gray-500 mt-4"></div>
                        </CarlenderData>
                    </StartorFinshDay>
                    </GoDay>
                    <Next><Link to="/TripPlan/Yes2" style={{textDecoration:"none",color:"black"}}>Next</Link></Next>
                </TripPlancalrndar>
            </>
        );
    };

    export default TripPlan_Yes1;