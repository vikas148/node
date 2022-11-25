const path =require('path');
console.log(path.dirname('C:/Users/tuff/Desktop/node js/path/path.js'));
console.log(path.extname ('C:/Users/tuff/Desktop/node js/path/path.js'));
console.log(path.basename ('C:/Users/tuff/Desktop/node js/path/path.js'));

console.log(path.parse('C:\Users\tuff\Desktop\node js\path\path.js'));

const mypath=path.parse('C:\Users\tuff\Desktop\node js\path\path.js');

console.log(mypath.root);
