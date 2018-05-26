// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.

// Note that inserting the three dots to the end will add to the string length.

// However, if the given maximum string length num is less than or equal to 3, 
//then the addition of the three dots does not add to the string length in determining the truncated string.

//HELPFUL LINKS: 
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
//--- The slice() method extracts a section of a string and returns it as a new string.
//--- str.slice(beginIndex, endIndex)

function truncateString(str, num) {
  var newString;
  var length = str.length;
  if (str.length > num) {
      if (num > 3) {
          newString = str.slice(0, num-3);
          newString += "...";
         console.log("newstring:  " + newString);
      } else {
          newString = str.slice(0, num);
          newString += "...";
      }
  } else {
    newString = str;
  }
  return newString;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

//----------------------A Second Way-----------------------------

function truncateString(str, num) {
  var newArr = [];
  if (num >= str.length) {
    return str;
  } else if (num < 3) {
    for (var i = 0; i < num; i++) {
      newArr.push(str[i]);
    }
  } else {
    for (var j = 0; j <= num - 3; j++) {
      newArr.push(str[j]);
    }
  }
  //replaces whitespace and line endings
  return newArr.join('').replace(/\s$/, '') + '...';
}

truncateString('A-tisket a-tasket A green and yellow basket', 11);









// should return "A-tisket...".