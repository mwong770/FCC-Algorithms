//Write a function that splits an array (first argument) into groups 
//the length of size (second argument) and returns them as a two-dimensional array.

//HELPFUL LINKS:
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push?v=example
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice?v=example

// my first attempt: codepen shows correct answers for each test, but fcc says incorrect
//--- maybe doesn't like that I destroy the original array in the process


function chunkArrayInGroups(arr, size) {

  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1)
      temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0)
    result.push(temp);
  return result;
}

////////////////////////////////////////////////////////////////

var totalArray = [];

function chunkArrayInGroups(arr, size) {
    var miniArray = [];
    if (arr.length >= size) {
        for (var i = 0; i < size; i++) {
            console.log("i:  " + i); 
            miniArray.push(arr[0]);
            //deletes first item in original array
            arr.shift();
        } 
    } else {
          for (var j = 0; j < arr.length + 1; j++) {
            console.log("j:  " + j);
            miniArray.push(arr[0]);
            arr.shift();
          }
    }
    totalArray.push(miniArray);
    miniArray = [];
    if (arr.length > 0 ) { 
      chunkArrayInGroups(arr, size);
  
    } 
    return totalArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//----- my second attempt with slice() passed ---------------------------------

//--- The slice() method returns a portion of an array into a new array object selected from begin to end (end not included). 
//--- The original array will not be modified. arr.slice(begin, end)

function chunkArrayInGroups(arr, size) {
    var totalArray = [];
    for (var i = 0; i < arr.length; i += size) {
        var slicedArray = arr.slice(i, i + size);
        totalArray.push(slicedArray);
    }
    return totalArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//at i=0, slicedArray = ["a", "b"], totalArray = ["a", "b"]
//at i=2, slicedArray = ["c", "d"], totalArray = [["a", "b"], ["c", "d"]]

//---------------could also do---------------------------------------

function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i+size));
    i += size;
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//--------------------------------------------------------------------

chunkArrayInGroups(["a", "b", "c", "d"], 2); //should return [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // should return [[0, 1, 2], [3, 4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // should return [[0, 1], [2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // should return [[0, 1, 2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // should return [[0, 1, 2], [3, 4, 5], [6]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]