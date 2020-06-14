const express = require("express");
const fs = require("fs");
const router = express.Router();

const pathFile = "./json/exames.json";

router.post("/imc", (req,res)=>{
    try{
        let params = req.body;
        fs.readFile(pathFile,"utf-8",(err,data)=>{
            let json = JSON.parse(data);
            let resultadoExame = {
                "id": json.nextId++,
                "idUsuario": params.idUsuario,
                "peso": params.peso,
                "altura": params.altura,
                "IMC": "",
                "classificacao":"",
                "grauObesidade":null,
                "dtExame": new Date(Date.now())
            };
            let imc = params.peso /(params.altura*params.altura);
            resultadoExame.IMC = imc;
            if(imc > 40){
                resultadoExame.classificacao = "OBESIDADE GRAVE";
                resultadoExame.grauObesidade = 3;
            }else if(imc >= 30 && imc <= 39.9){
                resultadoExame.classificacao = "OBESIDADE";
                resultadoExame.grauObesidade = 2;
            }else if(imc >= 25 && imc <= 29.9){
                resultadoExame.classificacao = "SOBREPESO";
                resultadoExame.grauObesidade = 1;
            }else if(imc >= 18.5 && imc <= 24.9){
                resultadoExame.classificacao = "NORMAL";
                resultadoExame.grauObesidade = 0;
            }else{
                resultadoExame.classificacao = "MAGREZA";
                resultadoExame.grauObesidade = 0;
            }
            json.exames.push(resultadoExame);
            fs.writeFile(pathFile,JSON.stringify(json), (err)=>{
                if(err){
                    throw err;
                }else{
                    res.status(200).send(resultadoExame);
                }
            });
        });
    }catch(err){
        console.log(err.message);
        res.status(400).send({error: err.message});
    }
});

router.get("/:idUser",(req,res)=>{
    try{
        fs.readFile(pathFile,"utf-8",(err,data)=>{
            if(err){
                throw err;
            }else{
                let json = JSON.parse(data);
                let exames = json.exames.filter(exame => exame.idUsuario === parseInt(req.params.idUser));
                res.status(200).send(exames);
            }
        });
    }catch(err){
        console.log(err.message);
        res.status(400).send({error: err.message});
    }
});

router.get("/",(req,res)=>{
    try{
        fs.readFile(pathFile,"utf-8",(err,data)=>{
            if(err){
                throw err;
            }else{
                let json = JSON.parse(data);
                delete json.nextId;
                res.status(200).send(json);
            }
        });
    }catch(err){
        console.log(err.message);
        res.status(400).send({error: err.message});
    }
});


module.exports = router;