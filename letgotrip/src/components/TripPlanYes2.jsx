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
    font-family: 'twayair';
    padding-top : 40px;
    padding-bottom : 10px;
`
const Transportationfrom = styled.div`
    margin : 40px 70px;
`
// const Transportationth = styled.th`
//     width : 150px;
//     margin-top : 20px;
// `
const Next = styled.div`
width : 120px;
height : 58px;
border : 1px solid black;
border-radius : 30px;
background-color : #F4F5FB;
font-size : 40px;
text-align : center;
cursor : pointer;
margin-left : 650px;
`
const UP = styled.div`
    margin-left : 20px;
`
const DOWN = styled.div`
    margin-right : 20px;
`
const Currnetpage = styled.div`
`
const Page = styled.div`
    display : flex;
    margin-left :300px;
    font-size : 35px;
    margin-top : 20px;
`
const Nexttext = styled.span`
font-size:25px;
`


const TripPlanYes2 = () => {

    var user = [];
    const [Bus,setBus]= useState([]);
    const [page,setPage] = useState(1);
    const [subpage,setsubpage] = useState(0);
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
                {Rating:element.등급,StartTime:element.출발시간,finishTime:element.도착시간,money:element.성인요금,timetaken:element.소요시간,name:element.고속사,start:element.출발지,finish:element.도착지,startw:element.출발지위도,starty:element.출발지경도,finishw:element.도착지위도,finishy:element.도착지경도,distance:element.거리},
            ])
            ))
        },1000)
    },[])
    const handleup =()=>{
        setPage(page+1);
        setsubpage(subpage+5)
    }
    const handledown = () => { 
        setPage(page>1?page-1:page);
        setsubpage(subpage>0?subpage-5:subpage)
    }
    return (
        <Template>
            <Transportationfrom>
            {/* <input type="radio" name='check'/>기차 <input type="radio" name='check' />버스 */}
            {Bus.map((element,index)=>(
                subpage<=index&& index<5*page ?
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
                    distance={element.distance}
                />
                : " "
            ))}
            <Page>
            <DOWN  onClick={handledown}> {'<'} </DOWN>
            <Currnetpage>{page}</Currnetpage>
            <UP  onClick={handleup}> {' >'} </UP>
            </Page>
            <Next><Link to="/TripPlan4" style={{textDecoration:"none",color:"black"}}><Nexttext>다음</Nexttext></Link></Next>
            </Transportationfrom>
        </Template>
    );
};

export default TripPlanYes2;