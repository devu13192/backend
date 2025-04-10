const express= require('express') 
const app = express()
app.use(express.json())
const cors=require('cors')
app.use(cors()) 
const todo=require('./Routes/TodolistRoute')
port=3002
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://devupriyaku2026:RIOtG1ZPPsZOahbo@cluster0.3ieffzo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("connected to database")
}) 
app.use(todo)
app.listen(port) 