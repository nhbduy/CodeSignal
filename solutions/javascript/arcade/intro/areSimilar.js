function areSimilar(a, b) {
    var indexArr = new Array();

    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) indexArr.push(i);
    }

    if (indexArr.length == 0) return true;
    else if (indexArr.length == 2 && a[indexArr[0]] == b[indexArr[1]] && a[indexArr[1]] == b[indexArr[0]]) return true;

    return false;
}