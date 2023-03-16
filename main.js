////////The challenge is to create a function that returns/////////
/////the original array, modified, in place, so that from//////////
////left to right, the greatest value repeats until it's///////////
////////sorted in a strictly decreasing order /////////////////////


/////Ex1:Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// Explanation: 
// - index 0 --> the greatest element to the right of index 0 is index 1 (18).
// - index 1 --> the greatest element to the right of index 1 is index 4 (6).
// - index 2 --> the greatest element to the right of index 2 is index 4 (6).
// - index 3 --> the greatest element to the right of index 3 is index 4 (6).
// - index 4 --> the greatest element to the right of index 4 is index 5 (1).
// - index 5 --> there are no elements to the right of index 5, so we put -1.

const example = [17,18,5,4,6,1];
const nums = [2, 10, 3, 4, 5, 8, 4, 3]; //expected: [10, 8, 8, 8, 8, 4, 3,-1]
const edge = [17, 1]; // [1, -1]

////////first attempt/////////////////////////////
function greatestOnly(arr) {
  if (arr.length < 2) {
    return [-1];
  } 
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {                //////This is close but it isn't functioning properly on the current greatest element
      if (arr[i] < arr[j]) {
        arr[i] = arr[j];
      }
    }
} return arr;
}
// console.log(greatestOnly(example))
// console.log(greatestOnly(nums));


////////////second attempt////////////////////////
function returnOfTheMax(arr) {
  if (arr.length < 2) {
    return [-1];
  };
  for (let i = arr.length - 1; i > 0; i--) {
  let slice = arr.slice(i, arr.length);
  // console.log(slice);
    if (arr[i] > arr[i - 1]) {
      arr[i - 1] = arr[i];
    }                                                          ////////returns the correct values in the correct order BUT not for a few edge cases keep trying
  }
  arr.shift();
  arr[arr.length] = -1;
  return arr;
}

// console.log(returnOfTheMax(nums));
// console.log(returnOfTheMax(example));

// const nums = [2, 10, 3, 4, 5, 8, 4, 3]; //expected: [10, 8, 8, 8, 8, 4, 3,-1]
//////////third attempt//////////////
function greatestGoRight(arr) {
  let answer = [];
  arr.forEach((element, index) => {
    let slice = arr.slice(index + 1, arr.length);
    let max = Math.max(...slice);
    answer.push(max);                                          ///////aaaaaaaannnnnndddd boom goes the dynamite. Solved.
  })
  answer[answer.length - 1] = -1;
  return answer;
}

// console.log(greatestGoRight(nums));
// console.log(greatestGoRight(example));
console.log(greatestGoRight(edge));

///start at 0 index;
///take the highest value AFTER regardless of 0 index value (or current index value in a loop)
///replace every element with that value until it's index, then repeat