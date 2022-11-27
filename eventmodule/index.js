//creating a clss of events
const EventEmitter =require("events");

//creating an object of event class
const event = new EventEmitter();

// firing event
event.on("say my name",()=>{
    console.log(" your name is vikas");
})

//calling multiple time an event

event.on("say my name",()=>{
    console.log(" your name is vikas");
})

event.on("say my name",()=>{
    console.log(" your name is vikas");
})

//creating event
event.emit("say my name");


//anothe event

event.on("check page",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})



event.emit("check page",200,"ok");


