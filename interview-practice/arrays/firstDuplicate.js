function firstDuplicate(a) {
    var i = 0;
    var len = a.length;

    if (len == 2 && a[0] == a[1]) return a[0];

    while (i < len) {
        var num = Math.abs(a[i]);
        if (a[i] > len) return -1;
        if (a[num - 1] < 0) return num;
        else a[num - 1] = a[num - 1] * -1;

        i++;
    }

    return -1;
}