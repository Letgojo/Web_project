import React ,{useState,useEffect}from 'react';
import  styled  from 'styled-components';
import {Link} from 'react-router-dom'
import {SearchOutlined}  from "@ant-design/icons"
import '../font/fontstyle.css';
import { firestore } from '../firebase.js'
import Postlistfrom from './Postlist';
import Writeimg from '../img/edit.png';
import CommunityDetail from './CommunityDetail';

const Template  = styled.div`
    width : 1200px;
    max-height:100%
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
    font-family: 'HallymGothic-Regular';
    padding 20px;
`
const Writeform = styled.div`
    display : flex; 
    margin : 30px;
    margin-left : 30px;
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
    margin-right : 30px;
`
const SearchInput = styled.input`
    width : 300px;
    height : 30px;
    margin-right : 10px;
    border-radius : 30px;
    border : 0px;   
    border : 1px solid black;
    margin-bottom : 10px;
    `
const Write = styled.div`
    cursor : pointer;
    font-size : 30px;
`
const WriteImgage  = styled.img`
    width :30px;
    height : 30px;
    margin-left:10px;
`
const Communityform = ({form}) => {
    const [Postlist, setPostList] = useState([]);
    
    const user= [];
    useEffect(()=>{
        setTimeout(async()=>{
    const db =  firestore.collection("게시글");
    await db.get().then((result)=>{
        result.forEach(async (allDoc)=>{
            user.push(allDoc.data())
        })
    })
    console.log(user.length)
},500)
},[setPostList])


// const Storage = storage;
// const StorageRef = ref(Storage, 'image/');
// const URL = [];
// listAll(StorageRef)
//   .then((res) => {
//     res.prefixes.forEach((folderRef) => {
//         console.log("1 : ",folderRef)
//       // All the prefixes under listRef.
//       // You may call listAll() recursively on them.
//     });
//     res.items.forEach((itemRef) => {
//         URL.push(itemRef.name);
//         const StorageRef1 = ref(Storage, 'image/'+itemRef.name);
//         console.log("나는스토리지",storage,"나는 스토리지 Ref",StorageRef);
//         uploadBytes(StorageRef1,itemRef.name).then((snapshot) => {
//             console.log(snapshot,'이건 스냅샷');
//             getDownloadURL(StorageRef1).then((url)=>{
//                 console.log("나는 URL ",url)
//             })
//           });
     
//     });
//   }).catch((error) => {
//     console.log(error);
//     // Uh-oh, an error occurred!
//   });
//   useEffect(()=>{
//   URL.map((element)=>(
//     console.log(element)
//   ))
// })
  
// //   const URLlink = 'image/'+URL
// //   console.log(URLlink)
// useEffect(()=>{
//     const storageRef = ref(storage, 'image/');

// },[])






useEffect(()=>{
    setTimeout(()=>{
    user.map((element,index)=>(
        setPostList((Postlist)=> [
            ...Postlist,
            {id:element.번호,name:element.작성자, title:element.제목, content:element.내용 ,Url:element.이미지URL ,upload:element.업로드날짜},
        ])))
    },1000)
},[setPostList])

    return ( 
        <Template>
            <Writeform>
                <Link to="/Community/Write" style={{ textDecoration:"none",color:"black"}}><Write>글쓰기<WriteImgage src={Writeimg} alt="글쓰기" /></Write></Link>
                <Search>
                <SearchInput type="text" /><span><SearchOutlined /> 검색</span>
                </Search>
            </Writeform>
            <div>
                <ul>
                    {Postlist.map((element,index) => (                     
                        <Link to={`/Community/detail/${index}`}style={{textDecoration:"none",color:"black"}} state={{id:element.id,name:element.name,title:element.title,content:element.content,upload:element.upload,Url:element.Url}}> 
                        <Postlistfrom
                            key={index}
                            id={element.id}
                            Url={element.Url}
                            name={element.name}
                            title={element.title}
                            content={element.content}
                            upload={element.upload}
                />
                </Link>
              ))
              }
              
                </ul>
            </div>
        </Template>
    );
};

export default Communityform;