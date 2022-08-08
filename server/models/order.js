const mongoose=require('mongoose');
const { Schema } = mongoose;
const ordersSchema = new Schema({
    trackingId:{
        type:String,
        required:true
    },
    products:{
        type:[],
        required:true 
    },
    total:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    userInfo:{
        type:Object,
        required:true
    }
},{timeStamps:true});

const Order = mongoose.model('orders', ordersSchema );
module.exports=Order;