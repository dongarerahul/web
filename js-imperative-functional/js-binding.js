//JS support 4 kind of bindings
// 1# Implicit
// 2# Explicit (call, apply, bind)
// 3# new bindings
// 4# Window bindings


//1. Implicit Binding
var stancy = {
    name : 'Stacy', 
    age : 34, 

    sayName: function() {
        console.log("My name is " + this.name);
    }
}
stancy.sayName();

//2. Explicit Binding - call, apply & bind
var sayName1 = function(lang1, lang2, lang3) {
    console.log("My name is " + this.name + " and I know " + lang1 + ", " + lang2 + ", " + lang3);
};

var stancy1 = {
    name : 'Stancy1', 
    age : 34
}

var languages = ["Java", "Python", "Javascript"];

sayName1.call(stancy1, languages[0], languages[1], languages[2]); 
sayName1.apply(stancy1, languages); 
var newSayHello = sayName1.bind(stancy1, languages[0], languages[1], languages[2]); 
newSayHello();

//3. new Binding to default object window

var Animal = new function(color, name, type) {
    //this = {}
    this.color = color;
    this.name = name;
    this.type = type;
};

var zebra = new Animal("black and white", "Zorro", "Zebra");

var sayAge3 = function() {
    console.log(this.age);
}

var me = {
    age: 25
};

window.age = 30;
sayAge3();

//3 : 
var sayAge4 = function() {
    'use strict';
    console.log(this.age);
}

var me = {
    age: 25
};

window.age = 30;
sayAge3(); // every function has Implicit argument of window object