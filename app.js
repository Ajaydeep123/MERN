const express = require("express");
const app = express();

console.log(__dirname);


app.get("/", function(req, res){
    res.send("<h1>HEllo world ajaydeep</h1>");
})

app.get("/about", function(req, res){
    res.sendFile('views/about.html', {root: __dirname});
});

// app.get("/about", function(req, res){
//     res.sendFile('C:\Users\Ajaydeep\Desktop\Dev\Fjp5\Backend\views\about.html');
// });

//redirect
app.get("/aboutus", (req,res)=>{
    res.redirect('/about')
})

//
app.listen(3000, ()=>{
    console.log("server is listening on port 3000");
});

 