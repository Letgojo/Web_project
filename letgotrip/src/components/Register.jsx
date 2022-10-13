import React from 'react';
import  styled from 'styled-components';

const TemplateLogin  = styled.div`
    width : 699px;
    max-height : 569px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
`
const ID = styled.div`
    margin : 40px 0 0 130px;
    text-align : center;
    display:flex;  
`
const InputID = styled.input`
    width : 295px;
    height : 35px;
`
const Overlap = styled.div`
    width : 133px;
    height : 33px;
    background-color: #EAEAEA;
    padding-top : 8px;
    cursor : pointer;
`
const Pwd =styled.div`
    display:block;
    margin : 40px 0 0 130px;
`
const InputPwd= styled.input`
    marigin-top : 150px;
    width : 400px;
    height : 35px;
`
const Name = styled.input`
    margin : 40px 0 0 130px;
    width : 295px;
    height : 35px;
`


const Register = () => {
    return (
        <TemplateLogin>
            <form>
                <ID>
                <InputID type="text" placeholder='아이디' />
                <Overlap>ID중복확인</Overlap>
                </ID>
                <Pwd>
                    <InputPwd type="text" placeholder='비밀번호'/>
                    <InputPwd type="text" placeholder='비밀번호확인'/>
                </Pwd>
                <Name type="text" placeholder="이름" />
            </form>
        </TemplateLogin>
    );
};

export default Register;