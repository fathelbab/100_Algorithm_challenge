export const addBorder = (array: string[]): string [] => {
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