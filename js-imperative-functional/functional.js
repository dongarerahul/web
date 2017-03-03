(function() {
  "use strict"
  
  var capify = function(word) {
    return [word.charAt(0).toUpperCase(), word.substring(1)].join("");
  }

  var processWords = function(fn, words) {
    words.split(" ").map(fn).join(" ");
  };

  document.getElementById("main_button").addEventListener("click", function(e) {
    var something = prompt("Give me something to capitalize"); 
    alert(processWords(capify, something));
  });
}());
