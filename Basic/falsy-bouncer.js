//Remove all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

//HELPFUL LINKS: 
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?v=control
//--- https://www.w3schools.com/js/js_booleans.asp

function bouncer(arr) {
	var noFalsy = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]) {
		 	noFalsy.push(arr[i]);
		}
	}
	return noFalsy;
}

bouncer([7, 'ate', '', false, 9]);

//---------------------------------another way using filter------------------------------------

//The filter() method creates a new array with all elements that pass the test implemented by 
//--- the provided function.
//--- var newArray = arr.filter(callback, thisArg)
//--- callback is test function that returns true or false
//--- thisArg (optional)- value to use as this when executing callback

function noFalsy(value) {
    return value; 
}

function bouncer(arr) {
  var filtered = arr.filter(noFalsy);
  return filtered;
}

bouncer([7, "ate", "", false, 9]);

//filter same as ...
if (noFalsy(value)) { //if (a value that equals true, ex. 7, "ate", 9)
  console.log(true);
} else { //if (a value that equals to false '', false)
  console.log(false);
}

//----------------------another way -------------------------------------------------

function bouncer(arr) {
  var filtered = arr.filter(function(value) {return value;}
                           );
  return filtered;
}

//----------------------another way using filter method and Boolean function--------------------------

function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);



