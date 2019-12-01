// 1. Название и цель работы.
// 2. Формулы асимптотической и верхней оценки сложности
// заданного алгоритма.
// 3. Исходный код программы экспериментальной оценки временной
// сложности заданного алгоритма для массива большой
// размерности.
// 4. Значения временной сложности алгоритма, полученные
// экспериментальным способом, а также количество повторений
// алгоритма и объем исходных данных, при котором были
// получены эти значения.
// 5. График зависимости времени выполнения алгоритма от объема
// исходных данных.

console.log("%c Название и цель работы ", 'background: #222; color: #bada55')
console.log("Изучение методов оценки алгоритмов и программ \
и определение временной и емкостной сложности типовых \
алгоритмов и программ.")
console.log("Составить программу, которая формирует матрицу из n*n \
случайных чисел. Определить количество четных чисел и количество \
нечетных. Значение n меняется в пределах от 5 до 10 тысяч.")

console.log("%c Формулы асимптотической и верхней оценки сложности \
заданного алгоритма. ", 'background: #222; color: #bada55')

console.log("Алгоритм выполняет одинаковое количество операций при \
фиксированном значении n и, следовательно, является количественно-зависимым. \
Применение методики анализа конструкции «Цикл» дает")

console.log("Θ (n)=2+f цикла по i = n + *f цикла по j = n= n *n = n^2 + 2 = Θ(n^2+2)")

console.log("Сложность алгоритма Θ (n^2)")

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

const matrix = createRandomMatrix(3000);

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