const express=require('express');
const router = require('./router/user.router');
const app=express();

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send(`<h1 style="text-align:center; margin:2rem;">Welcome to our MVC Architecture type Server</h1>
    <h2 style="text-align:center; margin:2rem;">MVC mean model , view , controller</h2>`)
});

app.use(router);

app.use((req,res,next)=>{
 res.status(404).json({
    message:"Error vi"
 });
});


module.exports=app;