/* 
  prior to 2015
*/

(function () {
  console.log(b); // undefined (not error) due to hoisting
  var b = 456; // b is function-scoped
})();

console.log(b);
// ReferenceError: b is not deifned
