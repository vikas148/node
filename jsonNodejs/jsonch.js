const fs =require("fs")

const bioData={
    name: "vikas",
    age:22,
    channel: "livechillkonje",
}

//1.to convert data into json
const jsonData = JSON.stringify(bioData);

//2.add into new gile

// fs.writeFile("json1.json",jsonData,(err,data)=>{
//     console.log("done");
// })


//3. read thaat json file

fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data);
    //convert into original data
    const orgdata= JSON.parse(data);
    console.log(orgdata);
})
