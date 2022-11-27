const { resolveSoa } = require("dns");
const fs = require("fs");
const http = require("http");

const server =http.createServer((req,res)=>{


   const data= fs.readFileSYnc(`userapi.json`,"utf-8",)
        console.log(data);
       //res.end(data);
         
      //playing with api data 
      res.writeHead(200,{"content-type":"application/json "})
       const objData = JSON.parse(data);

    if(req.url =="/"){
        res.end("you are on home");
    }
    else if(req.url == "/contact"){
        res.end("you are on contact");
    }
    else if(req.url == "/userapi"){
    //     fs.readFile(`userapi.json`,"utf-8",(err,data)=>{
    //          console.log(data);
    //         //res.end(data);
              
    //        //playing with api data 
    //         const objData = JSON.parse(data);
            res.end(objData[1].users);
        //});
    //     res.end(data);
     }

    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("404 NOT FOUND")
    }
   
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("server is running on port 8000");
})