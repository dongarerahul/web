//  Returning function
function name(a, b) {
    return a + b
}

//parameterized function
function pName(a, b) {
    sum = a + b
    console.log("Sum is " + sum)
}

//default parameter function
function dName (a = 1, b) {
    return a + b
}
console.log (dName (2))
console.log (dName (2, 3))

//rest parameter (variable argument) function
function rName(...params) {
    console.log("Parameter Length: " + params.length)
}
rName(1); rName(1, 2); rName(1, 2, 3);

//anonymous function
var f = function(name) {
    return "Hello " + name
}
console.log(f())

//dynamic function using Function constructor
var dynamicFunction = new Function("arg1", "arg2", "console.log(\"Product: \" + arg1 * arg2)")
dynamicFunction(10, 20)

//Recursive function
function factorial(num) { 
   if(num<=0) { 
      return 1; 
   } else { 
      return (num * factorial(num-1)  ) 
   } 
} 
console.log(factorial(6)) 

//lambda expression
var plus10 = (x) => x + 10
console.log(plus10(10))

//lambda statement
var msg = ()=> console.log("function invoked") 
msg() 

//Function Hoisting i.e. function call before its declaration
hoist_function();  
function hoist_function() { 
   console.log("foo"); 
} 

//Error: as it is 
//hoist_statement(); // TypeError: hoist_function() is not a function  
// var hoist_function() = function() { 
//    console.log("bar"); 
// };


//Immediately invoked function expression-1
var main = function() { 
   var loop = function() { 
      for(var x = 0;x<5;x++) {
         console.log(x); 
      } 
   }(); 
   console.log("x can not be accessed outside the block scope x value is :"+x); 
} 
main();

//Immediately invoked function expression-2
var main = function() { 
   (function() { 
      for(var x = 0;x<5;x++) { 
         console.log(x); 
      } 
   })(); 
   console.log("x can not be accessed outside the block scope x value is :"+x); 
} 
main();

// Generators enable two-way communication between the caller and 
// the called function. This is accomplished by using the yield keyword.
function* ask() { 
   const name = yield "What is your name?"; 
   const sport = yield "What is your favorite sport?"; 
   return `${name}'s favorite sport is ${sport}`; 
}  
const it = ask(); 
console.log(it.next()); 
console.log(it.next('Ethan'));  
console.log(it.next('Cricket')); 


