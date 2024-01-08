const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');
const User = require('../controllers/database');
var bcrypt = require('bcryptjs');



Router.use(bodyParser.urlencoded({ extended: false }))

//register form
Router.get('/register', (req, res)=>{
    res.render('register');
})

//post user info to db
Router.post('/register',(req, res)=>{
      //get user data from form//
      const {name,email, password1 } = req.body

    //   create new user
    async function rundb() {
        //hash password
        bcrypt.hash(password1, 10, async function (err, hash) {
            const user = new User({
            name: `${name}`,
            email: `${email}`,
            password: hash
    })
     await user.save()
     console.log(user)

        });
    }
    rundb();
 



    res.redirect('/routes/login')
})

//login form
Router.get('/login', (req,res)=>{
    res.render('./login')
})

//check if user is in db
Router.post('/login', async (req, res)=>{
    const {email, password1 } = req.body
    //compoare pass
    let query =await User.findOne({email: email})
    let name = query.name;
    if(query){
        console.log('user found')
       bcrypt.compare(password1, query.password, function(err, result) {
        if(result == true){
            console.log(result)
            console.log(name)
            res.render('./success', {
                username: name
            })
        }
    })   
    }else{
        console.log('user not found')
        res.send('user not found')
    }
})


module.exports = Router;