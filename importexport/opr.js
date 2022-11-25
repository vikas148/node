const add =(a,b)=>{
    return a+b;
    
}

const sub =(a,b)=>{
    return a-b;
    
}

const mult =(a,b)=>{
    return a*b;
    
}


const name ="vinod";

// module.exports = add;  //to import a single function

// to import multiple functins

// module.exports.add=add;
// module.exports.sub=sub;
// module.exports.mult=sub;

module.exports ={add, sub ,mult,name}