import React from 'react';
import styled from 'styled-components'
import MainLogo from '../img/logo.png';
const Template = styled.div`
    width: 1440px;
    height : 160px;
    background : white;
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
    background : white;
`
const HeaderUl = styled.div`
    display : flex;
    margin-right : 20px;
    background : white;
`
const Category = styled.div`
    margin : 48px 0 0 120px;
    font-size:20px;
    cursor:pointer;
    background : white;
`
const Login = styled.div`
    display:flex;
    margin : 48px 60px;
    font-size:20px;
    cursor:pointer;
    background : white;
`


const Header = () => {
    return (
        <Template>
        <Logo>Logo</Logo>
        <HeaderUl>
            <Category>여행계획</Category>
            <Category>기록</Category>
            <Category>지역축제소개</Category>
            <Category>커뮤니티</Category>
        </HeaderUl>
        <Login>로그인</Login>
        </Template>
    );
};

export default Header;