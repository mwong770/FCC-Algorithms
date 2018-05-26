// Return the length of the longest word in the provided sentence.

//Helpful Links:
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort?v=control
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=example
//--- https://www.w3schools.com/jsref/jsref_reduce.asp

//----------------------------- SORT METHOD --------------------------------

//sorts array by length of items, then returns first (longest) item

function findLongestWord(str) {
	var wordArray = str.split(' ');
	wordArray.sort(function (a, b) {
		return b.length - a.length;
	});
	return wordArray[0].length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');

//split makes an array of words in sentence, using spaces in sentence to determine each array item
//--- [“The”, “quick”, “brown”, “fox”, “jumped”, “over”, “the”, “lazy”, “dog”]

//If compareFunction(a, b) is less than 0, sorts a to a lower index than b, i.e. a comes first.
//If compareFunction(a, b) is greater than 0, sorts b to a lower index than a

//--- The vs Quick returns 5 - 3 = 2 so b moves in front of a ["quick", "The"]
//--- Quick vs brown returns 5 - 5 = 0 so stays together [["quick", "brown", "The"]
//--- Brown vs fox returns 5 - 3 = -2 so keeps brown before fox   

//longer way
function findLongestWord(str) {
  var arrayLength = [];
  //makes an array of words
  var arrayWord = str.split(' ');
  //makes an array of the length of each word
  for (var i = 0; i < arrayWord.length; i++) {
     arrayLength.push(arrayWord[i].length);
  }
  //sorts word length array numerically in reverse
  arrayLength.sort(function (a,b) {
    return b-a;
  });
  //returns greatest length
  return arrayLength[0];
  
}

findLongestWord("The quick brown fox jumped over the lazy dog");
//----------------------------- FOR LOOP --------------------------------

function findLongestWord(str) {
	var wordArray = str.split(' ');
	var longestWord = 0; 
	for(var i = 0; i < wordArray.length; i++){
	    if(wordArray[i].length > longestWord){ 
			longestWord = wordArray[i].length; 
		}
    }
  	return longestWord;
}	

findLongestWord("The quick brown fox jumped over the lazy dog");

//--- [“The”, “quick”, “brown”, “fox”, “jumped”, “over”, “the”, “lazy”, “dog”]

// checks length of each word in array and if greater than longestWord, longestWord takes it's length
//--- length of "The" (3) is > 0 so longestWord = 3
//--- length of "quick" (5) is > 3 so longestWord = 5

//----------------------------- REDUCE METHOD --------------------------------

function findLongestWord(str) {
	var wordArray = str.split(' ');
	var longestWord = wordArray.reduce(function(longest, currentWord) {
    if(currentWord.length > longest.length)
       return currentWord;
    else
       return longest;
  }, "");
	  return longestWord.length;            
}

findLongestWord("The quick brown fox jumped over the lazy dog");


//--- [“The”, “quick”, “brown”, “fox”, “jumped”, “over”, “the”, “lazy”, “dog”]

//reduce executes function for each array value and stores the return value in an accumulator (aka initial value) 
//reducing the array to a single value (the value of the last callback invocation) 
//arr.reduce(callback, [initialValue])

//--- initial value of longest is '' (aka 0 length)

//invocation 1:
//--- currentWord (The) has length 3  > longest ('') has length 0 so longestWord = The      
//invocation 2:
//--- currentWord (quick) has length 5  > longest (The) has length 3 so longestWord = quick      
//--- etc. until last invocation gives longestWord = jumped

//--- jumped.length = 6 so returns 6






