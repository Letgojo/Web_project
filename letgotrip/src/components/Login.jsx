import React from 'react';
import  styled from 'styled-components';
import { Link ,useNavigate } from 'react-router-dom';
import { firestore } from '../firebase.js'
import '../font/fontstyle.css';
const TemplateLogin  = styled.div`
    width : 699px;
    max-height : 569px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
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
const LoginBtn = styled.button`
    cursor : pointer;
    width : 501px;
    height : 86px;
    border : 1px solid black;
    border-radius : 30px;
    margin : 40px 95px;
    background-color : black;
    font-size : 20px; 
`
const Btntext = styled.div`
    text-align:center;
    color:white;
    margin : 29px auto;
`
const Login = () => {
    const navigate = useNavigate();
    const LoginSub = (e) => {
        e.preventDefault();
        let sessionStorage = window.sessionStorage;
        const ID = document.getElementById("value_id").value;
        const PWD = document.getElementById("value_password").value;
        const db = firestore.collection("회원관리");
        console.log(ID)
        db.doc(ID).get().then((doc)=>{
            let person = doc.data();
            console.log(person);
            try{        
            if(ID === person.아이디 && PWD === person.패스워드){
                sessionStorage.setItem("loginId", ID);
                sessionStorage.setItem("loginPassword", PWD);
                sessionStorage.setItem("name",person.이름)
                alert(`${person.이름} 환영합니다.`)
                navigate('/');
                window.location.replace("/")
            }
        }
        catch{
            alert("없는 정보입니다.")
        }

        })
    }
    return (
        <TemplateLogin>
        <form>
        <ID>
            <InputID type="text" placeholder="아이디" name="usename" id="value_id"/>
        </ID>
        <PWD>
            <InputPwd type="password" placeholder='비밀번호' id='value_password'/>
        </PWD>
        <Registerdiv>
            <Link to="/Login/Register"style={{ textDecoration: "none" ,color:"black"}}><Register>회원가입</Register></Link>
            <Link to="/Login/Idfine"style={{ textDecoration: "none" ,color:"black"}}><FindID>아이디 · 비밀번호 찾기</FindID></Link>
        </Registerdiv>
        <LoginBtn type='submit' onClick={LoginSub}>
            <Btntext>로그인</Btntext>   
        </LoginBtn>
        </form>

        </TemplateLogin>
    );
};

export default Login;