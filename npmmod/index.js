// // const chalk = require (" chalk") //it will not work so 
 
// import chalk from "chalk";//use it

// // console.log(chalk);
// console.log(chalk.backgroundColorNames("hello world!"));

 //import chalk from 'chalk';
// //const { chalk } = require("chalk");
//  console.log(chalk.blue('Hello world!'));
//  console.log(chalk.green.underline.inverse('success'));

// console.log("hello");

// const validator = require('validator');
import chalk from 'chalk';
import validator from 'validator';
const res = validator.isEmail("vb33531ga.com");
console.log(res);
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));