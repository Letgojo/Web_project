import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase.js'
import '../font/fontstyle.css';
import BusTable from './BusTable.jsx';
const Template  = styled.div`
    width : 900px;
    max-height : 100%
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
    font-family: 'HallymGothic-Regular'; 
       
`
const Transportationfrom = styled.div`
    margin : 40px 70px;
`
// const Transportationth = styled.th`
//     width : 150px;
//     margin-top : 20px;
// `
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





const TripPlanYes2 = () => {

    var user = [];
    const [Bus,setBus]= useState([]);
    let sessionStorage = window.sessionStorage;
    if(sessionStorage.getItem("출발지역")==="대구광역시 중구"||"대구광역시 북구"||"대구광역시 서구"||"대구광역시 달서구"){
        if(sessionStorage.getItem("도착지역")==="부산광역시 금정구"||"부산광역시 해운대구"){
            const db = firestore.collection("고속버스시간표2").doc(sessionStorage.getItem("출발날짜")).collection("출발지").doc("동대구고속버스터미널").collection("도착지")
            db.doc("부산고속버스터미널").collection("출발시간").get().then((result)=>{
                result.forEach((allDoc)=>{
                    user.push(allDoc.data())
                })
        })
    }}
    useEffect(()=>{
        setTimeout(()=>{
            user.map((element)=>(
            setBus((Bus)=>[
                ...Bus,
                {Rating:element.등급,StartTime:element.출발시간,finishTime:element.도착시간,money:element.성인요금,timetaken:element.소요시간,name:element.고속사,start:element.출발지,finish:element.도착지,startw:element.출발지위도,starty:element.출발지경도,finishw:element.도착지위도,finishy:element.도착지경도},
            ])
            ))
        },1000)
    },[])
    return (
        <Template>
            <Transportationfrom>
            <input type="radio" name='check'/>기차 <input type="radio" name='check' />버스
            {Bus.map((element,index)=>(
                <BusTable
                    key={index}
                    Rating={element.Rating}
                    StartTime={element.StartTime}
                    FinishTime={element.finishTime}
                    money={element.money}
                    timetaken={element.timetaken}
                    name={element.name}
                    start={element.start}
                    finish={element.finish}
                    startw={element.startw}
                    starty={element.starty}
                    finishw={element.finishw}
                    finishy={element.finishy}
                />
            ))}
            
            </Transportationfrom>
            <Next><Link to="/TripPlan4" style={{textDecoration:"none",color:"black"}}>Next</Link></Next>
        </Template>
    );
};

export default TripPlanYes2;