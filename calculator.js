//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function (req, res) {
    
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1+ num2;

    res.send("result is " + result)
});

app.get("/bmiCalculator",function(req, res){

    res.sendFile(__dirname +"/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {
    
     var h = Number(req.body.ht);
     var w = Number(req.body.wt);

     var bmi = h/(w*w);

     res.send("result is "+ bmi);
});

app.listen(3000, function(req, res) {
    console.log("server has started at  port 3000");
});