const express = require('express');
const Router = express.Router();

//register form
Router.get('/router/register', (req, res)=>{
    res.render('./register')
})

//login form
Router.get('/router/login', (req,res)=>{
    res.render('./login')
})


module.exports = Router;