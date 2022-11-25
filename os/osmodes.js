const os =require('os');

console.log(os.arch()); //to get the info about architecture

const freememory= os.freemem();
// console.log(freememory); //it will shows us the free bytes of memory
console.log(`${freememory/1024/1024/1024}`); //memory in gb

const totalmemory=os.totalmem();
// console.log(totalmemory);// in kb
console.log(`${totalmemory/1024/1024/1024}`);

console.log(os.hostname());

console.log(os.platform());

console.log(os.tmpdir());

console.log(os.type());