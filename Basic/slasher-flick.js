//Return the remaining elements of an array after chopping off n elements from the head.
//The head means the beginning of the array, or the zeroth index.

//HELPFUL LINKS:
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice?v=control
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice?v=control

function slasher(arr, howMany) {
	//for the number of times indicated
    for (var i= 0; i < howMany; i++) {
       //deletes 1 from beginning
       arr.shift();
    } 
    return arr;
}

var test = slasher([1, 2, 3], 2);

slasher([1, 2, 3], 2); //returns [3]

//---------------------can also do-----------------------

//arr.slice(begin, end)
//--- If end is omitted, slice EXTRACTS through the end of the sequence (arr.length)

function slasher(arr, howMany) {
	return arr.slice(howMany);
}

slasher([1, 2, 3], 2);

//----------------------other option----------------------

//The splice() method REMOVES or ADDS to existing elements
//--- array.splice(startIndex, deleteCount, itemToAdd )

function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);








