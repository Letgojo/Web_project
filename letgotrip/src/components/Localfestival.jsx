import React,{ useState } from 'react';
import styled from 'styled-components'
import Calender from 'react-calendar'
import {CalendarOutlined ,SearchOutlined} from "@ant-design/icons"
const Template  = styled.div`
    width : 1300px;
    height : 1200px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
`
const Period  = styled.div`
    display : flex;
    width : 470px;
    height : 42px; 
    border : 1px solid black;
    border-radius: 30px;    
    margin : 30px 0 0 750px;
    padding-left : 40px;    
`
const Periodform = styled.div`
    margin-top: 7x;
    font-size:20px;
`
const PLDay = styled.input`
    margin-left : 10px;
    widht : 98px;
    height :27px; 
    border-radius : 30px;
    margin-top : 8px; 
`
const Local =  styled.div`
    border : 1px solid black;
    width : 450px;
    height : 42px;
    border-radius : 30px;
    margin : 20px 0 0 750px;
    padding-left : 40px; 
`
const Localform = styled.div`
    margin-top : 6px;
    font-size : 20px;
`
const City = styled.select`
    margin  : 0 10px;
    width : 120px;
    height : 28px;
    border-radius : 30px; 
    text-align : center;  
`
const SearchCity = styled.input`
    width :177px;
    height : 28px;
    border-radius: 30px;
`

const Localfestival = () => {
    const [value, onChange] = useState(new Date());
    const FirstDay = () => { 
        <Calender onChange={onChange} value={value} />
    }
    return (
        <Template>
            <Period>
                <Periodform>
                기간 검색 <PLDay type="text" id='firstDay'/>  <CalendarOutlined onClick={FirstDay} style={{cursor:"pointer"}}/><span> ~ </span> <PLDay type="text" id='LastDay' /><CalendarOutlined  style={{cursor:"pointer"}}/>
                </Periodform>
            </Period>
            <Local>
                <Localform>
                <span>지역</span>
                <City name="City" id="City">
                    <option value="">대구광역시</option>
                    <option value="">경상북도</option>
                    <option value="">경상남도</option>
                </City>
                <span>검색</span> <SearchCity type="text" /><SearchOutlined /> 
                </Localform>
            </Local>
        </Template>
    );
};

export default Localfestival;