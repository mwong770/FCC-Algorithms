// Return an array consisting of the largest number from each provided sub-array. 
// The provided array will contain exactly 4 sub-arrays.


function largestOfFour(array) {
    var test = [];
    for (var i = 0; i < array.length; i++) {
        array[i].sort(function (a, b) {
            return b - a;
        }); 
        test.push(array[i][0]);
    }
    return test;
}

//returns [5, 27, 39, 1001]
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//returns [9, 35, 97, 1000000]
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);

//returns [27,5,39,1001]
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// **************** WITHOUT SORTING **********************

function largestOfFour(array) {
    var test = [];
    for (var i = 0; i < array.length; i++) {
        var max = 0;
        for (var j = 0; j < array[i].length; j++) {
            if (array[i][j] > max) {
                max = array[i][j];
            }
        }
        test.push(max);
    }
    console.log(test);
}

//****************** ANOTHER WAY ***********************

function largestOfFour(mainArray) {
  return mainArray.map(function (subArray){
    return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
      return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
    }, 0);
  });
}



