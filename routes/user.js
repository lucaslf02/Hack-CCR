const express = require("express");
const fs = require("fs");
const { json } = require("express");
const { error } = require("console");
const router = express.Router();

const pathFile = "./json/users.json";

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
        let param = req.params.id;
        fs.readFile(pathFile, (err,data)=>{
            if(err){
                throw err;
            }else{
                let json = JSON.parse(data);
                let indexUser = json.users.findIndex(user => user.id === parseInt(param));
                if(indexUser < 0){
                    res.status(401).send("Id not Found");
                }else{
                    res.status(200).send(json.users[indexUser]);
                }
            }
        });
    }catch(err){
        console.log(err.message);
        res.status(400).send({error: err.message});
    }
});

router.get("/", (req,res)=>{
    try{
        fs.readFile(pathFile,"utf-8",(err,data)=>{
            if(err){
                throw err;
            }else{
                let json = JSON.parse(data);
                delete json.nextId;
                console.log(json);
                res.status(200).send(json);
            }
        });        
        // console.log("In progress");
        // res.status(200).send("In Progress");
    }catch(err){
        console.log(err.message);
        res.status(400).send({error: err.message});
    }
});

router.post("/",(req,res)=>{
    try{
        let newUser = req.body;
        fs.readFile(pathFile, "utf-8",(err,data)=>{
            let json = JSON.parse(data);
            newUser = {id:json.nextId++,...newUser};
            json.users.push(newUser);
            fs.writeFile(pathFile,JSON.stringify(json), (err)=>{
                if(err){
                    throw err;
                }else{
                    res.status(200).send(newUser);
                }
            })
        });
    }catch(err){
        console.log(err.message);
        res.status(400).send({error: err.message});
    }
});




module.exports = router;