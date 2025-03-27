const mongoose=require('mongoose')
const TodolistModelSchema =  new mongoose.Schema({
    title: String,created:{type:Date,default:Date.now}
})
module.exports=mongoose.model('list',TodolistModelSchema)