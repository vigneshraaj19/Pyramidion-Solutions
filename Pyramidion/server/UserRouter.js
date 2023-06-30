const router= require('express').Router();
const{Movie}=require('./UserSchema')

router.get('/movies',async (req,res) =>{  
    try{
        const MovieData=await Movie.find({});
        console.log(MovieData)
        res.send(MovieData)
    }   
    catch(err){
       res.status(500).send({message:"Internal server error"});
    }  
});

router.post("/movies/add",async  (req,res)=>{  
    try{
    const result = new Movie({
        id:req.body.id,
        title:req.body.title,
        body:req.body.body
    }).save();
    res.status(200).send({message:"register successfully",data:result});
}
catch(err){
    res.status(500).send({message:"Internal server error"});
 }  
   
});

  router.get("/moviedetails/:id", async  (request, response) =>{
    try{
    const { id } = request.params;
    console.log(id)
    
   const SelectedMovie = await Movie.findOne({ id: id });
   response.send(SelectedMovie);
    }
    catch(err){
        response.status(500).send({message:"Internal server error"});
     }  
  });



module.exports=router;