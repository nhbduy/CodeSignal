// https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ

function shapeArea(n) {
    if(n === 1) return 1;
    else        return ((n * 4) - 4) + shapeArea(n-1);
}