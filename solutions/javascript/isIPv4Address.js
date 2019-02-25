function isIPv4Address(inputString) {
    var arr = inputString.split('.');
    var bool = arr.every(function (x) {
        return (x != '' && !isNaN(x) && x > -1 && x < 256);
    });

    return arr.length === 4 && bool;
}