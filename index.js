const express =require('express');
const path = require('path');
const app = express();
const { nextTick } = require('process');
const port = 5000 ;
app.use(date=(req,res,next)=>{

    var objDate = new Date();
    var hours = objDate.getHours();
    var day =objDate.getDay();
    if((hours >= 17 && hours <= 9)&&(day==0 || day==6)){
        res.send('We Are Closed');
    }
    else{
        next()
        
    }
})
app.use(express.static(path.join(__dirname,'public')));
app.listen(PORT,(err)=>
err? console.log(err):console.log(`service is runing on port ${port}`));