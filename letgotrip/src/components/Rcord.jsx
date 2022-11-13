import React from 'react';
import styled from 'styled-components';
import '../font/fontstyle.css';
const Template  = styled.div`
    width : 1300px;
    height : 3000px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
    font-family: 'HallymGothic-Regular';
`
const Box = styled.div`
    background-color: white,
    position: absolute,
    border-radius: 30,
    min-height: 750,
    padding: 12px,
    margin-left: 200,
    margin-tottom: 50,
    margin-top: 50px,
    width: 1020px,   
    border: 1px solid black;
`
const Rcord = () => {
    return (
        <Template>
            <Box>
                11
            </Box>
        </Template>
    );
};

export default Rcord;