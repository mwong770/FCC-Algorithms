//Compare two arrays and return a new array with any items only found in one of the two given arrays, 
//but not both. In other words, return the symmetric difference of the two arrays.

//HELFPUL LINKS: 
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators?v=control
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice?v=control
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?v=control
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf?v=control
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=control
//--- https://docs.microsoft.com/en-us/scripting/javascript/reference/conditional-ternary-operator-decrement-javascript

function diffArray(arr1, arr2) {
    //filter returns a new array with arr1 values not in arr2
    var arr1Unique = arr1.filter(
        function(value) {
            if (arr2.includes(value)) {
                    return false; 
             } else {
                    return true;
             }
        }
    );
    //returns arr2 values not in arr1
    var arr2Unique = arr2.filter(
        function(value) {
             if (arr1.includes(value)) {
                    return false; 
             } else {
                    return true;
             }
        }
    );
    //concatonates both arrays
    return arr1Unique.concat(arr2Unique);
}

["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] //should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]; // should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5]; // should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4]; // should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"]; // should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"]; // should return [1, "calf", 3, "piglet", 7, "filly"].

//-------------------------similar to above but much shorter way-------------------------------

var arr1 = [1, 2, 3, 5];
var arr2 = [1, 2, 3, 4, 5]; // should return [4].

function only1(arr1, arr2) {
    var arr1Unique = arr1.filter( function(value) {
          return !(arr2.includes(value));
    });

      var arr2Unique = arr2.filter( function(value) {
          return !(arr1.includes(value));
      });
  
  return arr2Unique.concat(arr1Unique);
  
}

//-----------------------------------------another way-------------------------------------------

function diffArray(arr1, arr2) {
    return arr1
      .filter(el => !arr2.includes(el))
      .concat(
        arr2.filter(el => !arr1.includes(el))
      )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//-----------------------------------------another way-------------------------------------------

function diffArray(arr1, arr2) {
  var newArr = [];
  
  function onlyInFirst(first, second) {
  // Loops through first array
    for (var i=0;i<first.length;i++) {
      //looks for index of first[i] in second array
      //if missing (aka -1)...
      if (second.indexOf(first[i]) === -1) {
        // Pushes elements unique to both arrays in newArr
        newArr.push(first[i]);
      }
    }
  }
  
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);
  
  return newArr;
}

[1, "calf", 3, "piglet"], [7, "filly"];

//-----------------------------------------another way-------------------------------------------

function diffArray(arr1, arr2) {
  
  var concatArray = arr1.concat(arr2);
  return concatArray.filter(item => !arr1.includes(item) || !arr2.includes(item));
}

//-------------------------------same as above but one step---------------------------------------

function diffArray(arr1, arr2) {
  
  return arr1.concat(arr2).filter(
        item => !arr1.includes(item) || !arr2.includes(item)
    )
}

//-------------------------------same as above but one step---------------------------------------

