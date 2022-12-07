import React from 'react';
import styled from 'styled-components';

const ListForm = styled.div`
    display : flex;
    width : 800px;
    margin-bottom : 30px;
    font-family: 'HallymGothic-Regular';
    border : 0.5px solid black;
    font-size: 20px;
    cursor: pointer;
    border-radius:30px;
    
`
const URlimg = styled.img`
    height :250px;
    width : 300px;
    border-radius:30px;
`
const Content = styled.div`
    margin-left : 20px;
    margin-top : 20px;
`
const ContentName = styled.div`
    font-size:25px;
    margin-left : 20px;
`
const ContentMoney = styled.div`    
    margin-top:100px;
    margin-left : 250px;
    font-size:35px;
`
const HotelList = ({name,money,Url}) => {
    let sessionStorage = window.sessionStorage;
    const handleHotel = (e) => { 
        sessionStorage.setItem("호텔이름", name);
    }
    return (
        <ListForm onClick={handleHotel}>
            <div><URlimg src={Url} alt="사진" /></div>
            <Content>
                <ContentName>{name}</ContentName>
                <br />
                <ContentMoney>{money}</ContentMoney>
            </Content>
        </ListForm>
    );
};

export default HotelList;