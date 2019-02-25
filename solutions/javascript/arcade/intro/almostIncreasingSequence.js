// https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG

function almostIncreasingSequence(sequence) {
    var check = 0;
    for(let i = 1; i < sequence.length; i++) {
        if(sequence[i] <= sequence[i-1]) {
            check++;
            if(check > 1)   return false;
            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1])  return false;
        }
    }
    
    return true;
}