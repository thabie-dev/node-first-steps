const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)


//const greet = require('./greet');

//console.log(greet('Xola'))



//function greet (name){
//    if(!name){
  //      return 'hello';
   // }
//    return 'hello,' + name;
//}
  //  var msg = greet('Thabie');
   //     console.log(msg);
