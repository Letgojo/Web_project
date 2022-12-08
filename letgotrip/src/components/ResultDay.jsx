import React,{useState} from 'react';
import styled from 'styled-components';
import { firestore } from '../firebase.js'

const Resultform = styled.div`
    margin-top : 60px;
    margin-left : 30px;
`
//결과 날짜 도출
const Dayform = styled.div`
    margin-left: 30px;
    font-size : 30px;
    width :500px;
    border-bottom  : 1px dashed black;
`
//경비 도출
const Pay  = styled.div`
border-bottom  : 1px dashed black;
width : 500px;
margin-left : 30px;
font-size : 25px;
`
const DayUl = styled.ul`
    display:flex;
    justify-content : space-between;
`
const ResultDay = () => {
    let sessionStorage = window.sessionStorage;
    const [Post , setPost] = useState([]);
    const ID = sessionStorage.getItem("loginId");
    var db = firestore.collection("회원관리").doc("kim").collection('2022-12-09')
    let person = [];
    db.get().then((result)=>{
        result.forEach((allDoc)=>{
            person.push(allDoc.data())
        })
  })
  console.log(person)
    return (
        <Resultform>
        <Dayform>
            <DayUl>
                <li>1일차</li>
                <li>2일차</li>
                <li>3일차</li>
            </DayUl>
        </Dayform>
        <Pay>금액 : </Pay>
        <div>
            <span></span>
        </div>
    </Resultform>
    );
};

export default ResultDay;