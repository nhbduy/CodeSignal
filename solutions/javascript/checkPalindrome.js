// https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ

function checkPalindrome(inputString) {
    var re = /[\W_]/g;
    inputString = inputString.toLowerCase().replace(re, '');
    
    for(let i = 0; i < inputString.length/2; i++) {
        if(inputString[i] !== inputString[inputString.length - 1 - i])  return false;
    }
    
    return true;
}