import React from 'react';
import styled from 'styled-components'
import MainLogo from '../img/logo.png';
import { Link } from 'react-router-dom';

const Template = styled.div`
    width: 1440px;
    height : 130px;
    background : white;
    display:flex;   
    flex-direction: row;    
    justify-content: space-between;
    margin : 0 auto;
`
const MainLogo1 = styled.img`
    width:204px;
    height :100px;
`
const Logo = styled.div`
    font-size:45px;
    display:flex;
    margin : 10px 0 0 40px;
    cursor:pointer;
    background : white;
    text-decoration : none;
    color : black;
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
    text-decoration : none;
    color: black;
`


const Header = ({chlidren}) => {
    return (
        <Template>
        <Link to="/"style={{ textDecoration:"none",color:"black"}}><Logo><MainLogo1 src={MainLogo} alt="Logo" /></Logo></Link>
        <HeaderUl>
            <Category>여행계획</Category>
            <Category>기록</Category>
            <Link to="/localfestival" style={{textDecoration:"none",color:"black"}}><Category>지역축제소개</Category></Link>
            <Link to="/Community"style={{textDecoration:"none",color:"black"}}><Category>커뮤니티</Category></Link>
        </HeaderUl>
        <Link to="/Login"style={{textDecoration:"none",color:"black"}}><Login>로그인</Login></Link>
        </Template>
    );
};

export default Header;