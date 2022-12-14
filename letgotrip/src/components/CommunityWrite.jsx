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
        console.log("????????????")
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
        const db =  firestore.collection("?????????");
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
        var ?????? = StorageRef.child('image/'+file.name) //?????????????????????
        var ??????????????? = ??????.put(file)
        ???????????????.on( 'state_changed', 
        // ????????? ???????????? ?????? 
        null, 
        //????????? ???????????? ??????
        (error) => {
          console.error('???????????????', error);
        }, 
        
        // ????????? ???????????? ??????
        () => {
          ???????????????.snapshot.ref.getDownloadURL().then((url) => {
            console.log('???????????? ?????????', url);
            
            const bucket = firestore.collection("?????????").doc(count);
            bucket.set({
                "??????" : count,
                "??????": title,
                "??????" : textbox,
                "?????????" : sessionStorage.getItem("name"), 
                "???????????????" : dateString,
                "?????????URL" : url,
                "?????????":0,
                "?????????" : 0
            })
            alert('???????????? ?????????');
            navigate('/Community');
          });
        }
    );

    }
    const addimage = e =>{
        const nowSelectImageList = e.target.files; //????????? ?????? ???????????????(object???)
        const nowImageURLList = [...Myimage]; //?????? Myimage ????????????
        for(let i=0;i<nowSelectImageList.length; i+=1){
            // nowSelectImageList object??? i??? ???????????? ?????????
        const nowImageUrl = URL.createObjectURL(nowSelectImageList[i]);
        //???????????? ???????????? ?????????
        nowImageURLList.push(nowImageUrl)
        //????????? myImage??? ??????
        }
        setMyimage(nowImageURLList);
        
    };
    console.log(Myimage)
return (
        <Template>
           <WriteLogo>?????????</WriteLogo> 
           <WriteTitle type="text" placeholder='??????' id="title"/>
           <WriteContent>
            <Text src={text} alt="??????" onClick={handleSelectwidht}/>
            <GIUM src={Gium} atl="?????????" onClick={handleSelectItalic}/>
            <Decoration src={decoration} atl="??????" onClick={handleSelectdeco} />
            <SortCenter src={sortCenter} atl="??????" onClick={handleSeletcenter} />
            <SortCenter src={nomal} atl="??????" />
            <SortCenter src={sortLeft} atl="????????????" onClick={handleSelectLeft} />
            <SortCenter src={sortRight} atl="???????????????" onClick={handleSelectRight} />
            <TextSize value={SelectText} onChange={handleSelectText}>
                {Textsize()}
            </TextSize>
           </WriteContent>
            <Textareadiv>
           <WriteMain  style={{fontSize:`${SelectText}px`,fontStyle:`${value}`,fontWeight:`${widht}`,textDecoration:`${textdeco}`,textAlign:`${Center}`}}cols="100" rows="20" placeholder='????????? ??????????????????' id='textbox'>
           </WriteMain>
           <ImageBox htmlFor="input-file" onChange={addimage} >
           {Myimage.map((element,index)=> (
            <Image src={element} alt={index} key={index} /> 
                    ))}
            <PostImg src={post} alt="?????????" onClick={handleSelectBtn}/><input type="file" ref={fileInput} id="input-file" style={{ display: "none" }} multiple="multiple" /></ImageBox>
  
            </Textareadiv>
           <Buttondiv>
           <Success type='button' onClick={Upload}>??????</Success>
           <Cancel type='button' onClick={Goback}>??????</Cancel>
           </Buttondiv>
        </Template>
    );
};

export default CommunityWrite;