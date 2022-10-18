import React from 'react';
import  styled  from 'styled-components';
import {SearchOutlined}  from "@ant-design/icons"
const Template  = styled.div`
    width : 1300px;
    height : 1200px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
`
const Writeform = styled.div`
    display : flex; 
    margin : 30px;
    justify-content: space-between;
    font-size : 20px;
`
const Search = styled.div`
    width : 400px;
    background-color : #D9D9D9;
    border : 1px solid black;
    border-radius : 30px;
    text-align : center;
    padding-top : 10px; 
    margin-top : 10px;
    
`
const SearchInput = styled.input`
    width : 300px;
    height : 30px;
    margin-right : 10px;
    border-radius : 30px;
    border : 0px;   
    `

const Communityform = () => {
    return (
        <Template>
            <Writeform>
                <p>글쓰기</p>
                <Search>
                <SearchInput type="text" /><SearchOutlined /> 검색
                </Search>
            </Writeform>
        </Template>
    );
};

export default Communityform;