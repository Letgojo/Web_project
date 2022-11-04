import React from 'react';
import styled from 'styled-components';
import guesthouse from '../img/숙소사진/guesthouse.png'
import hanok from '../img/숙소사진/hanok.png'
import hotel from '../img/숙소사진/hotel.png'
import motel from '../img/숙소사진/motel.png'
import deleteBtn from '../img/숙소사진/x_button.png'
import pension from '../img/숙소사진/island.png'
const Template = styled.div`
width : 1300px;
height : 1200px;
border : 1px solid black;
background-color : white;
margin : 5% auto;   
border-radius : 30px;
padding-left : 40px;
`
const Btnimg = styled.img`
    width : 98px;
    height : 98px;
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
    height : 150px;
    text-align:center;
    cursor : pointer;
`
const CategoryType = styled.div`
    border : 1px solid black;
    width : 545px;
    height : 89px;
    border-radius : 30px;
    display : flex;
`
const TypeRadio = styled.div`
    margin-top : 30px;
    margin-left : 40px;
    font-size: 35px;
`
const Typeinput = styled.input`
    margin-left : 10px;
    margin-right: 20px
    
`
const TripPlan4 = () => {
    return (
        <Template>
            <CategoryConent>
            <Category><Btnimg src={deleteBtn} alt="해당없음"/>해당없음</Category>
            <Category><Btnimg src={guesthouse} alt="게스트하우스"/>게스트하우스</Category>
            <Category><Btnimg src={pension} alt="펜션"/>펜션</Category>
            <Category><Btnimg src={hotel} alt="호텔"/>호텔</Category>
            <Category><Btnimg src={motel} alt="모텔"/>모텔</Category>
            <Category><Btnimg src={hanok} alt="한옥"/>한옥</Category>
            </CategoryConent>
            <hr />
            <CategoryType>
                <TypeRadio><Typeinput type="radio" name="type" style={{width:"25px",height:"25px"}}/>인기</TypeRadio>
                <TypeRadio><Typeinput type="radio" name="type" style={{width:"25px",height:"25px"}}/>가격</TypeRadio>
                <TypeRadio><Typeinput type="radio" name="type" style={{width:"25px",height:"25px"}}/>특가</TypeRadio>
            </CategoryType>
        </Template>
    );
};

export default TripPlan4;