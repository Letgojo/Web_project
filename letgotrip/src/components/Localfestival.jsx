import React,{ useState } from 'react';
import styled from 'styled-components'
import Calender from 'react-calendar'
import {CalendarOutlined ,SearchOutlined} from "@ant-design/icons"
import { firestore } from '../firebase';
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
    display : flex;
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
const FestivalContent = styled.div`
    margin : 30px 0px 0px 60px;
`
const Search = styled.div`
    cursor : pointer;   
`
const Localfestival = () => {

    const [value, onChange] = useState(new Date());
    const FirstDay = () => { 
        <Calender onChange={onChange} value={value} />
    }
    
    const SearchContent =()=> {
        var preson = [];
    const City = document.getElementById("City").value
    const db = firestore.collection("축제").doc("지역축제");
    db.collection(City).get().then((결과)=>{
    결과.forEach((doc) => {
         let result = doc.data();
         preson.push(result);
        });    
      console.log(preson[0]);
    });
    // // db.doc().get().then((doc)=>{
    // //     let person = doc.data();
    // //     console.log(person)
    // })
}
// const citiesRef = db.collection('cities');


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
                    <option value="대구광역시">대구광역시</option>
                    <option value="경상북도">경상북도</option>
                    <option value="경상남도">경상남도</option>
                    <option value="부산광역시">부산광역시</option>
                </City>
                <Search onClick={SearchContent} ><span>검색</span> <SearchCity type="text" /><SearchOutlined /></Search> 
                </Localform>
            </Local>
            <FestivalContent>


            </FestivalContent>
        </Template>
    );
};

export default Localfestival;