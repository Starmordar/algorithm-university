const logger = new Logger();
logger.printStartMatrixAlgorithmInfo()

const matrix = getGeneratedRandomMatrix(MATRIX_ROW_NUMBERS);

let oddNumberCounter = 0
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (isOddNumber(matrix[i][j])) oddNumberCounter++
    }
}

console.log("The number of odd numbers: ", + oddNumberCounter);