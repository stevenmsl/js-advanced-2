const makeDragon = require("../shared/make-dragon");

/* 
  In a nutshell generators are just syntactic sugar to create iterators. 
*/

const dragonArmy = {
  // use generator to implement iterator
  [Symbol.iterator]: function* () {
    while (true) {
      const enoughDragonsSpawned = Math.random() > 0.75;
      if (enoughDragonsSpawned)
        // you are actually returning { value: undefined, done: true }
        return;
      yield makeDragon(); // return the result to caller and then pause.
    }
  },
};

// get the default iterator
const iterator = dragonArmy[Symbol.iterator]();
console.log(`next dragon:`, iterator.next());

for (const dragon of dragonArmy) {
  console.log(dragon);
}
