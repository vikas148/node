const fs =require("fs");

// fs.writeFile('read.txt',"you are on right track", (err)=>{
// console.log("your file has been created");
// console.log(err); //to check if it have any error
// });


//adding new data into existing file

// fs.appendFile('read.txt'," your are lob",(err)=>{
//     console.log("your file is updated");
// });


//reading a file in async system

fs.readFile("read.txt","UTF-8",(err, data)=>{
    console.log(data);
})

