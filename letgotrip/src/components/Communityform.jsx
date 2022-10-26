import React from 'react';
import  styled  from 'styled-components';
import {Link} from 'react-router-dom'
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
const Write = styled.div`
    cursor : pointer;
    font-size : 30px;
`
const Communityform = () => {
    return (
        <Template>
            <Writeform>
                <Link to="/Community/Write" style={{ textDecoration:"none",color:"black"}}><Write>글쓰기</Write></Link>
                <Search>
                <SearchInput type="text" /><span><SearchOutlined /> 검색</span>
                </Search>
            </Writeform>
        </Template>
    );
};

export default Communityform;