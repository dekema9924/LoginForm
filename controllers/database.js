
const mongoose = require('mongoose')
require('dotenv').config()

console.log(process.env.MONGO_URL)

async function connect(){
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('connected to db');
    }catch(error){
       console.log(error)
    }
}
connect();
const UsersSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email: {type:String, required: true},
    password:{type:String, required:true}
})
const newUser = mongoose.model("newuser", UsersSchema);

module.exports = newUser




