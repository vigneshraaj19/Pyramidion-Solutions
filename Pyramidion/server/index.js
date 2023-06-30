const express=require("express")
const mongoose=require("mongoose");
const dotenv = require('dotenv');
const cors = require("cors"); 
 const Movies = require("./UserRouter");

//  MONGO_URL=mongodb+srv://vigneshraaj19:Vignesh806@cluster0.st0k3lv.mongodb.net/
//  PORT=5000

const app=express();

dotenv.config(); 
app.use( cors({ origin: "*"}) );

app.use(express.json());

app.get("/abc", async(req,res)=>{
    res.send("App works successfully")
})

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

   app.use('/api',Movies);

app.listen(process.env.PORT,()=>{
    console.log(`Server started on ${process.env.PORT}`)
})
