// Отчет о выполненной работе должен содержать.
// 1. Название и цель работы.
// 2. Словесное описание заданного алгоритма поиска.
// 3. Текст программы.
// 4. Формулы верхней оценки временной и емкостной сложности
// заданного алгоритма.
// 5. Результаты экспериментальной оценки временной и емкостной
// сложности заданного алгоритма.

console.log("%c Название и цель работы ", 'background: #222; color: #bada55')
console.log("Разработка программ, реализующих различные \
алгоритмы поиска, и оценка их временной и пространственной \
сложности.")

console.log("%c Словесное описание заданного алгоритма поиска ", 'background: #222; color: #bada55')
console.log("Реализовать алгоритм ввода одномерного массива и дихотомического \
целочисленного значения ключа в нем")

console.log("%c Формулы верхней оценки временной и емкостной сложности \
 заданного алгоритма. ", 'background: #222; color: #bada55')
console.log("Среднее время\
 дихотомического поиска пропорционально величине log 2 n, где n — \
 количество элементов таблицы эталонов. Таким образом, ускорение \
 достигается за счет дополнительной информации о расположении \
 элементов, а асимптотическая оценка алгоритма О(n) = log 2 n.")
console.log("Оценка временной сложности сложности О(n) = log 2 n")
console.log("Общая оценка сложности О(log 2 n)")

function createSortedRandomMatrix(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * (900000 - 1)) + 1)
    }

    arr = arr.sort((a, b) => a - b);

    return arr;
}

function binarySearch(arr, element) {
    let startIndex = 0,
        endIndex = arr.length - 1,
        middleIndex;


    while (startIndex <= endIndex) {
        middleIndex = Math.floor((startIndex + endIndex) / 2);

        if (element > arr[middleIndex]) startIndex = middleIndex + 1;
        else if (element < arr[middleIndex]) endIndex = middleIndex - 1;
        else return middleIndex;
    }

    return "Value is not present in array";
}

const arr = createSortedRandomMatrix(100000);

console.time();
console.log(binarySearch(arr, 4));
console.timeEnd();

console.log(arr);