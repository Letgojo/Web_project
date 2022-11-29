import React from 'react';
import styled from 'styled-components';
import '../font/fontstyle.css'
const Template = styled.div`
    font-size:15px;
    font-family: 'twayair';
    width:700px;
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
const BusTable = ({Rating,StartTime,FinishTime,money,timetaken,name}) => {
    return (
        <Template>
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