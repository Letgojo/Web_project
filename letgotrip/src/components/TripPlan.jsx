import React from 'react';
import styled from 'styled-components';

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
`
const TripPlan = () => {
    return (
        <>
            <Triptitle>
                여행지를 정하셨나요 ? 
            </Triptitle>
            <TripYes>예</TripYes>
            <TripNo>아니요</TripNo>
        </>
    );
};

export default TripPlan;