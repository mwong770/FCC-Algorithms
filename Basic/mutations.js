//Return true if the string in the first element of the array 
//-- contains all of the letters of the string in the second element of the array, ignoring case
//For ex, ["hello", "Hello"], should return true 
//For ex, ["hello", "hey"] should return false because the string "hello" does not contain a "y".
//For ex, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

//HELPFUL HINTS:
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
//The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, 
//---starting the search at fromIndex. Returns -1 if the value is not found.
//--- str.indexOf(searchValue, fromIndex)

function mutation(arr) {
    var set = arr[0].toLowerCase(); //returns hello
    var toCheck = arr[1].toLowerCase(); //returns hey
	  var splitWord = toCheck.split(""); //returns ["h", "e", "y"]
    for (var i = 0; i < splitWord.length; i++) {
          var check = set.indexOf(splitWord[i]);
          if (check === -1) {
              return false;
          } 
    }
    return true;
}

mutation(["hello", "hey"]);





