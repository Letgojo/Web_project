import React from 'react';
import styled from 'styled-components';
import '../font/fontstyle.css'; 
const Template  = styled.div`
    width : 1300px;
    height : 3000px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
    padding-left : 40px;
`
const MainContent = styled.div`
    display : flex;
    flex-wrap: wrap;
`
const Content = styled.div`
    width : 200px;
    height : 80px;
    border : 1px solid black;
    border-radius : 30px;
    background-color : #E7E7E7;
    margin-left : 20px;
    margin-top : 30px;
    text-align: center;
    padding-top : 40px;
    font-size: 20px;
    font-family: 'HallymGothic-Regular';
`
const Contentspan  = styled.span`
    font-size : 15px;
`
const TripPlan3 = () => {
    return (
        <Template>
            <h1>체험</h1>
            <MainContent>                       
            <Content><div>스키<br /><Contentspan>스키장, 눈썰매</Contentspan></div></Content>
            <Content>등산</Content>
            <Content>키즈<br /><Contentspan>키즈카페, 키즈체험관</Contentspan></Content>
            <Content>실내스포츠<br /><Contentspan>사격, 롤러스케이트, 클라이밍</Contentspan></Content>
            <Content>테마파크<br /><Contentspan>놀이동산,아쿠아리움,동물원</Contentspan></Content>
            <Content>실외스포츠<br /><Contentspan>패러글라이딩, 짚라인/번지점프</Contentspan></Content>
            <Content>수상레포츠<br /><Contentspan>빠지,스노쿨링,스파/온천</Contentspan></Content>
            <Content>공예/DIY<br /><Contentspan>액세서리,캔슬,도자기</Contentspan></Content>
            </MainContent>
        </Template>
    );
};

export default TripPlan3;