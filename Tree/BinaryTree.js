class BinaryTree {
    constructor(root = null) {
        this.root = root
    }

    static initWithRandomIntegers(nodeNumber, maxValue) {
        let tree = new BinaryTree()
        for (let i = 0; i < nodeNumber; i++) {
            let random = Math.floor(Math.random() * maxValue)
            tree.insert(new Node(random))
        }

        return tree
    }

    setRootNode(rootNode) {
        this.root = rootNode
    }

    getRootNode() {
        return this.root
    }

    insert(node) {
        if (this.root === null)
            this.setRootNode(node)

        else
            this.insertNode(node, this.root)
    }

    insertNode(newNode, node) {
        if (newNode.value >= node.value) {
            if (node.getRightNode() === null)
                node.setRightNode(newNode)
            else
                this.insertNode(newNode, node.getRightNode())
        } else if (newNode.value < node.value) {
            if (node.getLeftNode() === null)
                node.setLeftNode(newNode)
            else
                this.insertNode(newNode, node.getLeftNode())
        }
    }

    depthFirstSearch(currentNode) {
        let queue = [];

        if (currentNode !== null) {
            queue.push(currentNode.value);
            queue = [...queue, ...this.depthFirstSearch(currentNode.getRightNode())];
            queue = [...queue, ...this.depthFirstSearch(currentNode.getLeftNode())];
        }

        return queue
    }

    breadthFirstSearch(currentNode, value) {
        let queue = [currentNode]

        while (queue.length) {
            let node = queue.shift()

            if (node.value === value) return "Find it"

            if (node.getLeftNode() !== null) queue.push(node.getLeftNode())
            if (node.getRightNode() !== null) queue.push(node.getRightNode())
        }

        return "Value is not represented in tree"
    }
}