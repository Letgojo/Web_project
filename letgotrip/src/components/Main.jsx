import React from 'react';
import  styled  from 'styled-components';
const Maintext = styled.div`
    font-size : 100px;
    margin : 10% auto;
    color : white;
    text-align : center;
`

const Main = () => {
    return (
        <div>
            <Maintext>Wellcome Trip <br /> To Korea</Maintext>
        </div>
    );
};

export default Main;