const express=require('express');
const Product=require('../models/products')

//get
const getAllProducts=async(req,res)=>{
    try {
        const categoryType=req.query.category;
        if(categoryType==="all"){
            const data=await Product.find();
            res.status(200).json(data);
        }
        else{
            const data=await Product.find({category:categoryType});
            res.status(200).json(data);
        }
       
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}
const getSingleProduct=async(req,res)=>{
    const id=req.params.id;
    try {
        const data = await Product.find({ _id: id });
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}
//create
const createProduct=async(req,res)=>{
    const data=req.body;
    const newProduct=new Product(data);
    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

//update
const updateProduct=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
//delete
const deleteProduct=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

exports.getAllProducts=getAllProducts;
exports.getSingleProduct=getSingleProduct;
exports.createProduct=createProduct;
exports.updateProduct=updateProduct;
exports.deleteProduct=deleteProduct;