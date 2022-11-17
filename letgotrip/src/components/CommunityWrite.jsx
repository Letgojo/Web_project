import React , {useState ,useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import text from '../img/text.png';
import Gium from '../img/gium.png';
import decoration from '../img/textDecoration.png';
import sortCenter from '../img/sortCenter.png';
import nomal from '../img/nomal.png';
import sortLeft from '../img/left.png';
import sortRight from '../img/right.png';
import post from '../img/imgpost.png';
import { firestore, storage } from '../firebase.js'

const Template  = styled.div`
    width : 1300px;
    height : 950px;
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
    border : 0px;
    max-width : 1290px; 
    max-height : 500px; 
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
const Textareadiv = styled.div`
    margin-top : 20px;
    max-width : 1300px;
    border: 1px solid #108057
`
const Image = styled.img`
width : 168px;
height : 175px;

`
const PostImg = styled.img`
    width : 178px;
    height : 189px;
    cursor : pointer;
`
const ImageBox = styled.label`
    width : 178px;
    height : 189px;
    margin-left : 30px;
`
const CommunityWrite = () => { 
    
    const navigate = useNavigate();
    const Goback = () => { 
        navigate(-1);
    }
    const [SelectText,setSelectText] = useState(20);
    const [Italic,setItalic ] = useState(false);
    const [value,Change] = useState("normal")
    const [widht,setwidht]=useState("normal")
    const [truewidth,trueChange] = useState(false)
    const [textdeco,settextdeco] = useState("none");
    const [true1,settrue1] = useState(false)
    const [Center, setCenter] = useState("none");
    const [Myimage, setMyimage] =useState([]);

    const handleSeletcenter = (e) => { 
        setCenter("center");
    }
    const handleSelectLeft = (e) => {
        setCenter("left");
    }
    const handleSelectRight  = (e) => { 
        setCenter("right");
    }
    const handleSelectdeco = (e) => { 
        true1===false?settextdeco("none"):settextdeco("underline")
        console.log(true1)
        settrue1((true1)=>!true1)
    }

    const handleSelectwidht = (e) =>{
        truewidth === false? setwidht("bold"):setwidht("normal");
        trueChange((truewidth) => !truewidth);
    }

    const handleSelectItalic =  (e) =>{
        Italic === false?Change("italic"):Change("normal");
        setItalic((Italic) => !Italic);
    }
    useEffect(()=>{
        console.log("랜더링됨")
        console.log(value)
    },[value])
    const handleSelectText = (e) => {
        setSelectText(e.target.value);
    };
    const Textsize = () => {
        const result = [];
        for (let i = 2; i < 100; i++) {
            result.push(<option key={i}value={i}>{i}</option>);
        }
        return result;
    };
    const fileInput = React.useRef(null);
    const handleSelectBtn =()=>{
        fileInput.current.click();
    }
    const Upload =async (e) => { 
        let today = new Date();   
        var year = today.getFullYear();
        var month = ('0' + (today.getMonth() + 1)).slice(-2);
        var day = ('0' + today.getDate()).slice(-2);
        var dateString = year + '-' + month  + '-' + day;
        
        var user = []
        const db =  firestore.collection("게시글");
        await db.get().then((result)=>{
            result.forEach((allDoc)=>{
                user.push(allDoc.data())
            })
        })
        var count =  user.length.toString();

        let sessionStorage = window.sessionStorage;
        e.preventDefault();
        const title = document.getElementById("title").value;
        const textbox = document.getElementById("textbox").value;
        const Storage = storage;

        var file =  document.querySelector("#input-file").files[0];
        var StorageRef = Storage.ref();
        var 경로 = StorageRef.child('image/'+file.name) //경로정하는부분
        var 업로드작업 = 경로.put(file)
        업로드작업.on( 'state_changed', 
        // 변화시 동작하는 함수 
        null, 
        //에러시 동작하는 함수
        (error) => {
          console.error('실패사유는', error);
        }, 
        // 성공시 동작하는 함수
        () => {
          업로드작업.snapshot.ref.getDownloadURL().then((url) => {
            console.log('업로드된 경로는', url);

            const bucket = firestore.collection("게시글").doc(count);
            bucket.set({
                "번호" : count,
                "제목": title,
                "내용" : textbox ,
                "작성자" : sessionStorage.getItem("name"), 
                "업로드날짜" : dateString,
                "이미지URL" : url,
            })
            alert('게시물이 업로딩');
            navigate('/Community');
          });
        }
    );

    }

    const addimage = e =>{
        const nowSelectImageList = e.target.files; //한번에 받은 파일리스트(object임)
        const nowImageURLList = [...Myimage]; //현재 Myimage 복사하고
        for(let i=0;i<nowSelectImageList.length; i+=1){
            // nowSelectImageList object를 i로 이용해서 돌린다
        const nowImageUrl = URL.createObjectURL(nowSelectImageList[i]);
        //미리보기 가능하게 변수화
        nowImageURLList.push(nowImageUrl)
        //복사한 myImage에 추가
        }
        setMyimage(nowImageURLList);
        
    };
    console.log(Myimage)
return (
        <Template>
           <WriteLogo>글쓰기</WriteLogo> 
           <WriteTitle type="text" placeholder='제목' id="title"/>
           <WriteContent>
            <Text src={text} alt="굵기" onClick={handleSelectwidht}/>
            <GIUM src={Gium} atl="기울기" onClick={handleSelectItalic}/>
            <Decoration src={decoration} atl="밑줄" onClick={handleSelectdeco} />
            <SortCenter src={sortCenter} atl="중앙" onClick={handleSeletcenter} />
            <SortCenter src={nomal} atl="일반" />
            <SortCenter src={sortLeft} atl="왼쪽정렬" onClick={handleSelectLeft} />
            <SortCenter src={sortRight} atl="오른쪽정렬" onClick={handleSelectRight} />
            <TextSize value={SelectText} onChange={handleSelectText}>
                {Textsize()}
            </TextSize>
           </WriteContent>
            <Textareadiv>
           <WriteMain  style={{fontSize:`${SelectText}px`,fontStyle:`${value}`,fontWeight:`${widht}`,textDecoration:`${textdeco}`,textAlign:`${Center}`}}cols="100" rows="20" placeholder='여기에 입력해주세요' id='textbox'>
           </WriteMain>
           <ImageBox htmlFor="input-file" onChange={addimage} >
           {Myimage.map((element,index)=> (
            <Image src={element} alt={index} key={index} /> 
                    ))}
            <PostImg src={post} alt="이미지" onClick={handleSelectBtn}/><input type="file" ref={fileInput} id="input-file" style={{ display: "none" }} multiple="multiple" /></ImageBox>
  
            </Textareadiv>
           <Buttondiv>
           <Success type='button' onClick={Upload}>저장</Success>
           <Cancel type='button' onClick={Goback}>취소</Cancel>
           </Buttondiv>
        </Template>
    );
};

export default CommunityWrite;