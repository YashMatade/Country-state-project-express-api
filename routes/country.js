var Country = require("../models/Country");
var express = require("express");
var router = express.Router();

router.post("/", (req, res)=>{
    let body = req.body;
    let country = new Country();
    country.id = body.id;
    country.name = body.name;
    country.currency = body.currency;
    country.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
})

router.delete("/", (req, res)=>{
    let body = req.body;
    let country = new Country();
    country.id = body.id;
    country.delete().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
})

router.get("/", (req, res)=>{
    let body = req.body;
    let country = new Country();
    country.list().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
})

router.get("/:id", (req, res)=>{
    let body = req.body;
    let country = new Country();
    country.id = req.params.id;
    country.get().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
})

module.exports = router;