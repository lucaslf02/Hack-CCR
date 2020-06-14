const express = require("express");
const router = express.Router();

router.get("/login", (req,res)=>{
    try{
        let auth = req.body;
        if(auth.login === "jose" && auth.pw === "1234"){
            console.log("Ok access");
            res.status(200).send({isAuth: true});
        }else{
            console.log("Access denied");
            res.status(401).send({isAuth: false,error: "Access denied"});
        }
    }catch(err){
        console.log(err.message);
        res.status(400).send({isAuth: false,error: err.message});
    }
});

router.get("/:id", (req,res)=>{
    try{
        console.log("In progress2");
        res.status(200).send("In Progress2");
    }catch(err){
        console.log(err.message);
        res.status(400).send({error: err.message});
    }
})

router.get("/", (req,res)=>{
    try{
        console.log("In progress");
        res.status(200).send("In Progress");
    }catch(err){
        console.log(err.message);
        res.status(400).send({error: err.message});
    }
})




module.exports = router;