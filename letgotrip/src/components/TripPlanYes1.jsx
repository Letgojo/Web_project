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
    import Checkimg from '../img/check.png'
    import '../font/fontstyle.css';
    import '../App.css'
    const Transportation = styled.div`
        background-color : white;
        margin : 50px auto;
        width : 400px;
        height : 158px; 
        display : flex;
        border-radius : 30px;
        padding : 0 20px;
        font-family: 'twayair';
    `
    const TrafficSpan = styled.span`
        margin : 29px;
    `
    const CalendarValue = styled.div`
        margin-top : 20px;
    `
    const Trafficdiv = styled.div`
        flex-wrap: wrap;
        width : 120px; 
        margin-left : 65px;
    `
    const Traffic = styled.img`
        height : 100px;
        cursor : pointer;
        margin-left: 5px;
        margin-top : 10px;
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
        font-family: 'twayair';
    `
    const Location = styled.div`
        display : flex;
        justify-content: space-between;
    `
    const LocationStartorFinsh = styled.div`
        border : 1px solid black;
        border-radius : 30px;
        height : 110px;
        width :324px;
        text-align : center;
    `
    const LocationStart = styled.input`
        border : 0px;
        margin-top : 40px;
        font-size : 23px;
        font-family: 'twayair';
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
        width : 120px;
        height : 58px;
        border : 1px solid black;
        border-radius : 30px;
        background-color : #F4F5FB;
        font-size : 40px;
        text-align : center;
        cursor : pointer;
    `
    const CalenderTamplate = styled.div`
    width : 500px;
    height : 200px;
    background-color : white;
    position : absolute;
    z-index : 1px;
    margin-top : 5em
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
        margin-left : 30px;
        display:flex;
    `
    const Nexttext = styled.span`
        font-size:25px;
    `
    const Timetext= styled.select`
        margin-left : 15px
    `
    const Datalistform = styled.datalist`
        height : 10px;
    `
    const TripPlanYes1 = () => {
        let sessionStorage = window.sessionStorage;
        const [CalendarOn1 , setCalendar1] = useState(false)
        const [CalendarOn2 , setCalendar2] = useState(false)
        const [value, onChange3] = useState(new Date());
        const [value1, onChange1] = useState(new Date());
        const [people, setPeople] = useState(1);
        const [firstDay, setfirst] = useState(false);
        const [finish , setfinish] = useState(false);
        const [Oclock,setOclock] = useState(0);
        const [minute,setminute] = useState(0);
        const [Check, setCheck] = useState(false);
        const [Check1, setCheck1] = useState(false);
        const [Car, setCar]= useState(true);
        const [train ,settrain] = useState(true);


        
        const hendleNext =async () => { 
            try{
            await fetctData();
            console.log("성공")
        }catch{
            console.log("에러")
        }
        }
        const fetctData = async()=>{
            var StartLocation1 = document.getElementById("StartLocation").value;
            var FinishLocation = document.getElementById("FinishLocation").value;
            sessionStorage.setItem("출발날짜",moment(value).format("YYYY-MM-DD"))
            sessionStorage.setItem("도착날짜",moment(value1).format("YYYY-MM-DD"))
            sessionStorage.setItem("출발시간",Oclock)
            sessionStorage.setItem("출발지역",StartLocation1)
            sessionStorage.setItem("도착지역",FinishLocation)
            sessionStorage.setItem("인원",people)
            const tran = sessionStorage.getItem("교통수단")
            if(sessionStorage.getItem("출발날짜")===null||sessionStorage.getItem("도착날짜")===null||sessionStorage.getItem("출발지역")===null||sessionStorage.getItem("도착지역")===null){
                alert("다시 입력해주세요.")
                window.location.replace("/TripPlan/Yes1")
            }
        const textbox = {
            startday : moment(value).format("YYYY-MM-DD"),//출발날짜
            finishday : moment(value1).format("YYYY-MM-DD"),//도착날짜
            startTime : Oclock, //출발시간
            startLocation : StartLocation1, //출발지역
            finishLocation : FinishLocation, //도착지역
            people : people, // 인원
            Tran : tran, //교통수단  
        }
        fetch('http://localhost:3000/TripPlan/Yes1',{
            method : "post", //통신방법
            headers : { 
                "content-type": "application/json",
            },
            body: JSON.stringify(textbox), //textbox라는 객체를 보냄
        })
}
        console.log(value)
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
        const handleCheck = () => {
            setCar((Car) => !Car)
            setCheck((Check) => !Check);
            sessionStorage.setItem("교통수단","자차")
        }
        const handleCheck1 = () =>{
            settrain((train) => !train)
            setCheck1((Check1) => !Check1);
            sessionStorage.setItem("교통수단","대중교통")
        }
    
        return (
            <>
                <Transportation>
                    {Car ? 
                    <>
                    <Trafficdiv  onClick={handleCheck}>
                        <Traffic src={Carimg} alt="자동차"/><TrafficSpan>자차</TrafficSpan>
                        </Trafficdiv>
                        </> :<>
                        
                        {Check ? <Trafficdiv  onClick={handleCheck}>
                            <Traffic src={Checkimg} alt="선택" />
                            <TrafficSpan>자차</TrafficSpan></Trafficdiv> : "" }</>
                    }
                    {train ? 
                    <>
                    <Trafficdiv value={train} onClick={handleCheck1}>
                    <Traffic  src={Trainimg} alt="기차" style={{marginTop:"5px"}}/><TrafficSpan>대중교통</TrafficSpan></Trafficdiv>
                    </>
                    :
                        <>
                        
                        {Check1 ?  
                        <Trafficdiv value={train} onClick={handleCheck1}><Traffic src={Checkimg} alt="선택" /><TrafficSpan>대중교통</TrafficSpan></Trafficdiv> : "" }</>}   
                </Transportation>
                <TripPlancalrndar >
                    <Location>
                    <LocationStartorFinsh >
                        <LocationStart type="text"  placeholder='출발지를 입력해주세요' list='list' id='StartLocation'/><SearchOutlined style={{fontSize:"30px",cursor:"pointer"}}/>
                    </LocationStartorFinsh>
                    <ArrowRightOutlined style={{fontSize:"100px",color:"red"}}/>
                    <LocationStartorFinsh >
                    <LocationStart type="text"  placeholder='도착지를 입력해주세요' list='list'id='FinishLocation'/><SearchOutlined style={{fontSize:"30px",cursor:"pointer"}}/>
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
                            <CalendarValue id='FirstDay'>{moment(value).format("YYYY년 MM월DD일")}</CalendarValue>
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
                            <CalenderTamplate style={{marginLeft:"1em"}}>
                            <Calender onChange={onChange1} value={value1}  onClickDay={handleOnChange2}/>
                            </CalenderTamplate>
                    )  : ""} 
                            </div>
                            {finish ? (
                            <CalendarValue id='FinishDay'>{moment(value1).format("YYYY년 MM월 DD일")}</CalendarValue>
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
                        <div style={{fontSize:"20px"}}>출발시간 :</div>
                       <Timetext name="Ocolck" value={Oclock} onChange={handleTime1}>
                        {Oclocktime()}
                        </Timetext><span style={{fontSize:"20px",marginLeft:"5px"}}>시</span>
                        <Timetext name="" id="" value={minute} onChange={handleTime2}>
                        {minutetime()}
                        </Timetext><span style={{fontSize:"20px",marginLeft:"5px"}}>분</span>
                        </TimeSet>
                    </Starttime>
                    <Next  style={{fontFamily:"twayair"}}><Link to="/TripPlan3" style={{textDecoration:"none",color:"black"}} onClick={hendleNext}><Nexttext>다음</Nexttext></Link></Next>
                    </Threeline>
                </TripPlancalrndar>
                <Datalistform id="list">
                    {/* 대구광역시  */}
                    <option value="대구광역시 중구">대구광역시 중구</option>
                    <option value="대구광역시 북구">대구광역시 북구</option>
                    <option value="대구광역시 동구">대구광역시 동구</option>
                    <option value="대구광역시 남구">대구광역시 남구</option>
                    <option value="대구광역시 서구">대구광역시 서구</option>
                    <option value="대구광역시 수성구">대구광역시 수성구</option>
                    <option value="대구광역시 달서구">대구광역시 달서구</option>
                    <option value="대구광역시 달성군">대구광역시 달성군</option>
                    {/* 부산광역시  */}
                    <option value="부산광역시 중구">부산광역시 중구</option>
                    <option value="부산광역시 서구">부산광역시 서구</option>
                    <option value="부산광역시 동구">부산광역시 동구</option>
                    <option value="부산광역시 영도구">부산광역시 영도구</option>
                    <option value="부산광역시 부산진구">부산광역시 부산진구</option>
                    <option value="부산광역시 동래구">부산광역시 동래구</option>
                    <option value="부산광역시 남구">부산광역시 남구</option>
                    <option value="부산광역시 북구">부산광역시 북구</option>
                    <option value="부산광역시 해운대구">부산광역시 해운대구</option>
                    <option value="부산광역시 사하구">부산광역시 사하구</option>
                    <option value="부산광역시 금정구">부산광역시 금정구</option>
                    <option value="부산광역시 강서구">부산광역시 강서구</option>
                    <option value="부산광역시 연제구">부산광역시 연제구</option>
                    <option value="부산광역시 수영구">부산광역시 수영구</option>
                    <option value="부산광역시 사상구">부산광역시 사상구</option>
                    <option value="부산광역시 기장군">부산광역시 기장군</option>
                    {/* 울산광역시  */}
                    <option value="울산광역시 중구">울산광역시 중구</option>
                    <option value="울산광역시 남구">울산광역시 남구</option>
                    <option value="울산광역시 동구">울산광역시 동구</option>
                    <option value="울산광역시 북구">울산광역시 북구</option>
                    <option value="울산광역시 울주군">울산광역시 울주군</option>
                    {/* 경상남도 */}
                    <option value="경상남도 창원시">경상남도 창원시</option>
                    <option value="경상남도 진주시">경상남도 진주시</option>
                    <option value="경상남도 통영시">경상남도 통영시</option>
                    <option value="경상남도 사천시">경상남도 사천시</option>
                    <option value="경상남도 김해시">경상남도 김해시</option>
                    <option value="경상남도 밀양시">경상남도 밀양시</option>
                    <option value="경상남도 거제시">경상남도 거제시</option>
                    <option value="경상남도 양산시">경상남도 양산시</option>
                    <option value="경상남도 의령군">경상남도 의령군</option>
                    <option value="경상남도 함안군">경상남도 함안군</option>
                    <option value="경상남도 창녕군">경상남도 창녕군</option>
                    <option value="경상남도 고성군">경상남도 고성군</option>
                    <option value="경상남도 남해군">경상남도 남해군</option>
                    <option value="경상남도 하동군">경상남도 하동군</option>
                    <option value="경상남도 산청군">경상남도 산청군</option>
                    <option value="경상남도 함양군">경상남도 함양군</option>
                    <option value="경상남도 거창군">경상남도 거창군</option>
                    <option value="경상남도 합천군">경상남도 합천군</option>
                    {/* 경상북도 */}
                    <option value="경상북도 포항시">경상북도 포항시</option>
                    <option value="경상북도 경주시">경상북도 경주시</option>
                    <option value="경상북도 김천시">경상북도 김천시</option>
                    <option value="경상북도 안동시">경상북도 안동시</option>
                    <option value="경상북도 구미시">경상북도 구미시</option>
                    <option value="경상북도 영주시">경상북도 영주시</option>
                    <option value="경상북도 영천시">경상북도 영천시</option>
                    <option value="경상북도 상주시">경상북도 상주시</option>
                    <option value="경상북도 문경시">경상북도 문경시</option>
                    <option value="경상북도 경산시">경상북도 경산시</option>
                    <option value="경상북도 군위군">경상북도 군위군</option>
                    <option value="경상북도 의성군">경상북도 의성군</option>
                    <option value="경상북도 청송군">경상북도 청송군</option>
                    <option value="경상북도 영양군">경상북도 영양군</option>
                    <option value="경상북도 영덕군">경상북도 영덕군</option>
                    <option value="경상북도 청도군">경상북도 청도군</option>
                    <option value="경상북도 고령군">경상북도 고령군</option>
                    <option value="경상북도 성주군">경상북도 성주군</option>
                    <option value="경상북도 칠곡군">경상북도 칠곡군</option>
                    <option value="경상북도 예천군">경상북도 예천군</option>
                    <option value="경상북도 봉화군">경상북도 봉화군</option>
                    <option value="경상북도 울진군">경상북도 울진군</option>

                </Datalistform>
            </>
        );
    };

    export default TripPlanYes1;