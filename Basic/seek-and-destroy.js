//You will be provided with an initial array (the first argument in the destroyer function), 
//--- followed by one or more arguments. Remove all elements from the initial array that are of 
//--- the same value as these arguments.

//HELPFUL LINKS:
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?v=control
//--- https://www.w3schools.com/js/js_function_call.asp
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes?v=control

function destroyer(arr) {
    var argsArray = Array.prototype.slice.call(arguments); //returns [[1, 2, 3, 1, 2, 3], 2, 3]
    argsArray.shift(); //returns [2,3]
    console.log(arr); //returns [1, 2, 3, 1, 2, 3]
    function compareValues(value) {
            if (argsArray.includes(value)) {
                    return false; 
                } else {
                    return true;
                }
            }
    return arr.filter(compareValues);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//--------------------------------------------------------------------
function destroyer(arr) {
  var destroy = [];
  for (var i = 1; i < arguments.length; i++) {
    destroy.push(arguments[i]);
  }
  function checkList (search) {
    for (var j = 0; j < destroy.length; j++) {
      return arr[search] === destroy[j] ? true : false;
    }
  }
  return arr.filter(checkList);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);