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
  
  console.log("출발날짜",startday);
  console.log("도착날짜",finishday);
  console.log("출발시간",starttime);
  console.log("출발지역",startlocation);
  console.log("도착지역",finishlocation);
})

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'../letgotrip/build/index.html'))
})  
app.listen(3000,function(){
  console.log('listening on 3000')
})