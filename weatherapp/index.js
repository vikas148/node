const http = require("http");
const fs = require ("fs");
const requests=require("requests")
const homeFile=fs.readFileSync("home.html","utf-8");
//console.log(homeFile);

const replaceVal=(tempVal,orgVal)=>{

    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp)
     temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min)
     temperature =temperature.replace("{%tempmax%}", orgVal.main.temp_max)
     temperature =temperature.replace("{%location%}", orgVal.name)
     temperature =temperature.replace("{%country%}", orgVal.sys.country)
     temperature =temperature.replace("{%tempstatus%}", orgVal.weather[0].main)
     return temperature;
}

const server=http.createServer( (req,res)=> {

    
    if(req.url == "/"){

        requests( "https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=cc523762a881173a438dea2efd030baa")
        .on ("data", (chunk)=> {
            const objdata=JSON.parse(chunk);
            const arrData=[objdata]
            console.log(arrData);
            const realTimedata=arrData.map((val)=>replaceVal(homeFile,val)).join("")
            //console.log(realTimedata);
            res.write(realTimedata)
        
        })

        
     .on("end", (err)=> {
        if (err) return console. log( "connection closed due to error")
        // console. log("end");
        res.end();
         })
        }
})


server.listen(8000,"127.0.0.1");




