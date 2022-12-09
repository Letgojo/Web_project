import React,{useEffect ,useState}  from 'react';
import styled from 'styled-components';
import { firestore } from '../firebase.js'
import { Spinner } from 'react-awesome-spinners'

const Template  = styled.div`
    width : 1300px;
    height : 700px;
    border : 1px solid black;
    background-color : white;
    margin : 5% auto;   
    border-radius : 30px;
    font-family: 'HallymGothic-Regular';
    display : flex;
    padding-top : 10px;
`
const MAP = styled.div`
width: 500px;
height: 600px;


border-style: solid;
border-width: medium;
border-color: #D8D8D8;
`
const Mapform = styled.div`
width: 500px;
height: 500px;
margin-top : 60px;
margin-left : 30px; 
border : 1px solid black;
`
const Resultform = styled.div`
    margin-top : 60px;
    margin-left : 30px;
`
//결과 날짜 도출
const Dayform = styled.div`
    margin-left: 30px;
    font-size : 30px;
    height:90px;
    width :650px;
    border-bottom  : 1px dashed black;
`
//경비 도출
const Pay  = styled.div`
border-bottom  : 1px dashed black;
width : 650px;
margin-left : 30px;
font-size : 25px;
`
//로딩 폼
const Falseform = styled.div`
    width: 500px;
    height: 250px;
    text-align : center;
    padding-top: 200px;
`
const DayUl = styled.ul`
    display:flex;
    justify-content : space-between;
`
const Plan = styled.div`

`
const PlanList = styled.li`
    font-size : 40px;
`
const TripPlanNo1 = () => {
    let sessionStorage = window.sessionStorage;
    let point = [] 
    const [where , setwhere] = useState([]);
    const  [Loading , setLoading] = useState(false) 
    const [post,setpost] = useState([]);  
    let user = []
    let map = []
    const db = firestore.collection("먹거리").doc("부산").collection("영도구");
    db.get().then((result)=>{
        result.forEach((allDoc)=>{
            user.push(allDoc.data())
        })
    })


    const db1 = firestore.collection("회원관리").doc("kim").collection('2022-12-10-1')
    let person = [];
    db1.get().then((result)=>{
        result.forEach((allDoc)=>{
            person.push(allDoc.data())
        })
  })
  useEffect(()=>{
    setTimeout(() => {
person.map((element)=>(
    setpost((post)=> [
        ...post,
        {   
            cafename:element.카페이름,lunchname : element.점심이름,tripname : element.관광지이름,dinnername : element.저녁이름,Day: element.날짜
        }
    ])
    
    ))
}, 3000);
},[post]);
useEffect(()=>{
    setTimeout(() => {
person.map((element)=>(
    setwhere((where)=> [
        ...where,
        {
         lunchw:element.점심위도, lunchy:element.점심경도,lunchname:element.점심이름,
         cafew:element.카페위도, cafey:element.카페경도,cafename:element.카페이름,
         dinnerw:element.저녁위도, dinnery:element.저녁경도,dinnername:element.저녁이름,
         tripw:element.관광지위도, tripy:element.관광지경도,tripname:element.관광지이름,
        }
    ],
)))
}, 1000);
},[]);


    const new_script =  src => { 
        console.log(point)
        return new Promise((resolve, reject) => { 
          const script = document.createElement('script'); 
          script.src = src; 
          script.addEventListener('load', () => { 
            resolve(); 
          }); 
          script.addEventListener('error', e => { 
            reject(e); 
          }); 
          document.head.appendChild(script); 
        });  
      };
      try{
      useEffect(()=>{
        setTimeout( () => {  
            //카카오맵 API 실행
        const my_script =  new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=776eedc483ab8997f8c9680da89c4b03');
        my_script.then(() => { 
              console.log('script loaded!!!');  
              const kakao = window['kakao']; 
              setLoading(true);
              kakao.maps.load(() => { 
                
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
            mapOption = { 
                center: new kakao.maps.LatLng(35.0907614, 129.0768095), // 지도의 중심좌표
                level: 8 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
            
        // // 지도를 클릭했을때 클릭한 위치에 마커를 추가하도록 지도에 클릭이벤트를 등록합니다
        // kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
        //     // 클릭한 위치에 마커를 표시합니다 
        //     addMarker(mouseEvent.latLng);             
        // });

        // 지도에 표시된 마커 객체를 가지고 있을 배열입니다
        var markers = [];

        // 마커 하나를 지도위에 표시합니다 
        where.map((element)=>(
            addMarker(new kakao.maps.LatLng(element.lunchw,element.lunchy)),
            addMarker(new kakao.maps.LatLng(element.cafew,element.cafey)),
            addMarker(new kakao.maps.LatLng(element.tripw,element.tripy)),
            addMarker(new kakao.maps.LatLng(element.dinnerw,element.dinnery))
            ))
        console.log("위도경도 결과",where)
    //     {Postlist.map((element,index) => (                     
    //         <Postlistfrom
    //             key={index}
    //             name={element.name}
    //             title={element.title}
    //             content={element.content}
    // />

        // 마커를 생성하고 지도위에 표시하는 함수입니다
        async function addMarker(position) {
            
            // 마커를 생성합니다
        var marker =await new kakao.maps.Marker({
                position: position
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
            
            // 생성된 마커를 배열에 추가합니다
            markers.push(marker);
        }

        // 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
        async function setMarkers(map) {
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(map);
            }            
        }

        // "마커 보이기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수입니다
        async function showMarkers() {
            setMarkers(map)    
        }

        // "마커 감추기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에서 삭제하는 함수입니다
        async function hideMarkers() {
            setMarkers(null);    
        }
        var linePath = [
            where.map((element)=>(
                new kakao.maps.LatLng(element.lunchw,element.lunchy),
                new kakao.maps.LatLng(element.cafew,element.cafey),
                new kakao.maps.LatLng(element.tripw,element.tripy),
                new kakao.maps.LatLng(element.dinnerw,element.dinnery)
                ))
        ];
        var polyline = new kakao.maps.Polyline({
            path: linePath, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: 'red', // 선의 색깔입니다
            strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
        });
        // 지도에 선을 표시합니다 
    polyline.setMap(map);  
    where.map((element,index)=>{
    var marker = new kakao.maps.Marker({
        map: map, 
        position : 
        new kakao.maps.LatLng(element.lunchw,element.lunchy),
    });
    var marker1 = new kakao.maps.Marker({
        map: map, 
        position : 
        new kakao.maps.LatLng(element.cafew,element.cafey),
    });
    var marker2 = new kakao.maps.Marker({
        map: map, 
        position : 
        new kakao.maps.LatLng(element.tripw,element.tripy),
    });
    var marker3 = new kakao.maps.Marker({
        map: map, 
        position : 
        new kakao.maps.LatLng(element.dinnerw,element.dinnery),
    });


    // 커스텀 오버레이에 표시할 컨텐츠 입니다
    // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
    // 별도의 이벤트 메소드를 제공하지 않습니다 
    var content = '<div class="wrap">' + 
                '    <div class="info">' + 
                '        <div class="title" style="padding :5px; background-color: white; margin-bottom: 110px; border-radius:30px; border:1px solid black;">' + 
                `            ${element.lunchname}` + 
                '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
                '        </div>' + 
                '    </div>' +    
                '</div>';
    var content1 = '<div class="wrap">' + 
    '    <div class="info">' + 
    '        <div class="title" style="padding :5px; background-color: white; margin-bottom: 110px; border-radius:30px; border:1px solid black;">' + 
    `            ${element.cafename}` + 
    '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>';
    var content2 = '<div class="wrap">' + 
    '    <div class="info">' + 
    '        <div class="title" style="padding :5px; background-color: white; margin-bottom: 110px; border-radius:30px; border:1px solid black;">' + 
    `            ${element.tripname}` + 
    '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>';
    var content3 = '<div class="wrap">' + 
    '    <div class="info">' + 
    '        <div class="title" style="padding :5px; background-color: white; margin-bottom: 110px; border-radius:30px; border:1px solid black;">' + 
    `            ${element.dinnername}` + 
    '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
    '        </div>' + 
    '    </div>' +    
    '</div>';            
    
    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    var overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition()       
    });
    var overlay1 = new kakao.maps.CustomOverlay({
        content: content1,
        map: map,
        position: marker1.getPosition()       
    });
    var overlay2 = new kakao.maps.CustomOverlay({
        content: content2,
        map: map,
        position: marker2.getPosition()       
    });
    var overlay3 = new kakao.maps.CustomOverlay({
        content: content3,
        map: map,
        position: marker3.getPosition()       
    });
    
    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        overlay.setMap(map);
        overlay1.setMap(map);
        overlay2.setMap(map);
        overlay3.setMap(map);
    });
    
    // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
    function closeOverlay() {
        overlay.setMap(null);     
    }  
})
    })
    })
}, 10000);
    },[where]) 
}catch{
    console.log("error")
}


    return (
        <Template>
            <Mapform>
            {Loading ? <MAP id='map' /> : <Falseform><Spinner />
            <br />잠시만 기다려 주세요.</Falseform>}
            </Mapform>
            <Resultform>
                <Dayform>
                    <DayUl>
                    <li>1일차</li>
                    <li>2일차</li>
                    <li>3일차</li>
                    </DayUl>
                </Dayform>
                <Pay>금액 : </Pay>
                <Plan>
                    <ul>
                        {post.map((element)=>(
                        <PlanList>
                            {element.점심이름}
                            {element.카페이름}
                            {element.관광지이름}
                            {element.저녁이름}
                        </PlanList>
                    ))}
                    </ul>
                </Plan>
            </Resultform>
        </Template>
    )
};

export default React.memo(TripPlanNo1);
