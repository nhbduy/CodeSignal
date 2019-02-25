// https://app.codesignal.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL

function allLongestStrings(inputArray) {
    var len = inputArray[0].length;
    var arr = inputArray.map(function (inp) {
        if (len < inp.length) len = inp.length;
    });

    var result = [];
    for (let item of inputArray) {
        if (item.length === len) result.push(item);
    }

    return result;
}