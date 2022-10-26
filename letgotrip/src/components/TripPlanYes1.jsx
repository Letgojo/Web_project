    import React from 'react';
    import styled from 'styled-components';
    import {SearchOutlined,ArrowRightOutlined} from "@ant-design/icons"
    const Transportation = styled.div`
        background-color : white;
        margin : 50px auto;
        width : 537px;
        height : 158px; 
        display : flex;
        border-radius : 30px;
    `
    const TripPlancalrndar = styled.div`
        background-color : white;
        margin : 100px auto;
        width : 939px;
        height : 522px;
        border-radius : 30px;
        padding : 40px;
        padding-top : 70px;
    `
    const Location = styled.div`
        display : flex;
        justify-content: space-between;
    `
    const LocationStartorFinsh = styled.div`
        border : 1px solid black;
        border-radius : 30px;
        height : 134px;
        width :324px;
        text-align : center;
    `
    const LocationStart = styled.input`
        border : 0px;
        margin-top : 55px;
        font-size : 23px;
    `
    const GoDay = styled.div`
        margin-top: 100px;
        display : flex;
        justify-content: space-between;
    `
    const StartorFinshDay = styled.div`
        width : 288px;
        height :140px;
        border : 1px solid black;
        border-radius : 30px;
    `
    const Next = styled.div`
        width : 187px;
        height : 58px;
        border : 1px solid black;
        border-radius : 30px;
        background-color : #B9D6F9;
        font-size : 40px;
        text-align : center;
        margin-top: 40px;
    `
    const TripPlan_Yes1 = () => {
        return (
            <>
                <Transportation>
                    1111
                </Transportation>
                <TripPlancalrndar >
                    <Location>
                    <LocationStartorFinsh >
                        <LocationStart type="text"  placeholder='출발지를 입력해주세요'/><SearchOutlined style={{fontSize:"30px",cursor:"pointer"}}/>
                    </LocationStartorFinsh>
                    <ArrowRightOutlined style={{fontSize:"100px",color:"red"}}/>
                    <LocationStartorFinsh >
                    <LocationStart type="text"  placeholder='도착지를 입력해주세요'/><SearchOutlined style={{fontSize:"30px",cursor:"pointer"}}/>
                    </LocationStartorFinsh>
                    </Location>
                    <GoDay>
                    <StartorFinshDay></StartorFinshDay>
                    <StartorFinshDay></StartorFinshDay>
                    <StartorFinshDay></StartorFinshDay>
                    </GoDay>
                    <Next>Next</Next> 
                </TripPlancalrndar>
            </>
        );
    };

    export default TripPlan_Yes1;