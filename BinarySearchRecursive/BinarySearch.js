// 1. Название и цель работы.
// 2. Словесное описание заданных рекурсивных алгоритмов.
// 3. Тексты программ.
// 4. Формулы верхней оценки временной и емкостной сложности
// заданных алгоритмов.
// 5. Результаты экспериментальной оценки временной и емкостной
// сложности заданных алгоритмов.                                                        

console.log("%c Название и цель работы ", 'background: #222; color: #bada55')
console.log("Разработка программ, реализующих различные \
рекурсивные алгоритмы, и оценка их временной и пространственной \
сложности.")

console.log("%c Словесное описание заданного алгоритма поиска ", 'background: #222; color: #bada55')
console.log("Разработать алгоритм и программу дихотомического поиска. В \
качестве исходных данных использовать массив целых чисел, \
который вводится с клавиатуры. Аргумент поиска – число.")

console.log("%c Формулы верхней оценки временной и емкостной сложности \
 заданных алгоритмов. ", 'background: #222; color: #bada55')
console.log("Среднее время\
 дихотомического поиска пропорционально величине log 2 n, где n — \
 количество элементов таблицы эталонов. Таким образом, ускорение \
 достигается за счет дополнительной информации о расположении \
 элементов, а асимптотическая оценка алгоритма О(n) = log 2 n.")
console.log("Оценка рекурсии T(n)=T(n/2)+1 T(n) = T(1) + log n T(n) = O(log n)")
console.log("О(log 2 n)")

function createSortedRandomMatrix(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * (900000 - 1)) + 1)
    }

    arr = arr.sort((a, b) => a - b);

    return arr;
}

const binarySearch = function (array, target, min, max) {
    let tArray = array.slice();
    if (min === undefined) min = 0;
    if (max === undefined) max = array.length - 1;

    let guess = Math.floor(((max - min) / 2) + min);
    if (max <= min && tArray[guess] !== target) return "Value is not presented in array";
    else if (tArray[guess] === target) return guess;
    else if (tArray[guess] < target) return binarySearch(tArray, target, guess + 1, max);
    else return binarySearch(tArray, target, min, guess - 1);
};

const arr = createSortedRandomMatrix(1000000);

console.time();
console.log(binarySearch(arr, 4));
console.log("%c Результаты экспериментальной оценки временной ", 'background: #222; color: #bada55')

console.timeEnd();

console.log(arr);