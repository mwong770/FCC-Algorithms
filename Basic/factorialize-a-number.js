//Return the factorial of the provided integer
//For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
//helpful links: 
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//--- http://mathforum.org/library/drmath/view/57128.html


function factorialize(num) {
    var factoredNum = num;
    if (num === 0) {
      return 1;
    } else {
        for (var i = 1; i < num; i++) {
          factoredNum *= i;
        }
        return factoredNum;
    } 
}

factorialize(5);

//For 1 to < num (here, num is 5) so loop 4 times,
//---(1) // total = total * i = 5 * 1 = 5
//---(2) // total = total * i = (5 * 1) * 2 = 10
//---(3) // total = total * i = ((5 * 1) * 2) * 3 = 30
//---(4) // total = total * i = (((5 * 1) * 2) * 3) * 4 = 120

//----------Another Way But Using Recursion

factorial(num) {
   if (num === 0)
      return 1;
   else
      return (num * factorial(num - 1));
}

factorial(3)
   
//The Recursive Way Gives:
//----- 3 * factorial(2)
//----- 3 * 2 * factorial(1)
//----- 3 * 2 * 1 * factorial(0)
//----- 3 * 2 * 1 * 1
//----- = 6









