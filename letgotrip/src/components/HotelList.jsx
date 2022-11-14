import React from 'react';
import styled from 'styled-components';

const ListForm = styled.div`
    display : flex;
    width : 1100px;
    margin-bottom : 30px;
    font-family: 'HallymGothic-Regular';
    border : 1px solid black;
    font-size: 20px;
    cursor: pointer;
`
const URlimg = styled.img`
    height :60px;
    widht : 60px;
`
const HotelList = ({name,money,Url}) => {
    return (
        <ListForm>
            <div><URlimg src={Url} alt="사진" /></div>
            <div>
                <div>{name}</div>
                <div>{money}</div>
            </div>
        </ListForm>
    );
};

export default HotelList;