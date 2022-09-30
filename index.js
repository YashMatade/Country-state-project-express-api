var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.json());
app.use(bodyParser.json({limit:"50mb"}));
app.use(bodyParser.urlencoded({limit:"50mb", extended:true}));

app.get("/", (req, res)=>{
    res.end("Welcome");
});

app.use("/country", require("./routes/country"));
app.use("/state", require("./routes/state"));

app.listen(8081, ()=>{
    console.log("Server running...");
});
