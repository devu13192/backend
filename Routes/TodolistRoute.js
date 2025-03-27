const mongoose= require('require')
const express = require('express');
const Todolistmodel=require("../Model.Todolistmodel")
const router=express.Router()
router.post('/get',async(req,res)=>{
    const data=new Todolistmodel(req.body)
   await data.save()
   return res.status(200).json({result:true})
})   