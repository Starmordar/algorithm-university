function createRandomMatrix(n) {
    let matrix = [];

    for (let i = 0; i < n; i++) {
        matrix[i] = [];

        for (let j = 0; j < n; j++) {
            matrix[i][j] = (Math.random() * n | 0) + 1
        }
    }

    return matrix;
}

function isEvenNumber(value) {
    if (value % 2 === 0) return true;
    return false;
}

console.time();
const matrix = createRandomMatrix(3000);
console.timeEnd();

let evenCount = 0, oddCount = 0;

console.time();
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (isEvenNumber(matrix[i][j])) evenCount++
        else oddCount++;
    }
}
console.timeEnd();

console.log("The number of even numbers: " + evenCount);
console.log("The number of odd numbers: ", + oddCount);
console.log("Total numbers: " + (evenCount + oddCount));