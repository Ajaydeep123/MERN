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

////404 page :  always put 404 page with .use at the bottom most position because it will always give response and if used at the top level
// then it will always return the response as 404 error
//We deliberately set the status(404) here because without that it will give status 200 Ok because we're getting response succesfully but we should remember that we're
//showing error here, which is supposed to be showing status code 404
app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", { root: __dirname });
  });
  

app.listen(3000, ()=>{
    console.log("server is listening on port 3000");
});

 