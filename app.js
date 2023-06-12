const express = require('express')
const app = express();
const services = require('./routers/services.js')


app.get('/',(request,response)=>{
    response.send("This is home page");
  
})

app.use('/services',services)

app.listen(3500);