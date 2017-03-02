var prompt = require('prompt');
var result;
function getText() {
  var someText = prompt.get("Give me some inputs to capitalize:");
  capWords(someText);
  alert(result.join(" "));
};

function capWords(input) {
  var counter;
  var inputArray = input.split(" ");
  var transformed = "";
  result = [];

  for(counter = 0; counter < inputArray.length; counter++) {
    transformed = [inputArray[counter].charAt[0].toUpperCase(), 
                   inputArray[counter].substring(1)].join("");
    result.push(transformed);
  }
};

getText();
//document.getElementById("main_button").onClick = getText;

