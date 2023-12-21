const express=require('express');
const Model=require('../model');

const router=express.Router();

router.post('/movie',async (req,res)=>{
  const data=new Model({
   userid:req.body.userid,
   original_title: req.body.original_title,
   original_release_date:req.body.original_release_date,
   original_poster_path:req.body.original_poster_path,
   
  })
  try{
      const dataToSave= await data.save();
      res.status(201).json(dataToSave);
  }
  catch(error){
    res.status(400).json({message:error.message})

  }
})

router.get('/movies', async(req,res)=>{
  try{
      const data=await Model.find();
      res.json(data);
  }
  catch(error){
      res.status(500).json({message:error.message})
  }
})

router.get('/movie/:id', async(req,res)=>{
  try{
      const data=await Model.findById(req.params.id);
      res.json(data);
  }
  catch(error){
      res.status(500).json({message:error.message})
  }
})

router.put('/movie/:id', async(req,res)=>{
  try{
      
      const result=await Model.findByIdAndUpdate(req.params.id,req.body,
          {
          new:true
      })
      res.json(result);
  }
  catch(error){
      res.status(500).json({message:error.message})
  }
})

router.delete('/movie/:id', async(req,res)=>{
  try{
      
      const result=await Model.findByIdAndDelete(req.params.id)
      res.send('Data Successfully deleted');
  }
  catch(error){
      res.status(500).json({message:error.message})
  }
})

module.exports=router;