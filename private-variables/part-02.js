/*
 - code outside the scope cannot access
   the variables
*/

if (true) {
  const b = 345; // block-scoped
}

{
  const c = 678;
}

console.log(b); // ReferenceError
console.log(c); // ReferenceError
