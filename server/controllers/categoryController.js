const express=require('express');
const Category=require('../models/categories')

const addCategory=async(req,res)=>{
    const data=req.body;
    try {
        const newCategory=new Category(data);
        await newCategory.save();
        res.status(201).json({message:"Category Created Successfully!",status:200,error:false});
    } catch (error) {
        res.status(409).json({ message: "Cannot Create Category Try Again Later!",status:200,error:true });
    }
}

const getCategories=async(req,res)=>{
    try {
        const data=await Category.find()
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}
exports.addCategory=addCategory;
exports.getCategories=getCategories;