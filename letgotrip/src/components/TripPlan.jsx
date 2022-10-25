import React from 'react';
import styled from 'styled-components';
import {RightOutlined} from "@ant-design/icons"
import { Link } from 'react-router-dom';


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
const TripPlan = () => {
    return (
        <>
            <Triptitle>여행지를 정하셨나요 ? </Triptitle>
            <Link to="/TripPlan/Yes1" style={{ textDecoration:"none",color:"black"}}><TripYes>
                <div>예</div> 
                <RightOutlined /> 
            </TripYes></Link>
            <Link to="/TripPlan/No1" style={{ textDecoration:"none",color:"black"}}><TripNo>
            <div>아니요</div> 
            <RightOutlined />
            </TripNo></Link>
        </>
    );
};

export default TripPlan;