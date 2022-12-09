const express=require('express');
const Message=require('../models/message')

const sendMessage=async(req,res)=>{
    const data=req.body;
    try {
        const newOrder=new Message(data);
        await newOrder.save();
        res.status(201).json({message:"Message Send Successfully!",status:200,error:false});
    } catch (error) {
        res.status(409).json({ message: "Cannot Send Message Try Again Later!",status:200,error:true });
    }
}

exports.sendMessage=sendMessage;
