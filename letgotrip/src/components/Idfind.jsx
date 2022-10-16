import React,{useState} from 'react';
import styled from 'styled-components';
const Template  = styled.div`
    width : 699px;
    height : 569px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
    
`
const IdPwdFind = styled.div`
    display : flex;
    justify-content: space-between;
`
const IdPwdText= styled.div`
    cursor : pointer;
    margin : 60px;
    font-size : 20px;
    text-align : center;
    color : gray;
`
const Contentform = styled.div`
    margin : 50px 0 0 50px;
    font-size : 20px;  
`
const Year = styled.select`
margin-left : 15px; 
`
const Emailform = styled.div`
margin-top : 20px;
`
const Okbutton = styled.div`
    width : 501px;
    background-color:black;
    color : white;
    border : 0px;
    border-radius : 30px;
    cursor : pointer;
    text-align : center;
    margin : 50px ;
    font-size : 30px;
    padding : 40px 0;
`
const Idfind = () => {
    const [selectedYear, setSelectedYear] = useState(2000);
    const [selectedMonth, setSelectedMonth] = useState(1);
    const [selectedDay, setSelectedDay] = useState(1)
    const handleSelectYear = (e) => {
        setSelectedYear(e.target.value);
    };
    const handleSelectMonth = (e) => {
        setSelectedMonth(e.target.value);
    };
    const handleSelectDay = (e) => {
        setSelectedDay(e.target.value);
    };
    
    const year = () => {
        const result = [];
        for (let i = 2020; i > 1930; i--) {
            result.push(<option value={i}>{i}</option>);
        }
        return result;
    };
    const month = () => {
        const result = [];
        for (let i = 1; i < 13; i++) {
            result.push(<option value={i}>{i}</option>);
        }
        return result;
    };
    const day = () => {
        const result = [];
        for (let i = 1; i < 32; i++) {
            result.push(<option value={i}>{i}</option>);
        }
        return result;
    };
    return (
        <Template>
            <IdPwdFind>
                <IdPwdText>아이디찾기</IdPwdText>
                <IdPwdText>피밀번호찾기</IdPwdText>
            </IdPwdFind>
            <hr />  
            <Contentform>
                
                <p>이름 : <input type="text" /></p>생년월일 :
                    <Year value={selectedYear} onChange={handleSelectYear}>
                        {year()}
                    </Year>년 
                    <Year value={selectedMonth} onChange={handleSelectMonth}>
                        {month()}
                    </Year>월 
                    <Year value={selectedDay} onChange={handleSelectDay}>
                        {day()}
                    </Year>일 
                    <Emailform>
                    이메일 : <input type="text" placeholder='이메일을 입력해주세요' />@
                    <input type="text" placeholder='직접 입력' />
                    </Emailform>
                    <Okbutton >로그인</Okbutton>
            </Contentform>
        </Template>
    );
};

export default Idfind;