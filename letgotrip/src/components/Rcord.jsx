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
const TextBox = styled.div`
    width : 1000px;
    display : flex;
    margin-left : 100px;
    margin-top : 50px;
    border : 1px solid black;
`
const TimeSerch = styled.div`
    margin-left : 50px;
    margin-bottom : 50x;
    margin-top : 30px;
`
const Reordimg = styled.div`
    width : 280px;
    height : 270px;
    border : 1px solid black;
`
const Title = styled.div`
    display : flex;
    justify-content : space-between;
    margin-bottom : 50px;
    margin-left : 30px;
    width : 630px;
`
const RcordContent = styled.div`
    margin-top : 20px;
    margin-left : 30px;
`
const Rcord = () => {
    return (
        <Template>
            <TimeSerch>
                기간검색
            </TimeSerch>
            <TextBox>
               <Reordimg>img</Reordimg>
               <RcordContent>
                <Title>
                <div>부산</div>
                <div>휴지통</div>
                </Title>
                <RcordContent>
                    기간 : 2022.10.06 ~ 10. 19
                </RcordContent>
                <RcordContent>
                    예산 경비 : 320,000원 
                </RcordContent>
                <RcordContent>
                    실제 경비 : 400,000원
                </RcordContent>
               </RcordContent>
            </TextBox>

        </Template>
    );
};

export default Rcord;