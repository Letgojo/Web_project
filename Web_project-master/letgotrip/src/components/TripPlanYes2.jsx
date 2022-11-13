import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../font/fontstyle.css';
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
    return (
        <Template>
            <Transportationfrom>
            <input type="radio" name='check'/>기차 <input type="radio" name='check' />버스
            <table border="1" style={{marginTop : "30px"}}>
                <thead>
                <tr>
                    <Transportationth>출발시간</Transportationth><Transportationth>도착시간</Transportationth><Transportationth>좌석</Transportationth><Transportationth>금액</Transportationth><Transportationth>소요시간</Transportationth>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td><td>1</td><td>1</td><td>1</td><td>1</td>
                </tr>
                </tbody>
            </table>
            </Transportationfrom>
            <Next><Link to="/TripPlan3" style={{textDecoration:"none",color:"black"}}>Next</Link></Next>
        </Template>
    );
};

export default TripPlanYes2;