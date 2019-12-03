console.log(`1. Построить двоичное дерево, содержащее n = 18 узлов.
Значения ключей в узлах задавать с помощью датчика случайных
чисел с диапазоном D от 0 до 160.
2. Построить В+ дерево, содержащее n = 18 узлов и имеющее
степень m = 5. Значения ключей в узлах задавать с помощью датчика
случайных чисел с диапазоном D от 0 до 160.
3. Обеспечить обход деревьев «снизу вверх».
4. Выполнить поиск значения ключа по близости снизу.`)

const NODE_NUMBERS = 18;
const MAX_NODE_VALUE = 120

const tree = BinaryTree.initWithRandomIntegers(NODE_NUMBERS, MAX_NODE_VALUE);

let treeMap = tree.depthFirstSearch(tree.getRootNode())

let leafNumbers = 1

function printNode(node, depth, isFirst) {
    for (const key in node) {
        if (key === "value") {
            if (depth === 0) console.log("├─" + node.value);
            else if (isFirst) console.log("|".repeat(depth - 1) + "│" + "├─" + node.value)
            else console.log("|".repeat(depth - 1) + "└─" + node.value)
        }
        else if (key === "rightNode") printNode(node.getRightNode(), ++depth, true)
        else if (key === "leftNode") printNode(node.getLeftNode(), ++depth, false)
    }
}

console.log(tree)
// printNode(tree.getRootNode(), 0, false)

console.log(tree.depthFirstSearch(tree.getRootNode()))
console.log(tree.breadthFirstSearch(tree.getRootNode(), 11))
