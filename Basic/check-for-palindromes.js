// Return true if the given string is a palindrome.
//--- a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, symbols, case, and spacing
// Otherwise, return false.

//Helpful Links: 
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
//--- http://www.rexegg.com/regex-quickstart.html
//str.replace(regexp|substr, newSubstr|function) (if substr, only the first occurrence will be replaced.)


//--- [^a-z0-9]/gi - replace anything that's not a-z0-9 any number of places (g) and case insensitive (i)
//turns everything lower case in order to check for palindromes
//if both var =, return true, else return false
function palindrome(str) {
	var alphaOnly = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
	var reverse = alphaOnly.split('').reverse().join('');
	if (alphaOnly === reverse) {
		return true;
	} else {
		return false;
	}
}

//could also use return alphaOnly === reverse ? true : false;

palindrome("eye");// returns true
palindrome("race car"); //returns true
palindrome("not a palindrome");//returns false
palindrome("A man, a plan, a canal. Panama"); //returns true
palindrome("never odd or even"); //returns true
palindrome("nope");//returns false
palindrome("almostomla");//returns false
palindrome("My age is 0, 0 si ega ym."); //returns true
palindrome("1 eye for of 1 eye.");//returns false
palindrome("0_0 (: /-\ :) 0-0"); //returns true
palindrome("five|\_/|four");//returns false


//////////////////////////////////////////////// ANOTHER WAY

function palindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
  
  return lettersArr.join('') === lettersArr.reverse().join('');
}
 
palindrome("Madam, I'm Adam");//returns true





