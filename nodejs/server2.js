//We will create a server and add a server to listen it and see if there's been any request made?

const http = require('http');

const server2= http.createServer((req,res)=>{
    console.log('request has been made from browser to server');
})

//add server listener
              //port number, host name , cb
server2.listen(3000, 'localhost', ()=>{
    console.log('server is listening on port 3000');
})