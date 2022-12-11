import React from 'react';
import styled from 'styled-components';
import '../font/fontstyle.css'
const Template = styled.div`
    font-size:15px;
    font-family: 'twayair';
    width:700px;
    cursor: pointer;
`
const BusType = styled.div`
    margin-top:20px;

`
const TimeorMoney = styled.div`
    display : flex;
    justify-content : space-between;
    margin-top:20px;
    margin-bottom:20px;
    font-size:25px;
`
//name, start, finish, time, money

const Line = styled.div`    
    margin-top:10px;
    border-bottom : 1px solid black;
`
const Time = styled.div`
    color:gray;
`
const BusTable = ({distance,start,finish,Rating,StartTime,FinishTime,money,timetaken,name,startw,starty,finishw,finishy}) => {
    let sessionStorage = window.sessionStorage;
    money=money.split(",").join().substr(0,money.indexOf("원"))

    const handleBus = () => { 
        sessionStorage.setItem("버스출발지",start)
        sessionStorage.setItem("버스도착지",finish)
        sessionStorage.setItem("버스출발지위도",startw)
        sessionStorage.setItem("버스출발지경도",starty)
        sessionStorage.setItem("버스도착지위도",finishw)
        sessionStorage.setItem("버스도착지경도",finishy)
        sessionStorage.setItem("버스통행료",money)
        sessionStorage.setItem("버스출발시간",StartTime)
        sessionStorage.setItem("버스도착시간",FinishTime)
        sessionStorage.setItem("소요시간",timetaken)
        sessionStorage.setItem("거리",distance) 
        sessionStorage.setItem("금액",money) 
    }
    return (
        <Template onClick={handleBus}>
            <BusType>
                {Rating}
            </BusType>
            <TimeorMoney>
                <div>{StartTime} -&gt; {FinishTime}</div>
                <div>{money}</div>
            </TimeorMoney>
            <Time>{timetaken} <span>{name}</span></Time>
            <Line />
        </Template>
    );
};

export default BusTable;