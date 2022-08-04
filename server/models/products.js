const mongoose=require('mongoose');
const { Schema } = mongoose;
const productsSchema = new Schema({
name:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
longDescription:{
    type:String,
    required:true
},

category:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
rating:{
    type:[Number]
},
sizes:{
    type:[String]
},
colors:{
    type:[String]
},
imgUrl:{
    type:[String],
},
},{timeStamps:true});

const Product = mongoose.model('products', productsSchema );
module.exports=Product;