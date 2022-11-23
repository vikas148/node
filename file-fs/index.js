const fs = require("fs");

fs.appendFileSync("bio.txt","\n i dont have a girlfriend ");

const org_data =fs.readFileSync("bio.txt","utf-8");
console.log(org_data);

fs.renameSync("bio.txt","mybio.txt");