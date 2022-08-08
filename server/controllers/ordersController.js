const express=require('express');
const Order=require('../models/order')

const createOrder=async(req,res)=>{
    const data=req.body;
    
    const newOrder=new Order(data);
    try {
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}
const getOrders=async(req,res)=>{
    try {
        
            const data=await Product.find();
            res.status(200).json(data);
        
       
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}
exports.createOrder=createOrder;
exports.getOrders=getOrders;