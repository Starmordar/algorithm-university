

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
алгоритмы сортировки, и оценка их временной и пространственной \
сложности.")

console.log("%c Словесное описание заданного алгоритма поиска ", 'background: #222; color: #bada55')
console.log("Составить две программы, которые реализуют алгоритмы \
ускоренной сортировки «пузырьком» и слиянием. Исходные данные \
задавать с помощью датчика случайных чисел.")

console.log("%c Формулы верхней оценки временной и емкостной сложности \
 заданного алгоритма. ", 'background: #222; color: #bada55')

console.log("Алгоритм 1. Пузырьковая сортировка");
console.log("%c Формулы верхней оценки временной и емкостной сложности\
заданного алгоритма.  ", 'background: #222; color: #bada55')
console.log("Сортировка пузырьком (англ. Bubble sort ) — сложность \
алгоритма: O(n^2 ); для каждой пары индексов производится обмен, \
если элементы расположены не по порядку.")


function createRandomMatrix(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * (100 - 1)) + 1)
    }

    return arr;
}

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};

const arr = createRandomMatrix(100);

console.log("Initial array: ", arr)

console.time();
console.log("Sorted Array: ", bubbleSort(arr));
console.log("%c Результаты экспериментальной оценки временной ", 'background: #222; color: #bada55')
console.timeEnd();

console.log("Алгоритм 2. Сортировка слиянием")
console.log("%c Формулы верхней оценки временной и емкостной сложности\
 заданного алгоритма. ", 'background: #222; color: #bada55')
console.log("сложность алгоритма: O(n\
    log n); требуется O(n) дополнительной памяти; упорядочивают две \
    половины списка отдельно (первую и вторую), а затем — сливают их \
    воедино.")

function mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    const middle = Math.floor(unsortedArray.length / 2);

    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    return merge(
        mergeSort(left), mergeSort(right)
    );
}

function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

const arrMerge = createRandomMatrix(100);

console.log("Initial array: ", arrMerge)

console.time();
console.log("Sorted Array: ", mergeSort(arrMerge));
console.log("%c Результаты экспериментальной оценки временной ", 'background: #222; color: #bada55')
console.timeEnd();