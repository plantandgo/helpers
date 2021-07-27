// function isExplorer() {
//   return window.navigator.userAgent.indexOf('MSIE ') > -1 || !!window.navigator.userAgent.match(/Trident.*rv\:11\./);
// }

// // function getItemBasedId(arr, id) {
// //   return arr.filter((item) => item.id === id)[0];
// // }

// // function getIndexBasedId(arr, id) {
// //   // debugger;
// //   return arr.findIndex(item => item.id === id);
// // }

// module.exports = isExplorer;

'use strict';
 
function add(a, b) {
    return a + b;
}
 
function subtract(a, b) {
    return a - b;
}
 
function divide(a, b) {
    return a / b;
}
 
function multiply(a, b) {
    return a * b;
}

module.exports = {
  add,
  subtract,
  divide,
  multiply
}