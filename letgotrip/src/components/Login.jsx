import React from 'react';
import  styled from 'styled-components';

const TemplateLogin  = styled.div`
    width : 699px;
    max-height : 569px;
    border : 1px solid black;
    background-color : white;
    margin : 50% auto;   
    border-radius : 30px;
`
const ID = styled.div`
    margin : 40px auto;
    text-align : center;
    width: 501px;
    height:85px;
    border:1px solid black;
    border-radius:30px;
    `
const InputID = styled.input`
    border : 0px;
    width:430px;
    font-size : 30px;
    margin : 25px 20px 0 0 ;
`

const PWD = styled.div`
    text-align : center;
    margin : 40px auto;
    width: 501px;
    height:85px;
    border:1px solid black;
    border-radius : 30px
`
const InputPwd = styled.input`
    border : 0px;
    width:430px;
    font-size : 30px;
    margin : 25px 20px 0 0 ;
`
const Registerdiv = styled.div`
    display :flex;
    justify-content: space-between;
`
const Register = styled.div`
    margin-left : 98px;
    cursor:pointer;
    text-decoration-line: underline;
`
const FindID = styled.div`
    margin-right : 98px;
    cursor:pointer; 
    text-decoration-line: underline;
`
const LoginBtn = styled.div`
    cursor : pointer;
    width : 501px;
    height : 86px;
    border : 1px solid black;
    border-radius : 30px;
    margin : 40px auto;
    background-color : black;
`
const Btntext = styled.div`
    text-align:center;
    color:white;
    margin : 29px auto;
`
const Login = () => {
    return (
        <TemplateLogin>
        <form>
        <ID>
            <InputID  placeholder="아이디" name="usename"/>
        </ID>
        <PWD>
            <InputPwd type="password" placeholder='비밀번호'/>
        </PWD>
        <Registerdiv>
            <Register>회원가입</Register>
            <FindID>아이디 · 비밀번호 찾기</FindID>
        </Registerdiv>
        <LoginBtn>
            <Btntext>로그인</Btntext>
        </LoginBtn>
        </form>
        </TemplateLogin>
    );
};

export default Login;