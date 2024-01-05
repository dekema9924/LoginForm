const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
const app = express();
const Router = require('./routes/router')


//middleware
app.use(Router)
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))



app.listen(port, (req, res)=>{
    console.log(`port listening on port ${port}`)
});