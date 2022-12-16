const mongoose=require('mongoose');
const { Schema } = mongoose;
const categoriesSchema = new Schema({
    name:{type:String,required:true},
    img:{type:String},
    slug:{type:String,required:true,unique:true},
    subCategory:{type:Array}
},{timeStamps:true});

const Category = mongoose.model('categories',categoriesSchema  );
module.exports=Category;