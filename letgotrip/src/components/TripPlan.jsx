import React from 'react';
import styled from 'styled-components';
import {RightOutlined} from "@ant-design/icons"
import { Link } from 'react-router-dom';
import '../font/fontstyle.css';

const Triptitle = styled.div`
    background-color : white;
    margin : 100px auto ;
    margin-bottom : 0px;
    width : 500px;
    height : 60px;
    font-size : 30px;
    text-align : center;
    border-radius : 30px;
    padding-top : 20px;     
    font-family: 'HallymGothic-Regular';
`
const TripYes = styled.div`
    background-color : white;
    margin : 50px auto;
    margin-bottom : 0px;
    width : 500px;
    height : 60px;
    font-size : 30px;
    text-align : center;
    border-radius : 30px;
    padding-top : 20px;  
    cursor : pointer; 
    display: flex;
    justify-content: space-between;
    `
const TripNo = styled.div`
    background-color : white;
    margin : 50px auto;
    margin-bottom : 0px;
    width : 500px;
    height : 60px;
    font-size : 30px;
    text-align : center;
    border-radius : 30px;
    padding-top : 20px;   
    cursor : pointer;
    display : flex;
    justify-content: space-between;
`
const YesorNotext = styled.div`
    margin-left 40px;
`
const TripPlan = () => {
    return (
        <>
            <Triptitle>여행지를 정하셨나요 ? </Triptitle>
            <Link to="/TripPlan/Yes1" style={{ textDecoration:"none",color:"black"}}>
            <TripYes>
                <YesorNotext>예</YesorNotext> 
                <RightOutlined /> 
            </TripYes></Link>
            <Link to="/TripPlan/No1" style={{ textDecoration:"none",color:"black"}}>
            <TripNo>
            <YesorNotext>아니요</YesorNotext> 
            <RightOutlined />
            </TripNo></Link>
        </>
    );
};

export default TripPlan;