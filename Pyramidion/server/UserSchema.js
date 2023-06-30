const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    id:{type:Number,required:true}, 
    title:{type:String,required:true},
    body:{type:String,required:true}
});

const Movie=mongoose.model('movie',UserSchema)
module.exports = {Movie}