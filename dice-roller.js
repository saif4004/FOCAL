const convertArry = function(arr) {
  let converted = 0;
  for (const item of arr) {
    converted = Number(item);
    if (converted > 0 && Number.isInteger(converted)) {
      return converted;
    }
  }
  return converted;
};

const diceRoll = function(num) {
  let numArry = [];
  for (let i = 0; i < num; i++) {
    numArry[i] = Math.floor(Math.random(1) * 6) + 1;
  }
  return numArry;
};
const printArry = function(arr) {
  let outPutString = "";
  for (let i = 0; i < arr.length; i++) {
    outPutString += arr[i];
    if (i < arr.length - 1) {
      outPutString += ', ';
    }
  }
  outPutString += '. ';
  return outPutString;
};

let convertedNum = convertArry(process.argv);
let tempArr = diceRoll(convertedNum);
console.log(`Rolled ${tempArr.length} dice: ${printArry(tempArr)}`);