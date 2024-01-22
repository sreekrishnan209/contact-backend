// Node + Mongodb connection

// import mongoose
const mongoose = require('mongoose')

// connection string
mongoose.connect('mongodb://localhost:27017/CMS')

//  create modal
const contact = mongoose.model('contact',{
    id:String,
    name:String,
    address:String,
    email:String,
    phonenumber:String
})

module.exports={
    contact
}