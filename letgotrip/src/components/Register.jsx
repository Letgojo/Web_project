import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import  styled from 'styled-components';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firestore } from '../firebase.js'
/* 템플릿  */
const TemplateLogin  = styled.div`
    width : 699px;
    height : 600px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
`

/* 아이디, 아이디 중복  */
const ID = styled.div`
    margin : 40px 0 0 130px;
    text-align : center;
    display:flex;  
`
const InputID = styled.input`
    width : 295px;
    height : 35px;
`
const Overlap = styled.button`
    width : 133px;
    height : 33px;
    background-color: #EAEAEA;
    padding-top : 8px;
    cursor : pointer;
`
const Pwd =styled.div`
    display:block;
    margin : 5px 0 0 130px;
`
const InputPwd= styled.input`
    margin-top : 10px;
    width : 400px;
    height : 35px;
`
const Name = styled.input`
    margin : 15px 0 0 130px;
    width : 295px;
    height : 35px;
`
const YMD = styled.div`
margin : 20px 0 0 120px;
width : 400px;
height : 35px;
`
const Year = styled.select`
    margin-left : 15px;
    margin-top : 10px;
`
const Skip = styled.div`
    margin :15px 0 0 130px;
`
const Telepone = styled.input`
    width:300px;
    height : 30px;
`
const Email = styled.input`
    width:300px;
    height : 30px;
`
const ButtonSkip = styled.div`
    margin :20px 0 0 180px;
`
const Button1 = styled.button`
    width: 130px;
    height :37px;
    border-radius : 30px;
    background : #8ED2ED;
    margin-top : 30px;
    border : 0px;
    cursor : pointer;
`
const Button2 = styled.button`
    width: 130px;
    height :37px;
    margin-top : 30px;
    margin-left : 30px;   
    border-radius : 30px;
    border : 0px;
    cursor : pointer;
`
const P = styled.p`
    margin : 0px;
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
const navigate = useNavigate();
const goback = () => { 
    navigate(-1);
}


const refrash = (e) => { 
    e.preventDefault();
    const Id = document.getElementById("Id").value
    const Password = document.getElementById("Password").value
    const email1 = document.getElementById("email1").value
    const Name = document.getElementById("Name").value
    const selfpone = document.getElementById("tel1").value 
    const auth = getAuth();

    createUserWithEmailAndPassword(auth,email1,Password)
        .then((userCredential) => {
            // Signed in
            console.log(userCredential);
            const user = userCredential.user;
            alert(`${Name}님 회원가입 완료하였습니다`);
            // ...
          })
          .catch((error) => {
            console.log('error');
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("회원 실패하셨습니다.")
            // ..
          });
    const bucket = firestore.collection("회원관리").doc(email1||Id);
    
    bucket.set(
        { 
        "이름": Name,
        "아이디" : Id ,
        "패스워드" : Password, 
        "이메일" : email1,
        "전화번호":selfpone,
      });
    
}
    const ID_overlap = (e) => { 
        e.preventDefault();
        const Id = document.getElementById("Id").value
        const db = firestore.collection("회원관리");
            db.doc(Id).get().then((doc)=>{
                let person = doc.data();
                if(Id === person.아이디){
                    alert("아이디가 중복됩니다. 다른 아이디를 입력해주세요")
                }
                else{
                    alert("사용가능합니다.")
                }
        })
    }
    return (
        <TemplateLogin>
            <form>
                <ID>
                <InputID type="text" placeholder='아이디' id='Id'/>
                <Overlap type="button" onClick={ID_overlap}>ID중복확인</Overlap>
                </ID>
                <Pwd>
                    <InputPwd type="text" placeholder='비밀번호' id='Password'/>
                    <InputPwd type="text" placeholder='비밀번호확인'/>
                </Pwd>
                <Name type="text" placeholder="이름" id='Name' />
                <YMD>
                    <P>생년월일</P>
                    <Year id='year' value={selectedYear} onChange={handleSelectYear}>
                        {year()}
                    </Year>년 
                    <Year id='month' value={selectedMonth} onChange={handleSelectMonth}>
                        {month()}
                    </Year>월 
                    <Year id='day' value={selectedDay} onChange={handleSelectDay}>
                        {day()}
                    </Year>일 
                    </YMD>
                    <br /> 
                    <Skip>
                    <input type="radio"id='M'/>남
                    <input type="radio"id='W'/>여
                    </Skip> 
                    <Skip>
                    <Telepone type="text"id='tel1' placeholder='전화번호를 입력해주세요'/>
                    </Skip>
                    <Skip>
                    <Email type="text" placeholder='이메일을 입력해주세요' id='email1' />
                    </Skip>
                    <ButtonSkip>
                    <Button1 type='submit' onClick={refrash}>회원가입</Button1>
                    <Button2 type='button' onClick={goback}>뒤로가기</Button2>
                    </ButtonSkip>
            </form>
        </TemplateLogin>
    );
};

export default Register;