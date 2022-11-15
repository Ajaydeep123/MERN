const express = require("express");
const app = express();

console.log(__dirname);


app.get("/", function(req, res){
    res.send("<h1>HEllo world ajaydeep</h1>");
})

app.get("/about", function(req, res){
    res.sendFile('views/about.html', {root: __dirname});
});

app.get("/about", function(req, res){
    res.sendFile('views/about.html', {root: __dirname});
});

app.listen(3000, ()=>{
    console.log("server is listening on port 3000");
});

 