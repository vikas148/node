const fs= require("fs");

//creating directory
// fs.mkdir("thapa",(err)=>{
//     console.log("folder created");
// })


//creating file into it
// fs.writeFile("./thapa/bio.txt","my name is vikas",(err)=>{
//     console.log("file has been created");
// })

//appending data into file
// fs.appendFile("./thapa/bio.txt"," i am a devloper",(err)=>{
//     console.log("the file has been updated");
// })

//reading data from file

// fs.readFile("./thapa/bio.txt","utf-8",(err, data)=>{
//     console.log(data);
// })

//rename the file
// fs.rename("./thapa/bio.txt","./thapa/mybio.txt",(err)=>{
//     console.log("file has been renamed");
// })
 
//to delete text file

// fs.unlink("./thapa/mybio.txt",(err)=>{
//     console.log("your file is delted");
// })


//removing folder

fs.rmdir("./thapa",(err)=>{
    console.log("the folder has been deleted");
})
