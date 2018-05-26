//Return the provided string with the first letter of each word capitalized. 
//Make sure the rest of the word is in lower case.
//Capitalize connecting words like "the" and "of".


//***********USING MAP()**************

//HELPFUL LINKS:
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?v=control

function titleCase(str) {
  //make the string into an array of lowercase words
  var lowercaseArray = str.toLowerCase().split(" ");
  //for each word in the array run the function (replace the first letter with uppercase)
  var uppercaseArray = lowercaseArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  //make array into a string with spaces between words
  return uppercaseArray.join(" ");
} 
  
titleCase("I'm a little tea pot");

//***********USING CHARAT() & SUBSTR()**************

function titleCase(str) {
	//array of lowercase words
  	var arr = str.toLowerCase().split(' ');
  	var newArr = [];
  	//for each word, extracts first letter, uppercases it, then adds it back to rest of word
  	arr.forEach(function(word) {
      	var capWord = word.charAt(0).toUpperCase() + word.substring(1);
    	newArr.push(capWord);
  	});
  	//converts array back into a string
  	return newArr.join(' ');
}

titleCase("I'm a little tea pot");
