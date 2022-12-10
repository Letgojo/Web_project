import React,{useState ,useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../font/fontstyle.css'; 
import Skiimg from '../img/category/ski.png'
import hikingimg from '../img/category/hiking.png'
import Kides from '../img/category/kids.png'
import Skater from '../img/category/skater.png'
import park from '../img/category/themepark.png'
import paragliding from '../img/category/paragliding.png'
import watersport from '../img/category/watersport.png'
import diy from '../img/category/diy.png'
import art from '../img/category/art-museum.png'
import exhibition from '../img/category/exhibition.png'
import museum from '../img/category/museum.png'
import show from '../img/category/show.png'
import americafood from '../img/category/americafood.png'
import japanfood from '../img/category/japanfood.png'
import koreafood from '../img/category/koreafood.png'
import localfood from '../img/category/localfood.png'
import chinesefood from '../img/category/chinesefood.png'

const Template  = styled.div`
    width : 1000px;
    height : 1200px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
    padding-left : 10px;
    font-family: 'twayair';

`
const MainContent = styled.div`
    display : grid;
    flex-wrap: wrap;
    margin-bottom  : 100px;
    margin-left : 0px;
    grid-template-columns : 500px 500px;
    grid-template-rows : 150px 150px;

`

const Contentdiv = styled.div`
    width : 200px;
    font-weight: bold;
    margin-left :100px;
`
const Contentspan  = styled.span`
    font-size : 13px;
    font-weight: normal;
`
const Category = styled.img`
    width : 72px;
    height : 62px;  
    margin-left :50px;
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
const Content1 = styled.div`
width : 450px;
height : 80px;
border : 1px solid black;
border-radius : 30px;
background-color : '#006FFD';
margin-left : 20px;
margin-top : 30px;
text-align: center;
padding-top : 28px;
font-size: 20px;
font-family: 'HallymGothic-Regular';
display : flex;
cursor: pointer;
:hover {
    background-color : #006FFD;
    opacity: 0.5;
}
`

//맛집
const Content3 = styled.div`
width : 450px;
height : 80px;
border : 1px solid black;
border-radius : 30px;
background-color : '#006FFD';
margin-left : 20px;
margin-top : 30px;
text-align: center;
padding-top : 28px;
font-size: 20px;
font-family: 'HallymGothic-Regular';
display : flex;
cursor: pointer;
:hover {
background-color : #006FFD;
opacity: 0.5;
}
`
const TripPlan3 = () => {
    const [color, setcolor] = useState("스키");
    const [color2, setcolor2] = useState("한식");
    let sessionStorage = window.sessionStorage;
    const hendleNext =async () => { 
        try{
        await fetctData();
        console.log("성공")
    }catch{
        console.log("에러")
    }
    }
    const fetctData = async()=>{
        const StartDay =  sessionStorage.getItem("출발날짜")
        const FinishDay = sessionStorage.getItem("도착날짜")
        const StartTime = sessionStorage.getItem("출발시간")
        const StartLocation = sessionStorage.getItem("출발지역")
        const finishLocation = sessionStorage.getItem("도착지역")
        const people = sessionStorage.getItem("인원")
        const experience = sessionStorage.getItem("관광")
        const eat = sessionStorage.getItem("음식")
        const car = sessionStorage.getItem("교통수단")
    const textbox = {
        startday : StartDay,//출발날짜
        finishday : FinishDay,//도착날짜
        startTime : StartTime, //출발시간
        startLocation : StartLocation, //출발지역
        finishLocation : finishLocation, //도착지역
        people : people,
        Experience : experience, 
        Eat: eat,
        car : car,
    }
    fetch('http://localhost:3000/TripPlan3',{
        method : "post", //통신방법
        headers : { 
            "content-type": "application/json",
        },
        body: JSON.stringify(textbox), //textbox라는 객체를 보냄
    })
    }
    const onClick = (e) => {
        const {
        currentTarget: { id },
        } = e;
        sessionStorage.setItem("관광",id)
        setcolor(id);
};
    const onClick2 = (e) => {
        const {
        currentTarget: { id },
        } = e;
        sessionStorage.setItem("음식",id)
        setcolor2(id);
    };
// useEffect(() => {
//     const allBtnArr = ["스키", "등산", "키즈",'실내스포츠','테마파크','실외스포츠','수상레포츠','공예/DIY', '박물관','미술관','전시회','공연'];
//     const nonTargetedBtnArr = allBtnArr.filter((item) => item !== color);
//     document.getElementById(color).style.backgroundColor = "#006FFD";
//     nonTargetedBtnArr.map((item) => {
//     document.getElementById(item).style.backgroundColor = "#E7E7E7";
//     return null;
//     });
// }, [color]);

useEffect(() => {
    const allBtnArr3 = ['한식','중식','양식','지역음식'];
    const nonTargetedBtnArr2 = allBtnArr3.filter((item2) => item2 !== color2);
    document.getElementById(color2).style.backgroundColor = "#006FFD";
    nonTargetedBtnArr2.map((item2) => {
    document.getElementById(item2).style.backgroundColor = "#E7E7E7";
    return null;
    });
}, [color2]);   

    return (
        <>
        <Template   >
            <h1>관광</h1>
            <MainContent>                       
            <Content1  id='레저스포츠' onClick={onClick}><Contentdiv>레저스포츠<br /><Contentspan>골프, 인라인, 사격,  요트</Contentspan></Contentdiv><Category src={Skiimg} alt="스키"/></Content1>
            <Content1  id='문화관광' onClick={onClick}><Contentdiv>문화관광<br /><Contentspan>공원, 미술관, 박물관, 영화관</Contentspan></Contentdiv><Category src={hikingimg} alt="등산"/></Content1>
            <Content1  id='역사관광' onClick={onClick}><Contentdiv>역사관광<br /><Contentspan>사원, 종교</Contentspan></Contentdiv><Category src={Kides} alt="키즈"/></Content1>
            <Content1  id='자연관광' onClick={onClick}><Contentdiv>자연관광<br /><Contentspan>휴양림, 저수지, 해수욕장</Contentspan></Contentdiv><Category src={Skater} alt="실내스포츠" /></Content1>
            <Content1  id='체험관광' onClick={onClick}><Contentdiv>체험관광<br /><Contentspan>체험장,  온천</Contentspan></Contentdiv><Category src={park} alt="테마파크" /></Content1>
            </MainContent>

            <h1>음식</h1>
            <MainContent> 
            <Content3 id='한식' onClick={onClick2}><Contentdiv style={{marginTop:"10px"}}>한식</Contentdiv><Category src={koreafood} alt="한식"/></Content3>
            <Content3 id='중식' onClick={onClick2}><Contentdiv style={{marginTop:"10px"}}>중식</Contentdiv><Category src={chinesefood} alt="중식"/></Content3>
            <Content3 id='양식' onClick={onClick2}><Contentdiv style={{marginTop:"10px"}}>양식</Contentdiv><Category src={americafood} alt="양식"/></Content3>
            <Content3 id='지역음식' onClick={onClick2}><Contentdiv style={{marginTop:"10px"}}>지역음식</Contentdiv><Category src={localfood} alt="지역음식"/></Content3>
            </MainContent>
            <Next onClick={hendleNext}><Link to='/TripPlan/yes2' style={{textDecoration:"none",color:"black"}}>Next</Link></Next>  
        </Template>
        </>
    );
};

export default TripPlan3;