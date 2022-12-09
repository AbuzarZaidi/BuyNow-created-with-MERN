const mongoose=require('mongoose');
const { Schema } = mongoose;
const messagesSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    subject:{type:String,required:true},
    message:{type:String,required:true},
},{timeStamps:true});

const Message = mongoose.model('messages',messagesSchema  );
module.exports=Message;