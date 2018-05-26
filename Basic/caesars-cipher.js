// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift 
//cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 ("rotate by 13 places") cipher, where the values of the letters are shifted by 
//13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, 
//punctuation), but do pass them on.

//HELPFUL LINKS: 
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

function rot13(str) { 
    var ans = "";
    var letters = /[A-Z]/;  
    for (var i = 0; i < str.length; i++) {
        if (str.substr(i,1).match(letters)) {
       
            if ((str.charCodeAt(i) + 13) <= 90) {
              console.log(str.charCodeAt(i) + 13);
              ans = ans + String.fromCharCode(str.charCodeAt(i) + 13);
            } else {
              console.log("bad");
              console.log(str.charCodeAt(i));
              // can also use: ans = ans + String.fromCharCode(13 - (91 - str.charCodeAt(i)) + 65);
              ans = ans + String.fromCharCode(str.charCodeAt(i) + 13 -26) ;
            }
        } else {
          ans = ans + str.substr(i,1);
        }
      
      
      
    }
    return ans;
}

rot13("SERR PBQR PNZC"); //should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!"); //should decode to "FREE PIZZA!"
rot13("SERR YBIR?"); // should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); // should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."

//--------------------------- another way ---------------------------

function rot13(str) {
  var arr = str.split('');
  var newArr = [];
  var letterCode = 0;
  arr.forEach(function(letter) {
    if (letter.charCodeAt() < 65 || letter.charCodeAt() > 90) {
      letterCode = letter.charCodeAt();
    } else {
      if (letter.charCodeAt() + 13 > 90 ) {
        letterCode = letter.charCodeAt() - 13;
      } else {
        letterCode = letter.charCodeAt() + 13;
      }
    }
    newArr.push(String.fromCharCode(letterCode));
  });
  return newArr.join('');
}
