function minesweeper(matrix) {
    var lenX = matrix[0].length;
    var lenY = matrix.length;

    var arr = new Array(lenY);

    for (let i = 0; i < lenY; i++) {
        arr[i] = new Array(lenX).fill(0);

        for (let j = 0; j < lenX; j++) {
            for (let n = Math.max(0, i - 1); n <= Math.min(i + 1, matrix.length - 1); n++) {
                for (let m = Math.max(0, j - 1); m <= Math.min(j + 1, matrix[0].length - 1); m++) {
                    if (matrix[n][m] && (n != i || m != j)) arr[i][j]++;
                }
            }
        }
    }

    return arr;
}