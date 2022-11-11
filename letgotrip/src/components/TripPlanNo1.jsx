import React from 'react';
import styled from 'styled-components';
import '../font/fontstyle.css';
import Carimg from '../img/car.png'
import Trainimg from '../img/train.png'
import Calenderimg from '../img/calender.png'
import Groupimg from '../img/group.png'
import plusimg from '../img/plus.png'
import minus from '../img/minus.png'

const Transportation = styled.div`
background-color : white;
margin : 50px auto;
width : 400px;
height : 300px; 
border-radius : 30px;
padding : 0 20px;
font-family: 'HallymGothic-Regular';
text-align : center;
`
const TripPlancalrndar = styled.div`
background-color : white;
margin : 100px auto;
width : 939px;
height : 522px;
border-radius : 30px;
padding : 40px;
padding-top : 70px;
display : block;
`
const Tamplate = styled.div`
    display : flex;
    margin-top : 25px;
`
const TypeBtn = styled.div`
    width : 110px;
    height : 46px;
    border : 1px solid black;
    border-radius : 10px;
    text-align : center;
    padding-top : 10px;
    margin-right : 23px;
`
const Trafficdiv = styled.div`
flex-wrap: wrap;
width : 120px; 
margin-left : 65px;
&:hover{
    border: 1px solid red;
`
const Traffic = styled.img`
height : 100px;
cursor : pointer;
margin-left: 5px;
}   
`
const TrafficSpan = styled.span`
        margin : 29px;
    `

const TripPlanNo1 = () => {
    return (
        <>
        <Transportation>
            <div>이동시간</div>
            <Tamplate>
            <TypeBtn>1.5시간 미만</TypeBtn>
            <TypeBtn>1.5시간~3시간</TypeBtn>
            <TypeBtn>3시간 이상</TypeBtn>
            </Tamplate>
            <Tamplate>
            <Trafficdiv><Traffic src={Carimg} alt="자동차"/><TrafficSpan>자차</TrafficSpan></Trafficdiv>
                    <Trafficdiv>
            <Traffic src={Trainimg} alt="기차"/><TrafficSpan>대중교통</TrafficSpan></Trafficdiv>
            </Tamplate>
        </Transportation>
        <TripPlancalrndar>

        </TripPlancalrndar>
        </>
    );
};

export default TripPlanNo1;