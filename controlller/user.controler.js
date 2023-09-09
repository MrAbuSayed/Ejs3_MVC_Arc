const users = require("../model/user.model");
const path=require('path');

exports.addUser=(req,res)=>{
    res.sendFile(path.join(__dirname+"/../view/user.html"));
};

exports.getUser=(req,res)=>{
    const username=req.body.username;
    const email=req.body.email;

    users.push({username,email});
    
    res.status(201).json({
        users
    })
};