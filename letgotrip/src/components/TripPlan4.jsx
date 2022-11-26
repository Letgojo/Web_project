import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import HotelList from './HotelList'
import guesthouse from '../img/house/guesthouse.png'
import hanok from '../img/house/hanok.png'
import hotel from '../img/house/hotel.png'
import motel from '../img/house/motel.png'
import deleteBtn from '../img/house/x_button.png'
import pension from '../img/house/island.png'
import '../font/fontstyle.css';
import { firestore} from '../firebase.js'
import { Link } from 'react-router-dom';
const Template = styled.div`
width : 1000px;
max-height : 100%;
border : 1px solid black;
background-color : white;
margin : 5% auto;   
border-radius : 30px;
padding-left : 40px;
font-family: 'HallymGothic-Regular';
`
const Btnimg = styled.img`
    width : 90px;
    height : 70px;
`
const CategoryConent = styled.div`
    width : 1000px;
    margin-top : 40px;
    display : flex;
    justify-content : space-between;
    margin-left : 100px;
`
const Category = styled.div`
    width : 100px;
    height : 100px;
    text-align:center;
    cursor : pointer;
`
const CategoryType = styled.div`
    border : 1px solid black;
    width : 450px;
    height : 50px;
    border-radius : 30px;
    display : flex;
    margin-bottom : 40px;
`
const TypeRadio = styled.div`
    margin-top : 10px;
    margin-left : 40px;
    font-size: 20px;
`
const Typeinput = styled.input`
    margin-left : 10px;
    margin-right: 20px
    
`
const CategoryDIV = styled.div`
    display : flex;
    justify-content : space-between;
    margin-top : 40px;
`
const Next = styled.div`
width : 187px;
height : 58px;
border : 1px solid black;
border-radius : 30px;
background-color : #B9D6F9;
font-size : 40px;
text-align : center;
cursor : pointer;
margin-right : 40px;
`
const TripPlan4 = () => {
    const [PostList, setPostList] = useState([]);
    let sessionStorage = window.sessionStorage;

    // sessionStorage.getItem("숙소") /숙소/호텔/부산/2022-11-10/2022-11-13   sessionStorage.getItem("도착지역")
    useEffect(()=>{
    const db = firestore.collection("숙소").doc("호텔").collection("부산광역시 중구").doc("2022-12-1").collection("2022-12-2");
    let person = [];
    db.get().then((result)=>{
        result.forEach((allDoc)=>{
            person.push(allDoc.data())
        })
  })
  setTimeout(()=>{
    console.log(PostList)
    person.map((element)=>(
        setPostList((PostList)=> [
            ...PostList,
            {name:element.숙박업체, money:element.금액,Url:element.사진url}
        ])))
    },1000)
},[setPostList])
    return (
        <Template>
            <CategoryDIV>
            <CategoryType>
                <TypeRadio><Typeinput type="radio" name="type" style={{width:"25px",height:"25px"}}/>인기</TypeRadio>
                <TypeRadio><Typeinput type="radio" name="type" style={{width:"25px",height:"25px"}}/>가격</TypeRadio>
                <TypeRadio><Typeinput type="radio" name="type" style={{width:"25px",height:"25px"}}/>특가</TypeRadio>
            </CategoryType>
            <Next><Link to="/Map" style={{textDecoration:"none",color:"black"}}>Next</Link></Next>
            </CategoryDIV>
            <div>
                <ul> 
                    {PostList.map((element,index)=>(
                        <HotelList 
                            key={index}
                            name={element.name}
                            money={element.money}
                            Url={element.Url}
                        />
                        ))}
                        
                </ul>
            </div>

        </Template>
    );
};

export default TripPlan4;