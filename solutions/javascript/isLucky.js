// https://app.codesignal.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ

function isLucky(n) {
    var sum1 = 0;
    var sum2 = 0;
    var arr = n.toString().split('');

    for (let i = 0; i < arr.length / 2; i++) {
        sum1 += parseInt(arr[i]);
    }
    for (let i = arr.length / 2; i < arr.length; i++) {
        sum2 += parseInt(arr[i]);
    }

    return sum1 == sum2 ? true : false;
}