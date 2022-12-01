const express = require('express');
const app = express()
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname,'../letgotrip/build')))
app.post('/TripPlan/Yes1',(req,res)=>{
  const text = req.body.startday;
  console.log(text);
  console.log("Hi")
})
app.post('/TripPlan/Yes2',(req,res)=>{
  const text = req.body.startday;
  console.log(text);
  console.log("Hi2")
})

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'../letgotrip/build/index.html'))
})  
app.listen(3000,function(){
  console.log('listening on 3000')
})