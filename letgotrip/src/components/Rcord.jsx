import { flexbox } from "@mui/system";
import React, {useState } from "react";
import bgImage from "./img/KakaoTalk_Photo_2022-11-11-17-38-29.jpeg";
import busanimage from "./img/Screenshot 2022-11-11 at 9.12.39 PM.png"
import andongimage from "./img/Screenshot 2022-11-11 at 9.13.20 PM.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}

function App() {
  const [date, setDate] = useState();
  return (
      <div
        class="bg_image"
        style={{
          backgroundImage: 'url('+bgImage+')',
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
        }}
    >          
      <Box
      style={{
        backgroundColor: 'white',
        position: 'absolute',
        borderRadius: 30,
        minHeight: 750,
        padding: 12,
        marginLeft: 200,
        marginBottom: 50,
        marginTop: 50,
        width: 1020,      
      }}
      >
        <div>
          <p style={{ color: 'black', display: "flex", position: "fixed" }} >기간검색 </p>
          
          <input style={{
          height: 30,
          width: 110,
          borderRadius: 20,
          marginLeft: 70,
          marginBottom: 10,
          marginTop: 10,

        }} type="date" onChange={e => setDate(e.target.value)} />

        </div>    
        <Box
      style={{
        backgroundColor: 'white',
        display: 'inline-block',
        position: 'flex',
        border: '1px solid black',
        borderRadius: '30px',
        minHeight: 300,
        padding: 12,
        marginLeft: 100,
        marginBottom: 50,
        marginTop: 0,
        width: 800,      
      }}
        >
          <div >
            <img style={{
              width: 250,
              height: 300,
              marginLeft: 10,
            }} src={busanimage} alt="" />
          </div>
          <div>
            <h1 style={{
              fontSize: '35px',
              color: 'black',
              display: 'flex',
              marginLeft: 300,
              marginTop: -300,
              textDecorationLine: 'underline',
            }}>부산</h1>
          </div>
          <div style={{
            color: 'black',
            marginLeft: 300,
            marginTop: 60,
            fontSize: '25px',
          }}> 
            <p>기간 : 2022.10.06 ~ 10.09</p>
            <p>예상 경비 : 320,000 원</p>
            <p>실제 경비 : 400,000원</p>
          </div>
          <div style={{
            fontSize: '20px',
            color: 'black',
            marginLeft: 750,
            marginTop: -260,

          }}>
            <FontAwesomeIcon icon={faTrashCan}/>
          </div>
        </Box>
        <Box
      style={{
        backgroundColor: 'white',
        position: 'absolute',
        border: '1px solid black',
        borderRadius: '30px',
        minHeight: 300,
        padding: 12,
        marginLeft: 100,
        marginBottom: 50,
        marginTop: -20,
        width: 800,      
      }}
        >
           <div >
            <img style={{
              width: 250,
              height: 300,
              marginLeft: 10,
            }} src={andongimage} alt="" />
          </div>
          <div>
            <h1 style={{
              fontSize: '35px',
              color: 'black',
              display: 'flex',
              marginLeft: 300,
              marginTop: -300,
              textDecorationLine: 'underline',
            }}>안동</h1>
          </div>
           <div style={{
            color: 'black',
            marginLeft: 300,
            marginTop: 50,
            fontSize: '25px',
          }}> 
            <p>기간 : 2022.10.06 ~ 10.09</p>
            <p>예상 경비 : 320,000 원</p>
            <p>실제 경비 : 400,000원</p>
          </div>
           <div style={{
            fontSize: '20px',
            color: 'black',
            marginLeft: 750,
            marginTop: -250,

          }}>
            <FontAwesomeIcon icon={faTrashCan}/>
          </div>
    </Box>
    </Box>
    </div>
    
      
  );
}

export default App;