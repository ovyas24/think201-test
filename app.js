const express = require("express")
const ejs = require("ejs")
const mongoose = require("mongoose")

const app = express();
const port = process.env.port || 3000

//connect database

//init
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

//routes
app.use("/",require("./routes/index"))

//listening to port
app.listen(port,(req,res)=>{
    console.log(`App running on port ${port}`);
})