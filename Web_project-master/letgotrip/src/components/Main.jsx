import React from 'react';
import  styled  from 'styled-components';
import '../font/fontstyle.css';
const Maintext = styled.div`
    font-size : 130px;
    margin : 10% auto;
    color : white;
    text-align : center;
    font-family: 'establishRoomNo703OTF';
    font-width : 22px;
    }
`

const Main = () => {
    return (
        <div>
            <Maintext>Wellcome Trip To Korea</Maintext>
        </div>
    );
};

export default Main;