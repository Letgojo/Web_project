import React from 'react';
import styled from 'styled-components';
import '../font/fontstyle.css';
const ListForm = styled.div`
    display : flex;
    margin-bottom : 30px;
    font-family: 'HallymGothic-Regular';
`
const ListImg = styled.div`
    width :282px;
    height : 352px;
    border : 1px solid black;
`
const ListText = styled.div`
    text-align : left;
    margin-left : 40px;
`
const Postlist = ({name,title,content}) => {
    return (
        <ListForm>
            <ListImg>
                111
            </ListImg>
            <ListText>
            작성자 :  {name}
            <br />
            제목 : {title}
            <br />
            내용 : {content}
            </ListText>
        </ListForm>
    );
};

export default Postlist;