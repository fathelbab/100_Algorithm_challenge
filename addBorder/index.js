// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
// picture = ["abc",
// "ded" ]

//output : addBorder (picture) = ["******", "*abc*", "*ded*","******"]

const addBorder = (array) => {
  const starWall = "*****";
  const result = array.map((element) => {
    return "**" + element + "**";
  });

  result.unshift(starWall);
  result.push(starWall);
  return result;
};
console.log(
  "🚀 ~ file: index.js:11 ~ addBorder ~ addBorder:",
  addBorder(["abc", "ded"])
);
