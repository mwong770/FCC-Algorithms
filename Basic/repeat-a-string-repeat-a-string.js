// Repeat a given string (first argument) num times (second argument). 
// Return an empty string if num is not a positive number.

// HELFPUL LINKS:
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//--- String global object creates string
//--- ex. String(something-to-be-converted-to-a-string);
//--- Use the backslash character ("\") at the end of each line to indicate that the string will continue on the next line. 
//--- Make sure there is no space or any other character after the backslash (except for a line break), or as an indent; otherwise it will not work. 

function repeatStringNumTimes(str, num) {
	var result = '';
	if (num <= 0 ) {
		return result;
	} else {
      for (var i = 0; i < num; i++) {
        result += str;
      }
      return result;
	}
}
var test = repeatStringNumTimes("dog", 3);
console.log(test);