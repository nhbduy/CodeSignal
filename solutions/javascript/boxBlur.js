function boxBlur(image) {
    var lenX = image[0].length - 2;
    var lenY = image.length - 2;

    var arr = new Array(lenY);

    for (let i = 0; i < lenY; i++) {
        arr[i] = new Array(lenX);
        for (let j = 0; j < lenX; j++) {
            var sum = image[i][j] + image[i][j + 1] + image[i][j + 2] +
                image[i + 1][j] + image[i + 1][j + 1] + image[i + 1][j + 2] +
                image[i + 2][j] + image[i + 2][j + 1] + image[i + 2][j + 2];

            arr[i][j] = Math.floor(sum / 9);
        }
    }

    return arr;
}