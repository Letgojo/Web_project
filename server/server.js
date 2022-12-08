const express = require('express');
const app = express()
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

// startday : moment(value).format("YYYY-MM-DD"),//출발날짜
// finishday : moment(value1).format("YYYY-MM-DD"),//도착날짜
// startTime : Oclock, //출발시간
// startLocation : StartLocation1, //출발지역
// finishLocation : FinishLocation, //도착지역
app.use(express.static(path.join(__dirname,'../letgotrip/build')))
app.post('/TripPlan/Yes1',(req,res)=>{
  const startday = req.body.startday;//출발날짜
  const finishday = req.body.finishday; //도착날짜
  const starttime = req.body.startTime; //출발시간
  const startlocation = req.body.startLocation; //출발지역
  const finishlocation = req.body.finishLocation; //도착지역
  const Trans = req.body.Tran;
  const people = req.body.people; //인원
  
  console.log("출발지와 도착지")
  console.log("출발날짜",startday);
  console.log("도착날짜",finishday);
  console.log("출발시간",starttime);
  console.log("출발지역",startlocation);
  console.log("도착지역",finishlocation);
  console.log("인원",people)
  console.log("교통수단",Trans)
  console.log("=========================================")
})

// startday : StartDay,//출발날짜
// finishday : FinishDay,//도착날짜
// startTime : StartTime, //출발시간
// startLocation : StartLocation, //출발지역
// finishLocation : finishLocation, //도착지역
// hotelname : Hotelname,
// people : people,
// Experience : experience, 
// Theme : theme,
// Eat: eat,

app.post('/TripPlan3',(req,res)=>{
  const startday = req.body.startday;//출발날짜
  const finishday = req.body.finishday; //도착날짜
  const starttime = req.body.startTime; //출발시간
  const startlocation = req.body.startLocation; //출발지역
  const finishlocation = req.body.finishLocation; //도착지역
  const people = req.body.people; //인원
  const experience = req.body.Experience;//체험
  const Theme = req.body.Theme;//테마 
  const Eat = req.body.Eat// 맛집
  const car = req.body.car//교통수단


  console.log("카테고리 데이터전달")
  console.log("출발날짜",startday);
  console.log("도착날짜",finishday);
  console.log("출발시간",starttime);
  console.log("출발지역",startlocation);
  console.log("도착지역",finishlocation);
  console.log("인원",people);
  console.log("체험",experience);
  console.log("테마",Theme);
  console.log("맛집",Eat);
  console.log("교통수단",car);
  console.log("=========================================")
})


app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'../letgotrip/build/index.html'))
})  
app.listen(3000,function(){
  console.log('listening on 3000')
})