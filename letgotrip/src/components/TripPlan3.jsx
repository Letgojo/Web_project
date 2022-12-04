import React,{useState} from 'react';
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
const Content = styled.div`
    width : 220px;
    height : 80px;
    border : 1px solid black;
    border-radius : 30px;
    background-color : #E7E7E7;
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
const TripPlan3 = () => {
    let sessionStorage = window.sessionStorage;
    {/* 체험 */}
    const [ski ,setSki] = useState(false)
    const [hiking ,sethiking] = useState(false)
    const [insport, setinsport]= useState(false)
    const [tema, settema]= useState(false)
    const [outsport, setoutsport]= useState(false)
    const [water , setwater] = useState(false)
    const [Diy, setdiy] = useState(false)

    {/* 체험 */}
    const [Museum ,setMuseum] = useState(false)
    const [Art ,setArt] = useState(false)
    const [Exhibition, setExhibition]= useState(false)
    const [Show, setshow]= useState(false)

    {/* 맛집 */}
    const [Korea ,setKorea] = useState(false)
    const [Chinese ,setChinese] = useState(false)
    const [America, setAmerica]= useState(false)
    const [Local, setLocal]= useState(false)  

    
    return (
        <>
        <Template   >
            <h1>체험</h1>
            <MainContent>                       
            <Content onClick={()=>{sessionStorage.setItem("체험","스키")}}><Contentdiv>스키<br /><Contentspan>스키장, 눈썰매</Contentspan></Contentdiv><Category src={Skiimg} alt="스키"/></Content>
            <Content onClick={()=>{sessionStorage.setItem("체험","등산")}}><Contentdiv>등산</Contentdiv><Category src={hikingimg} alt="등산"/></Content>
            <Content onClick={()=>{sessionStorage.setItem("체험","키즈")}}><Contentdiv>키즈<br /><Contentspan>키즈카페, 키즈체험관</Contentspan></Contentdiv><Category src={Kides} alt="키즈"/></Content>
            <Content onClick={()=>{sessionStorage.setItem("체험","실내스포츠")}}><Contentdiv>실내스포츠<br /><Contentspan>사격, 롤러스케이트, 클라이밍</Contentspan></Contentdiv><Category src={Skater} alt="실내스포츠" /></Content>
            <Content onClick={()=>{sessionStorage.setItem("체험","테마파크")}}><Contentdiv>테마파크<br /><Contentspan>놀이동산,아쿠아리움,동물원</Contentspan></Contentdiv><Category src={park} alt="테마파크" /></Content>
            <Content onClick={()=>{sessionStorage.setItem("체험","실외스포츠")}}><Contentdiv>실외스포츠<br /><Contentspan>패러글라이딩, 짚라인/번지점프</Contentspan></Contentdiv><Category src={paragliding} alt="실외스포츠" /></Content>
            <Content onClick={()=>{sessionStorage.setItem("체험","수상레포츠")}}><Contentdiv>수상레포츠<br /><Contentspan>빠지,스노쿨링,스파/온천</Contentspan></Contentdiv><Category src={watersport} alt="수상스포츠" /></Content>
            <Content onClick={()=>{sessionStorage.setItem("체험","공예/DIY")}}><Contentdiv>공예/DIY<br /><Contentspan>액세서리,캔슬,도자기</Contentspan></Contentdiv><Category src={diy} alt="공예" /></Content>
            </MainContent>
            
            <h1>테마</h1>
            <MainContent> 
            <Content onClick={()=>{sessionStorage.setItem("테마","박물관")}}><Contentdiv style={{marginTop:"10px"}}>박물관</Contentdiv><Category src={museum} alt="박물관"/></Content>
            <Content onClick={()=>{sessionStorage.setItem("테마","미술관")}}><Contentdiv style={{marginTop:"10px"}}>미술관</Contentdiv><Category src={art} alt="미술관"/></Content>
            <Content onClick={()=>{sessionStorage.setItem("테마","전시회")}}><Contentdiv style={{marginTop:"10px"}}>전시회</Contentdiv><Category src={exhibition} alt="전시회"/></Content>
            <Content onClick={()=>{sessionStorage.setItem("테마","공연")}}><Contentdiv style={{marginTop:"10px"}}>공연</Contentdiv><Category src={show} alt="공연"/></Content>
            </MainContent>

            <h1>맛집</h1>
            <MainContent> 
            <Content onClick={()=>{sessionStorage.setItem("맛집","한식")}}><Contentdiv style={{marginTop:"10px"}}>한식</Contentdiv><Category src={koreafood} alt="한식"/></Content>
            <Content onClick={()=>{sessionStorage.setItem("맛집","중식")}}><Contentdiv style={{marginTop:"10px"}}>중식</Contentdiv><Category src={chinesefood} alt="중식"/></Content>
            <Content onClick={()=>{sessionStorage.setItem("맛집","양식")}}><Contentdiv style={{marginTop:"10px"}}>양식</Contentdiv><Category src={americafood} alt="양식"/></Content>
            <Content onClick={()=>{sessionStorage.setItem("맛집","지역음식")}}><Contentdiv style={{marginTop:"10px"}}>지역음식</Contentdiv><Category src={localfood} alt="지역음식"/></Content>
            </MainContent>
            <Next><Link to='/TripPlan4' style={{textDecoration:"none",color:"black"}}>Next</Link></Next>  
        </Template>
        </>
    );
};

export default TripPlan3;