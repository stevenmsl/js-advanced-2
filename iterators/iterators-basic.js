const dragons = ["cool dragon", "angry dragon", "nasty dragon"];

// - The syntax dragons[Symbol.iterator] is just like dragons[“length”]
//   which allows you to access a certain property of dragons array.
// - Symbol.iterator is unique and will not have a conflict wit
//   other property names.
// - dragons[Symbol.iterator] is a function that you can call to get
//   the default iterator from an object.
const iterator = dragons[Symbol.iterator]();
console.log(iterator.next()); // print { value: 'cool dragon', done: false }
// - string object also has an default iterator
const iteratorStr = dragons[0][Symbol.iterator](); // { value: 'c', done: false }
console.log(iteratorStr.next());
