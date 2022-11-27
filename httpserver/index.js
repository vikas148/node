const http =require('http');

const url = require('url'); //iske bina bhi kaam kr dega

const server= http.createServer((req,res)=>{
    console.log(req.url);
    res.end("hello from other side ..")
});

server.listen(8000, "127.0.0.1",()=>{
    console.log("listening on port 8000");
})