import React,{useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase.js'
import '../font/fontstyle.css';
const Template  = styled.div`
    width : 699px;
    height : 569px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
    font-family: 'HallymGothic-Regular';
`
const IdPwdFind = styled.div`
    display : flex;
    justify-content: space-between;
`
const IdText = styled.div`
    cursor : pointer;
    margin : 40px 0 40px 100px;
    font-size : 20px;
    border-bottom : 3px solid black;
`
const PWDText = styled.div`
    cursor : pointer;  
    margin : 40px 100px 40px 0px;
    font-size : 20px; 
`
const Contentform = styled.div`
    margin : 50px 0 0 150px;
    font-size : 20px;  
`
const Name = styled.input`
    margin-left : 1.4em;
    width:300px;
    height : 30px;
`
const Year = styled.select`
margin-left : 15px;
width :60px;
height : 30px;
`
const Emailform = styled.div`
margin-top : 20px;
`
const Email = styled.input`
    height : 30px;
    width:300px;    
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
    padding : 20px 0;
    margin-left : 100px;
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
    const IDserch =()=>{
        const user = [];
        const Name = document.getElementById("value_name").value
        const Email = document.getElementById("value_Email").value
        const db = firestore.collection("????????????");
        db.get().then((result)=>{
            result.forEach((allDoc)=>{
                user.push(allDoc.data())
            })
            for(let i =0; i<user.length; i++) { 
                if(user[i].??????===Name && user[i].?????????===Email)
                    alert(user[i].?????????)
            }
        })
        // db.doc(Email).get().then((doc)=>{
        //     let person = doc.data();
        //     console.log(person)
            // if(Name === person.?????? && Email === person.?????????){
            //     alert(`${person.??????}  ????????? ???????????? ${person.?????????}?????????.`)
            // }
            // else{
            //     alert("?????? ???????????????.")
            // }
    }
    return (
        <Template>
            <IdPwdFind>
                <IdText>???????????????</IdText>
                <Link to="/Login/Pwdfind" style={{ textDecoration: "none" ,color:"black"}}><PWDText>??????????????????</PWDText></Link>
            </IdPwdFind>
            <Contentform>
                <p>?????? : <Name type="text" id='value_name'/></p>???????????? :
                    <Year value={selectedYear} onChange={handleSelectYear} >
                        {year()}
                    </Year><span>??? </span>
                    <Year value={selectedMonth} onChange={handleSelectMonth}>
                        {month()}
                    </Year><span>??? </span>
                    <Year value={selectedDay} onChange={handleSelectDay}>
                        {day()}
                    </Year><span>??? </span>
                    <Emailform>
                    ????????? : <Email type="text" placeholder='???????????? ??????????????????' id='value_Email'/>
                    </Emailform>
            </Contentform>
            <Okbutton text="submit" onClick={IDserch}>??????</Okbutton>
        </Template>
    );
};

export default Idfind;