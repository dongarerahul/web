//callback with timeouts; not preferred way of handling async methods
'use strict';

function notifyAll(fnSms, fnEmail) {
  setTimeout(function(){
    console.log("Starting notification process")
    fnSms()
    fnEmail()
  }, 2000); // ms time after which method is executed
}

let fnSms = () => console.log("SMS Sent")
let fnEmail = () => console.log("Email Sent")

notifyAll(fnSms, fnEmail)
console.log("End of Script");

//promises are preferred way
function getSum(n1, n2) {
  var isAnyNegative = function() {
    return n1 < 0 || n2 < 0
  }

  var promise = new Promise(function(resolve, reject) {
    if(isAnyNegative()) {
      reject(Error('Negatives are not supported'))
    }
    resolve(n1 + n2)
  })
  return promise
}

let processResult = result => console.log("getSum result: " + result)
let processError = error => console.log("getSum error: " + error)

getSum(5, 6).then(processResult, processError)
getSum(-1, 1).then(processResult, processError)
