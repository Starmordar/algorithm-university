function getGeneratedRandomMatrix(n) {
    let matrix = [];

    for (let i = 0; i < n; i++) {
        matrix[i] = [];

        for (let j = 0; j < n; j++) {
            matrix[i][j] = Math.floor(Math.random() * 40)
        }
    }

    return matrix;
}

function isOddNumber(number) {
    return number % 2;
}