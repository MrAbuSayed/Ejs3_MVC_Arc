const { addUser, getUser } = require('../controlller/user.controler');

const router=require('express').Router();



router.get('/user',addUser);

router.post('/user',getUser);

module.exports =router;