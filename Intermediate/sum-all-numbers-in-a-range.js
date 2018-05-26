// We'll pass you an array of two numbers. Return the sum of those two numbers and all 
// numbers between them. The lowest number will not always come first.

//HELPFUL LINKS:
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=control

//If compareFunction not supplied with sort(), elements are sorted by converting them to strings and comparing strings in Unicode code point order. 
//If compareFunction(a, b) < 0 (-), (leave alone) sort a to a lower index than b, i.e. a comes first.
//If compareFunction(a, b) = 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. (Not all browsers respect this)
//If compareFunction(a, b) > 0 (+), (reverse) sort b to a lower index than a.

function sumAll(arr) {
  var sum = 0;
  //sorts arr numerically low to high
  arr.sort(function(a,b) {
    return a-b;
  }); 
  //runs through loop from smallest value up to the largest value in array
  for (var i = arr[0]; i <= arr[1]; i++) {
    console.log(arr[0] + (i - arr[0]));
    //ex. 5 + (5/6/7/8/9/10 - 5 )
    sum += arr[0] + (i - arr[0]);
  }
  return sum;
}

sumAll([1, 4]); // should return 10
sumAll([4, 1]); // should return 10
sumAll([5, 10]); // should return 45
sumAll([10, 5]); // should return 45

//-------------------------another way------------------------------------

function sumAll(arr) {
  var sum = 0;
  //sorts arr numerically low to high
  arr.sort(function(a,b) {
    return a - b;
  });

  //runs through loop from smallest num up to largest num
  for (var i = arr[0]; i <= arr[1]; i++) {
    //adds i
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);








