
const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/Blogs').then(()=>{
//     console.log('connected');
// });

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/Users')
    }catch{
        if(err)console.err
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




