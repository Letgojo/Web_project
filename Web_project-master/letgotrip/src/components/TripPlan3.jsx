import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../font/fontstyle.css'; 
import Skiimg from '../img/카테고리사진/ski.png'
import hikingimg from '../img/카테고리사진/hiking.png'
import Kides from '../img/카테고리사진/kids.png'
import Skater from '../img/카테고리사진/skater.png'
import park from '../img/카테고리사진/themepark.png'
import paragliding from '../img/카테고리사진/paragliding.png'
import watersport from '../img/카테고리사진/watersport.png'
import diy from '../img/카테고리사진/diy.png'
import art from '../img/카테고리사진/art-museum.png'
import exhibition from '../img/카테고리사진/exhibition.png'
import museum from '../img/카테고리사진/museum.png'
import show from '../img/카테고리사진/show.png'
import americafood from '../img/카테고리사진/americafood.png'
import japanfood from '../img/카테고리사진/japanfood.png'
import koreafood from '../img/카테고리사진/koreafood.png'
import localfood from '../img/카테고리사진/localfood.png'
import chinesefood from '../img/카테고리사진/chinesefood.png'

const Template  = styled.div`
    width : 1300px;
    height : 1200px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
    padding-left : 40px;
    font-family: 'HallymGothic-Regular';
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
`
const Contentdiv = styled.div`
    width : 130px;
`
const Contentspan  = styled.span`
    font-size : 13px;
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
    return (
        <>
        <Template   >
            <h1>체험</h1>
            <MainContent>                       
            <Content><Contentdiv>스키<br /><Contentspan>스키장, 눈썰매</Contentspan></Contentdiv><Category src={Skiimg} alt="스키"/></Content>
            <Content><Contentdiv>등산</Contentdiv><Category src={hikingimg} alt="등산"/></Content>
            <Content><Contentdiv>키즈<br /><Contentspan>키즈카페, 키즈체험관</Contentspan></Contentdiv><Category src={Kides} alt="키즈"/></Content>
            <Content><Contentdiv>실내스포츠<br /><Contentspan>사격, 롤러스케이트, 클라이밍</Contentspan></Contentdiv><Category src={Skater} alt="실내스포츠" /></Content>
            <Content><Contentdiv>테마파크<br /><Contentspan>놀이동산,아쿠아리움,동물원</Contentspan></Contentdiv><Category src={park} alt="테마파크" /></Content>
            <Content><Contentdiv>실외스포츠<br /><Contentspan>패러글라이딩, 짚라인/번지점프</Contentspan></Contentdiv><Category src={paragliding} alt="실외스포츠" /></Content>
            <Content><Contentdiv>수상레포츠<br /><Contentspan>빠지,스노쿨링,스파/온천</Contentspan></Contentdiv><Category src={watersport} alt="수상스포츠" /></Content>
            <Content><Contentdiv>공예/DIY<br /><Contentspan>액세서리,캔슬,도자기</Contentspan></Contentdiv><Category src={diy} alt="공예" /></Content>
            </MainContent>
            
            <h1>테마</h1>
            <MainContent> 
            <Content><Contentdiv>박물관</Contentdiv><Category src={museum} alt="박물관"/></Content>
            <Content><Contentdiv>미술관</Contentdiv><Category src={art} alt="미술관"/></Content>
            <Content><Contentdiv>전시회</Contentdiv><Category src={exhibition} alt="전시회"/></Content>
            <Content><Contentdiv>공연</Contentdiv><Category src={show} alt="공연"/></Content>
            </MainContent>

            <h1>맛집</h1>
            <MainContent> 
            <Content><Contentdiv>한식</Contentdiv><Category src={koreafood} alt="한식"/></Content>
            <Content><Contentdiv>중식</Contentdiv><Category src={chinesefood} alt="중식"/></Content>
            <Content><Contentdiv>양식</Contentdiv><Category src={americafood} alt="양식"/></Content>
            <Content><Contentdiv>지역음식</Contentdiv><Category src={localfood} alt="지역음식"/></Content>
            </MainContent>
            <Next><Link to='/TripPlan4' style={{textDecoration:"none",color:"black"}}>Next</Link></Next>  
        </Template>
        </>
    );
};

export default TripPlan3;