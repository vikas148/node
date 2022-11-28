//this was the old method to work with data
const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {

//this is the old way to work with file system    
//   fs.readFile("input.txt", (err, data) => {
//     if (err) {
//       return console.log(err);
//     } else {
//       res.end(data.toString());
//     }
//   });

//2nd way to work with data aks streaming


// const readstream= fs.createReadStream("inputs.txt");

// readstream.on("data",(chunkdata)=>{
// res.write(chunkdata)
// });

// readstream.on("end",()=>{
//     res.end()
// })

// //if files is not exist or occur any other error

// readstream.on('error',(err)=>{
// console.log(err);
// res.end("file not exist ")
// })


//3rd way
//we dont need to write this whole code we can do it by just writting one line of code
const readstream= fs.createReadStream("input.txt");
readstream.pipe(res);


});

server.listen(8000, "127.0.0.1", () => {
  console.log("server is running on port 8000");
});
