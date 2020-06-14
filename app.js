const express = require("express");
const fs = require("fs");

const user = require("./routes/user.js");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/user",user);

app.get("/",(req,res)=>{
    res.status(200).send("truliAPI is running").end();
});

app.listen(port, ()=>{
    try{
        console.log("API Listening at port: " + port);
    }catch(err){
        console.log(err.message);
    }
});


