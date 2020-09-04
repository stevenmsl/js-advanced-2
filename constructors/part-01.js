/*
  Things to remember:
  - Constructors are user-defined functions.
  - User-defined functions automatically 
    gets a prototype propety, which in turn
    has a default constructor property 
    pointing back the function.
  - you create an object by prepending new
    keyword to the function call
  - the created object will have its __proto__
    set to the function's prototype.
  - the created object will also have a 
    constructor property pointing to the function 
*/

function MyConstructor() {
  //console.log("my constructor: " + Date.now());
}

/* So for MyConstructor its own interanl property chain
   is pointing at Function.prototype. This property
   __proto__ has NOTHING to do with the objects created
   using new MyConstructor();
*/
console.log("MyConstructor.__proto__ == Function.prototype :");
console.log(MyConstructor.__proto__ == Function.prototype); // true

/*
  - There is also a automatically created property
    called MyConstructor.prototype. Don't confuse
    it with the internal property chain property
    __proto__.    
  - MyConstructor.prototype has a constructor property 
    pointing back at MyConstructor.
  - Only functions has a default constructor property
    in their prototype property.
*/

MyConstructor.prototype.constructor();

/* 
  - myObj's __proto__ is pointing at MyConstructor.prototype,
    the automatically created property when you declare
    MyConstructor, not MyConstructor.__proto__. 
  - myObj has a constructor property pointing at
    MyConstructor to indicate how myObj is created 
*/
var myObj = new MyConstructor();
console.log("myObj.__proto__ == MyConstructor.prototype :");
console.log(myObj.__proto__ == MyConstructor.prototype); // true
console.log("myObj.constructor == MyConstructor.prototype.constructor :");
console.log(myObj.constructor == MyConstructor.prototype.constructor); // true
console.log("myObj.constructor == MyConstructor :");
console.log(myObj.constructor == MyConstructor); // true

/*
  - myObj.__proto__ is pointing at MyConstructor.prototype 
  - instanceof will compare myObj.__proto__ 
    to MyConstructor.prototype
*/
console.log("myObj instanceof MyConstructor :");
console.log(myObj instanceof MyConstructor); // true

// wipe out the automatically created prototype
// and replace it with an anonymous object
MyConstructor.prototype = {};

/*
  - since MyConstructor's prototype, now a 
    anonymous object, no longer has a constructor
    property you will need to look up in the property 
    chain to find a constructor to set up myObj2's 
    constructor property when creating it
  - the anonymous object's __proto__ is pointing to
    Object.prototype, and Object.prototype has 
    a constructor property.
  - so myObj2's constructor is set to 
    Object.prototype.constructor
  - Object.prototype.constructor is pointing to 
    Object; similar to the MyConstructor case 
    where the automatically created prototype 
    has a constructor property poitning back
    at MyConstructor

*/
var myObj2 = new MyConstructor();

// Object.prototype has a constructor property
// so myObj2.constructor will be set to it.
console.log("myObj2.constructor == Object.prototype.constructor :");
console.log(myObj2.constructor == Object.prototype.constructor); //true

// Object.prototype.constructor is pointing to Object
console.log("myObj2.constructor == Object :"); // true
console.log(myObj2.constructor == Object); // true

// myObjec2.__proto__ is pointing at MyConstructor.prototype
// so myObj2 is an instance of MyConstructor (what instanceof
// is checking)
console.log("myObj2 instanceof MyConstructor :"); // true
console.log(myObj2 instanceof MyConstructor); // true

/*
  - why myObj2 is an instance of Object?
*/
/* 
  step 1
  - myObj2.__proto__ is pointing to the anonymous object 
  - the anonymous object's __proto__ is pointing to 
    Object.prototype
  - so myObj2.__proto__.__proto__ == Object.prototype
*/
console.log("myObj2.__proto__.__proto__ == Object.prototype :");
console.log(myObj2.__proto__.__proto__ == Object.prototype);

/*
  step 2
  - instanceof will look up in the property chain, through __proto__
    of myObj2 to see if a match can be found
  - it will find a match and hence myObj2 is an instance of Object 
*/
console.log("myObj2 instanceof Object :");
console.log(myObj2 instanceof Object); // true
