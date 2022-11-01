import React,{useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';
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
const IdText = styled.div`
    cursor : pointer;
    margin : 40px 0 40px 100px;
    font-size : 25px;
`
const PWDText = styled.div`
    cursor : pointer;  
    margin : 40px 100px 40px 0px;
    font-size : 25px; 
    border-bottom : 3px solid black;
`
const Contentform = styled.div`
    margin : 50px 0 0 50px;
    font-size : 20px;  
`
const Name = styled.input`
    width:440px;
    height : 30px;
`
const Year = styled.select`
margin-left : 15px;
    width :120px;
    height : 30px;
`
const Emailform = styled.div`
margin-top : 20px;
`
const Email = styled.input`
    height : 30px;
    width : 400px;
    margin : 0px 10px 0 10px;   
`
const Okbutton = styled.button`
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
const Pwdfind = () => {
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
    const Click_PWD = () =>
    {
        const ID = document.getElementById("value_ID").value
        const Name = document.getElementById("value_name").value
        const Email = document.getElementById("value_Email").value
        const db = firestore.collection("회원관리");
        db.doc(ID).get().then((doc)=>{
            let person = doc.data();
            if(Name === person.이름 && Email === person.이메일 && ID === person.아이디){
                alert(`${person.이름}  귀화의 비밀번호는 ${person.패스워드}입니다.`)
            }
            else{
                alert("없는 정보입니다.")
            }
        })    
    }
    return (
        <Template>
                <IdPwdFind>
                <Link to="/Login/Idfine" style={{ textDecoration: "none",color:"black" }}><IdText>아이디찾기</IdText></Link>
                <PWDText>비밀번호찾기</PWDText>
            </IdPwdFind>
            <Contentform>
            <p>아이디 : <Name type="text" id='value_ID' /></p>
            <p>이름 : <Name type="text" id='value_name'/></p>
            생년월일 :
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
                    이메일 : <Email type="text" placeholder='이메일을 입력해주세요' id='value_Email'/>
                    </Emailform>
                    <Okbutton type="submit" onClick={Click_PWD} >찾기</Okbutton>
            </Contentform>
        </Template>
    );
};

export default Pwdfind;