const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
   res.render("index.html");

});
app.get("/index", function(req, res){
    res.render("index.html");
});

app.get("/supervised", function(req, res){
    res.render("supervised.html");
});

app.get("/unsupervised", function(req, res){
    res.render("unsupervised.html");
});

app.get("/online", function(req, res){
    res.render("online.html");
});

app.get("/batch", function(req, res){
    res.render("batch.html");
});

//server listener
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Express Server is Running...");

});