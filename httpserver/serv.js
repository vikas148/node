const http = require("http");
const url =require("url");

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("you are at home");
    }

    else if(req.url == "/contact"){
        res.end("you are at contact");
    }

    else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("<h1>404 page not found</h1>")
    }
})

server.listen(9000,"127.0.0.1",()=>{
    console.log("server is running on port 9000");
})