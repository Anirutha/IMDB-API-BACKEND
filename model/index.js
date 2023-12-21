const mongoose=require('mongoose');

const dataSchema=new mongoose.Schema({
 userid:{
    type:String,
 },
 original_title:{
    type:String,
 },
 original_release_date:{
    type:String,
 },
 original_poster_path:{
    type:String,
 },
})

module.exports=mongoose.model('Data',dataSchema)