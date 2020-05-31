const randomNumber = require("random-number");
function randomItem(array) {
  const randomIndex = randomNumber({
    min: 0,
    max: array.length - 1,
    integer: true,
  });
  return array[randomIndex];
}
const makeDragon = () => {
  const sizes = ["big", "medium", "tiny"];
  const abilities = ["fire", "ice", "lightning"];
  return `${randomItem(sizes)} ${randomItem(abilities)} dragon`;
};

module.exports = makeDragon;
