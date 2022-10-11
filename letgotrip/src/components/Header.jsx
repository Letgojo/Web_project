import React from 'react';
import styled from 'styled-components'
const Template = styled.div`
    width: 1440px;
    height : 160px;
    background-color : skyblue;
    display:flex;   
    flex-direction: row;    
    justify-content: space-between;
    margin : 0 auto;
    
`
const Logo = styled.div`
    font-size:45px;
    display:flex;
    margin : 40px 0 0 60px;
    cursor:pointer;
`
const Header_Ul = styled.div`
    display : flex;
    margin-right : 20px;
`
const Category = styled.div`
    margin : 48px 0 0 120px;
    font-size:20px;
    cursor:pointer;
`
const Login = styled.div`
    display:flex;
    margin : 48px 60px;
    font-size:20px;
    cursor:pointer;
`
const Header = () => {
    return (
        <Template>
        <Logo><img src="../img/logo.png" alt="Logo"/></Logo>
        <Header_Ul>
            <Category>여행계획</Category>
            <Category>기록</Category>
            <Category>지역축제소개</Category>
            <Category>커뮤니티</Category>
        </Header_Ul>
        <Login>로그인</Login>
        </Template>
    );
};

export default Header;