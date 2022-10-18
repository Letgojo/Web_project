import React from 'react';
import  styled  from 'styled-components';
const Maintext = styled.div`
    font-size : 100px;
    margin : 10% auto;
    color : white;
    text-align : center;
    @font-face {
        font-family: 'KOTRA_BOLD-Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.1/KOTRA_BOLD-Bold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
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