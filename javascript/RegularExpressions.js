var message = "This is my hello world message";

var regEx = /hello/
//var regEx1 = new RegEx("hello")

var exp1 = /hel*o/  //zero or more: heo, helo, hello, hellllo
var exp2 = /hel+o/  //one or  more: helo, hello, hellllo
var exp3 = /hel?o/  //zero or once: heo, helo

var exp4 = /hello|goodboy/  //either hello or goodboy
var exp5 = /he.lo/          // any char

var exp6 = /\whello/        //alphanumeric or _
var exp7 = /\bhello/        //hello starting after space or newline
var exp8 = /[crnold]ope/    //[...] range of characters (any char) : cope, rope, 

if(regEx.test(message)) {
  console.log("message contain hello word !")
}
