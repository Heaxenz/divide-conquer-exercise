function countZeroes(arr) {
let firstZero = findZero(arr)
if(firstZero === -1) return 0;
return arr.length - firstZero
}


function findZero(arr, lowIndex  = 0, highIndex = arr.length -1){
    if(lowIndex <= highIndex){
      let midIndex = lowIndex + Math.floor((highIndex - lowIndex)/2);
      if((midIndex === 0 || arr[midIndex - 1] === 1 ) && arr[midIndex] === 0 ){
          return midIndex;
      } else if(arr[midIndex] === 1){
          return findZero(arr, midIndex + 1 , highIndex)
      }
      return findZero(arr, lowIndex, midIndex - 1)
    }
    return -1;
}

module.exports = countZeroes


  