import React from 'react';
import styled from 'styled-components';

const Triptitle = styled.div`
    background-color : white;
    margin : 100px auto;
    width : 500px;
    height : 60px;
    font-size : 30px;
    text-align : center;
    border-radius : 30px;
    padding-top : 20px;     
`
const TripPlan = () => {
    return (
        <>
            <Triptitle>
                여행지를 정하셨나요 ? 
            </Triptitle>
        </>
    );
};

export default TripPlan;