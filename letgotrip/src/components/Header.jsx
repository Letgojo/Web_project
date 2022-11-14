import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import MainLogo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase.js'
import '../font/fontstyle.css';

const Template = styled.div`
    width: 1440px;
    height : 130px;
    background : white;
    display:flex;   
    flex-direction: row;    
    justify-content: space-between;
    margin : 0 auto;
    font-family: 'HallymGothic-Regular';
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
    margin : 10px 30px;
    font-size:20px;
    cursor:pointer;
    background : white;
    text-decoration : none;
    color: black;
`
const Onlinename = styled.div`
    margin-top :  10px;
    display : flex;
    font-size:14px;
    margin-left : 100px;
`
const Logout = styled.div`
    margin-left : 20px;
    margin-right : 30px;
    cursor : pointer;
    
`

const Header = ({chlidren}) => {
    let sessionStorage = window.sessionStorage;
    const [user, setuser] = useState(false)
    const name = sessionStorage.getItem("name")

    const logout = () => { 
        sessionStorage.clear();
        window.location.replace("/")
        }
    useEffect(()=>{ 
        if(sessionStorage.getItem('loginId') === null){
            console.log('isLogin ?? :: ', user)
        }else{
            setuser(true)
            console.log('isLogin ?? :: ', user)
        }
    })
    const handleSelect = () => { 
        if(!name){
            alert("권한이 없습니다.")
            window.location.replace("/")
        }
    }
    return (
        <Template>
        <Link to="/"style={{ textDecoration:"none",color:"black"}}><Logo><MainLogo1 src={MainLogo} alt="Logo" /></Logo></Link>
        <HeaderUl>
            <Link to="/TripPlan" style={{textDecoration:"none",color:"black"}} onClick={handleSelect}><Category>여행계획</Category></Link>
            <Link to="Rcord" style={{textDecoration:"none",color:"black"}} onClick={handleSelect}><Category>기록</Category></Link> 
            <Link to="/localfestival" style={{textDecoration:"none",color:"black"}}><Category>지역축제소개</Category></Link>
            <Link to="/Community"style={{textDecoration:"none",color:"black"}}><Category>커뮤니티</Category></Link>
        </HeaderUl>
        {user?(
            <>
            <Onlinename style={{fontSize:"15px"}}>"{name}"님 환영합니다. |<Logout onClick={logout}>로그아웃</Logout></Onlinename>
            </>
            ):(
        <Link to="/Login"style={{textDecoration:"none",color:"black"}}><Login>로그인</Login></Link>    
        )}
        </Template>
    );
};

export default Header;