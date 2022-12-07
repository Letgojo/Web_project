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
    width : 1300px;
    height : 1200px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
    padding-left : 40px;
    font-family: 'twayair';

`
const MainContent = styled.div`
    display : flex;
    flex-wrap: wrap;
    margin-bottom    : 100px;
`

const Contentdiv = styled.div`
    width : 130px;
    font-weight: bold;
`
const Contentspan  = styled.span`
    font-size : 13px;
    font-weight: normal;
`
const Category = styled.img`
    width : 72px;
    height : 62px;  
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
width : 220px;
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
//테마
const Content2 = styled.div`
width : 220px;
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
width : 220px;
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
    const [color1, setcolor1] = useState("박물관");
    const [color2, setcolor2] = useState("한식");
    let sessionStorage = window.sessionStorage;
    // {/* 체험 */}
    // const [ski ,setSki] = useState(false)
    // const [hiking ,sethiking] = useState(false)
    // const [insport, setinsport]= useState(false)
    // const [tema, settema]= useState(false)
    // const [outsport, setoutsport]= useState(false)
    // const [water , setwater] = useState(false)
    // const [Diy, setdiy] = useState(false)

    // {/* 체험 */}
    // const [Museum ,setMuseum] = useState(false)
    // const [Art ,setArt] = useState(false)
    // const [Exhibition, setExhibition]= useState(false)
    // const [Show, setshow]= useState(false)

    // {/* 맛집 */}
    // const [Korea ,setKorea] = useState(false)
    // const [Chinese ,setChinese] = useState(false)
    // const [America, setAmerica]= useState(false)
    // const [Local, setLocal]= useState(false)  
        //체험

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
        // const Hotelname = sessionStorage.getItem("호텔이름")
        const people = sessionStorage.getItem("인원")
        const experience = sessionStorage.getItem("체험")
        const theme = sessionStorage.getItem("테마")
        const eat = sessionStorage.getItem("맛집")
    const textbox = {
        startday : StartDay,//출발날짜
        finishday : FinishDay,//도착날짜
        startTime : StartTime, //출발시간
        startLocation : StartLocation, //출발지역
        finishLocation : finishLocation, //도착지역
        // hotelname : Hotelname,
        people : people,
        Experience : experience, 
        Theme : theme,
        Eat: eat,
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
        sessionStorage.setItem("체험",id)
        setcolor(id);
};
    const onClick1 = (e) => {
        const {
        currentTarget: { id },
        } = e;
        sessionStorage.setItem("테마",id)
        setcolor1(id);
    };
    const onClick2 = (e) => {
        const {
        currentTarget: { id },
        } = e;
        sessionStorage.setItem("맛집",id)
        setcolor2(id);
    };
useEffect(() => {
    const allBtnArr = ["스키", "등산", "키즈",'실내스포츠','테마파크','실외스포츠','수상레포츠','공예/DIY'];
    const nonTargetedBtnArr = allBtnArr.filter((item) => item !== color);
    document.getElementById(color).style.backgroundColor = "#006FFD";
    nonTargetedBtnArr.map((item) => {
    document.getElementById(item).style.backgroundColor = "#E7E7E7";
    return null;
    });
}, [color]);
useEffect(() => {
    const allBtnArr2 = ['박물관','미술관','전시회','공연'];
    const nonTargetedBtnArr1 = allBtnArr2.filter((item1) => item1 !== color1);
    document.getElementById(color1).style.backgroundColor = "#006FFD";
    nonTargetedBtnArr1.map((item1) => {
    document.getElementById(item1).style.backgroundColor = "#E7E7E7";
    return null;
    });
}, [color1]);   
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
            <h1>체험</h1>
            <MainContent>                       
            <Content1  id='스키' onClick={onClick}><Contentdiv>스키<br /><Contentspan>스키장, 눈썰매</Contentspan></Contentdiv><Category src={Skiimg} alt="스키"/></Content1>
            <Content1  id='등산' onClick={onClick}><Contentdiv>등산</Contentdiv><Category src={hikingimg} alt="등산"/></Content1>
            <Content1  id='키즈' onClick={onClick}><Contentdiv>키즈<br /><Contentspan>키즈카페, 키즈체험관</Contentspan></Contentdiv><Category src={Kides} alt="키즈"/></Content1>
            <Content1  id='실내스포츠' onClick={onClick}><Contentdiv>실내스포츠<br /><Contentspan>사격, 롤러스케이트, 클라이밍</Contentspan></Contentdiv><Category src={Skater} alt="실내스포츠" /></Content1>
            <Content1  id='테마파크' onClick={onClick}><Contentdiv>테마파크<br /><Contentspan>놀이동산,아쿠아리움,동물원</Contentspan></Contentdiv><Category src={park} alt="테마파크" /></Content1>
            <Content1  id='실외스포츠' onClick={onClick}><Contentdiv>실외스포츠<br /><Contentspan>패러글라이딩, 짚라인/번지점프</Contentspan></Contentdiv><Category src={paragliding} alt="실외스포츠" /></Content1>
            <Content1  id='수상레포츠' onClick={onClick}><Contentdiv>수상레포츠<br /><Contentspan>빠지,스노쿨링,스파/온천</Contentspan></Contentdiv><Category src={watersport} alt="수상스포츠" /></Content1>
            <Content1  id='공예/DIY' onClick={onClick}><Contentdiv>공예/DIY<br /><Contentspan>액세서리,캔슬,도자기</Contentspan></Contentdiv><Category src={diy} alt="공예" /></Content1>
            </MainContent>
            
            <h1>테마</h1>
            <MainContent> 
            <Content2 id='박물관' onClick={onClick1}><Contentdiv style={{marginTop:"10px"}}>박물관</Contentdiv><Category src={museum} alt="박물관"/></Content2>
            <Content2 id='미술관' onClick={onClick1}><Contentdiv style={{marginTop:"10px"}}>미술관</Contentdiv><Category src={art} alt="미술관"/></Content2>
            <Content2 id='전시회' onClick={onClick1}><Contentdiv style={{marginTop:"10px"}}>전시회</Contentdiv><Category src={exhibition} alt="전시회"/></Content2>
            <Content2 id='공연' onClick={onClick1}><Contentdiv style={{marginTop:"10px"}}>공연</Contentdiv><Category src={show} alt="공연"/></Content2>
            </MainContent>

            <h1>맛집</h1>
            <MainContent> 
            <Content3 id='한식' onClick={onClick2}><Contentdiv style={{marginTop:"10px"}}>한식</Contentdiv><Category src={koreafood} alt="한식"/></Content3>
            <Content3 id='중식' onClick={onClick2}><Contentdiv style={{marginTop:"10px"}}>중식</Contentdiv><Category src={chinesefood} alt="중식"/></Content3>
            <Content3 id='양식' onClick={onClick2}><Contentdiv style={{marginTop:"10px"}}>양식</Contentdiv><Category src={americafood} alt="양식"/></Content3>
            <Content3 id='지역음식' onClick={onClick2}><Contentdiv style={{marginTop:"10px"}}>지역음식</Contentdiv><Category src={localfood} alt="지역음식"/></Content3>
            </MainContent>
            <Next onClick={hendleNext}><Link to='/TripPlan4' style={{textDecoration:"none",color:"black"}}>Next</Link></Next>  
        </Template>
        </>
    );
};

export default TripPlan3;