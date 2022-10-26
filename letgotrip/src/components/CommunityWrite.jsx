import React , {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import text from '../img/text.png';
import Gium from '../img/gium.png';
import decoration from '../img/textDecoration.png';
import sortCenter from '../img/sortCenter.png';
import nomal from '../img/nomal.png';
import sortLeft from '../img/left.png';
import sortRight from '../img/right.png';


const Template  = styled.div`
    width : 1300px;
    height : 900px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
    padding :40px
`
const WriteLogo = styled.div`
    font-size : 30px;
`
const WriteTitle = styled.input`
    width: 695px;   
    height : 49px;
    border : 1px solid #108057;
    font-size : 20px;
    margin-top : 30px;
    padding-left : 20px;
`
const WriteContent = styled.div`
    width : 654px;
    height : 49px;
    border : 1px solid #108057;
    border-radius : 30px;
    margin-top: 30px;
    display : flex;
`
const WriteMain = styled.textarea`
    margin-top : 30px;  
    font-size : 15px;
    border : 1px solid #108057; 
    `
const Success = styled.button`
    cursor : pointer;
    width : 115px;
    height : 39px;
    background : #53FF28;
    border : 0px;
    border-radius: 30px;
`
 
const Cancel = styled.button`
    width : 115px;
    height : 39px;
    background-color : #EE7048;
    cusror : pointer;
    border : 0px;
    border-radius: 30px;
    margin-left : 30px;
`
const Buttondiv = styled.div`
    display : flex;
    margin : 40px 0 0 500px;
`
const Text = styled.img`
    width :24px;
    height : 24px;
    margin : 11px 0 0 40px;
    cursor : pointer;
`
const GIUM = styled.img`
    width :24px;
    height : 26px;
    margin : 11px 0 0 30px;
    cursor : pointer;
`
const Decoration = styled.img`
    width :24px;
    height : 30px;
    margin : 11px 0 0 30px;
    cursor : pointer;
`
const SortCenter = styled.img`
    width   :24px;
    height : 30px;
    margin : 11px 0 0 40px;
    cursor : pointer;
`
const TextSize = styled.select`
    margin : 6px 0 0 30px;
    widht:24px;
    height :40px;
`

const CommunityWrite = () => { 
    const navigate = useNavigate();
    const Goback = () => { 
        navigate(-1);
    }
    const [SelectText,setSelectText] = useState(10);
    const handleSelectText = (e) => {
        setSelectText(e.target.value);
    };
    const Textsize = () => {
        const result = [];
        for (let i = 2; i < 100; i++) {
            result.push(<option value={i}>{i}</option>);
        }
        return result;
    };
    return (
        <Template>
           <WriteLogo>글쓰기</WriteLogo> 
           <WriteTitle type="text" placeholder='제목' />
           <WriteContent>
            <Text src={text} alt="굵기"/>
            <GIUM src={Gium} atl="기울기"/>
            <Decoration src={decoration} atl="밑줄" />
            <SortCenter src={sortCenter} atl="중앙" />
            <SortCenter src={nomal} atl="일반" />
            <SortCenter src={sortLeft} atl="왼쪽정렬" />
            <SortCenter src={sortRight} atl="오른쪽정렬" />
            <TextSize value={SelectText} onChange={handleSelectText}>
                {Textsize()}
            </TextSize>
           </WriteContent>
           <WriteMain name="" id="" cols="130" rows="30" placeholder='여기에 입력해주세요'>
           </WriteMain>
           <Buttondiv>
           <Success type='submit'>저장</Success>
           <Cancel type='button' onClick={Goback}>취소</Cancel>
           </Buttondiv>
        </Template>
    );
};

export default CommunityWrite;