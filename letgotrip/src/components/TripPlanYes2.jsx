import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase.js'
import '../font/fontstyle.css';
import BusTable from './BusTable.jsx';
const Template  = styled.div`
    width : 900px;
    height : 569px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
    font-family: 'HallymGothic-Regular';    
`
const Transportationfrom = styled.div`
    margin : 40px 70px;
`
const Transportationth = styled.th`
    width : 150px;
    margin-top : 20px;
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
const TripPlanYes2 = () => {
    let sessionStorage = window.sessionStorage;
    const db = firestore.collection("고속버스시간표")
    return (
        <Template>
            <Transportationfrom>
            <input type="radio" name='check'/>기차 <input type="radio" name='check' />버스
            <BusTable />
            </Transportationfrom>
            <Next><Link to="/TripPlan3" style={{textDecoration:"none",color:"black"}}>Next</Link></Next>
        </Template>
    );
};

export default TripPlanYes2;