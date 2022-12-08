const express=require('express');
const Product=require('../models/products')

//get
const getAllProducts=async(req,res)=>{
    try {
        const categoryType=req.query.category;
req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);
console.log(req.query.sort )
		let sortBy = {};
if(req.query.sort==="undefined,undefined"){
    sortBy={}
}else{
    if (sort[1]) {
        sortBy[sort[0]] = sort[1];
    } else {
        sortBy[sort[0]] = "asc";
    }
}
		
        console.log(sortBy)
        if(categoryType==="all"){

            const data=await Product.find().sort(sortBy);
            res.status(200).json(data);
        }
        else{
            const data=await Product.find({category:categoryType}).sort(sortBy);
            res.status(200).json(data);
        }
       
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}
const getSingleProduct=async(req,res)=>{
    const id=req.params.id;
    try {
        const data = await Product.find({category:"mobileAccessiories",category:"smartWatches"},{name:1}).limit(1);
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