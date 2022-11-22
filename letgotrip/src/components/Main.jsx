import React from 'react';
import  styled  from 'styled-components';
import '../font/fontstyle.css';
import '../App.css'
const Maintext = styled.div`
    font-size : 130px;
    color : white;
    text-align : center;
    font-family: 'establishRoomNo703OTF';
    font-width : 22px;
    }
`

const Main = () => {
    return (
        <div className='slider'>
            <Maintext>Wellcome Trip To Korea</Maintext>
        </div>
    );
};

export default Main;