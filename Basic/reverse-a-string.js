//reverse a given string ex. "hello" should return "olleh"

//helpful links:
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse?v=control
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join?v=control

//split() - separator is an empty string, so str is converted to an array of characters;
//split() without ('') just gives entire an array with 1 item (the entire unseparated string)
//join() without ('') returns a string with the array commas in between
function reverseString(str) {
	return str.split('').reverse().join('');
}

reverseString('hello');

