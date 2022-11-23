// const name ="looooo";
// console.log(name);

const fs = require("fs");

//creating a new file
fs.writeFileSync("read.txt","welcome into room");
fs.writeFileSync("read.txt","welcome into room feel like oyo");//it will overwrite previous

fs.appendFileSync("read.txt", "\n hey bhindi");//it will not overwrite 

 const buffer_data=fs.readFileSync("read.txt");
console.log(buffer_data);//it will give us buffer data

org_data=buffer_data.toString();
console.log(org_data);
fs.renameSync('read.txt','readwrite.txt');//to rename file 

