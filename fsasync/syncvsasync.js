const fs =require("fs");

//in synchronus

const data=fs.readFileSync("read.txt","utf-8");
console.log(data); //1st priority
console.log("after the data"); //2nd priority


//in ascynchronus

fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data);// 2nd priority
});

console.log("after the data");//1st priority due to time