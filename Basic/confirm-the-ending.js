//Check if a string (first argument, str) ends with the given target string (second argument, target).
//Don't use the .endsWith() method. 

//HELPFUL LINKS:
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

//The second argument to substring is the index to stop at (but not include); if missing, goes until the end
//The second argument to substr is the maximum length to return. 

//*********** USING SUBSTRING() *************
//substring(index start (first char to include; here, 6 - aka "n"), index end 
//here, substring (7-1);

function confirmEnding(str, target) {
    var targetLength = target.length;
	var ending = str.substring(str.length-targetLength);
    return ending === target;
}

confirmEnding("Bastian", "n");

//*********** USING SUBSTR() *************

function confirmEnding(str, target) {
	var length = target.length;
	return str.substr(-length) === target;
}

confirmEnding("Bastian", "n");