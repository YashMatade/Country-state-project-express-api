var State = require("../models/State");
var express = require("express");
var router = express.Router();

router.post("/", (req, res)=>{
    let body = req.body;
    let state = new State();
    state.id = body.id;
    state.name = body.name;
    state.countryid = body.countryid;
    state.population = body.population;
    state.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
})

router.delete("/", (req, res)=>{
    let body = req.body;
    let state = new State();
    state.id = body.id;
    state.delete().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
})

router.get("/:countryid/:population", (req, res)=>{
    let body = req.body;
    let state = new State();
    state.countryid = req.params.countryid;
    state.population = req.params.population;
    state.list().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
})

router.get("/:id", (req, res)=>{
    let body = req.body;
    let state = new State();
    state.id = req.params.id;
    state.get().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
})

module.exports = router;