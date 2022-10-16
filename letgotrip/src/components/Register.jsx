import React,{useState} from 'react';
import  styled from 'styled-components';
const TemplateLogin  = styled.div`
    width : 699px;
    height : 569px;
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
    margin : 10px 0 0 130px;
`
const InputPwd= styled.input`
    margin-top : 20px;
    width : 400px;
    height : 35px;
`
const Name = styled.input`
    margin : 30px 0 0 130px;
    width : 295px;
    height : 35px;
`
const YMD = styled.div`
margin : 40px 0 0 120px;
width : 400px;
height : 35px;
`
const Year = styled.select`
    margin-left : 15px;
`
const Skip = styled.div`
    margin :15px 0 0 130px;
`
const Telepone = styled.input`
    width:80px;
`
const ButtonSkip = styled.div`
    margin :20px 0 0 180px;
`
const Button1 = styled.button`
    width: 130px;
    height :37px;
    border-radius : 30px;
    background : #8ED2ED;
    border : 0px;
    cursor : pointer;
`
const Button2 = styled.button`
    width: 130px;
    height :37px;
    margin-left : 30px;   
    border-radius : 30px;
    border : 0px;
    cursor : pointer;
`
const Register = () => {
const [selectedYear, setSelectedYear] = useState(2000);
const [selectedMonth, setSelectedMonth] = useState(1);
const [selectedDay, setSelectedDay] = useState(1)
const handleSelectYear = (e) => {
    setSelectedYear(e.target.value);
};
const handleSelectMonth = (e) => {
    setSelectedMonth(e.target.value);
};
const handleSelectDay = (e) => {
    setSelectedDay(e.target.value);
};

const year = () => {
    const result = [];
    for (let i = 2020; i > 1930; i--) {
        result.push(<option value={i}>{i}</option>);
    }
    return result;
};
const month = () => {
    const result = [];
    for (let i = 1; i < 13; i++) {
        result.push(<option value={i}>{i}</option>);
    }
    return result;
};
const day = () => {
    const result = [];
    for (let i = 1; i < 32; i++) {
        result.push(<option value={i}>{i}</option>);
    }
    return result;
};

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
                <YMD>
                    <p>생년월일</p>
                    <Year value={selectedYear} onChange={handleSelectYear}>
                        {year()}
                    </Year>년 
                    <Year value={selectedMonth} onChange={handleSelectMonth}>
                        {month()}
                    </Year>월 
                    <Year value={selectedDay} onChange={handleSelectDay}>
                        {day()}
                    </Year>일 
                    </YMD>
                    <br /> 
                    <Skip>
                    <input type="radio"/>남
                    <input type="radio"/>여
                    </Skip> 
                    <Skip>
                    <Telepone type="text"/>-< Telepone type="text"/>-<Telepone type="text"/>
                    </Skip>
                    <Skip>
                    <input type="text" placeholder='이메일을 입력해주세요' />@
                    <input type="text" placeholder='직접 입력' />
                    </Skip>
                    <ButtonSkip>
                    <Button1 type='submit'>회원가입</Button1>
                    <Button2 type='button'>뒤로가기</Button2>
                    </ButtonSkip>
            </form>
        </TemplateLogin>
    );
};

export default Register;