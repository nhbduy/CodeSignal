// https://app.codesignal.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM

function sortByHeight(a) {
    var temp = a.filter(function (x) {
        return x != -1;
    }).sort(function (a, b) {
        return a - b;
    }); //array non-descending order

    for (let i = 0; i < a.length; i++) {
        if (a[i] != -1) {
            a[i] = temp[0];
            temp.shift();
        }

    }

    return a;
}