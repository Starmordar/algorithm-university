class Node {
    constructor(value, rightNode = null, leftNode = null) {
        this.value = value;
        this.rightNode = rightNode;
        this.leftNode = leftNode;
    }

    getRightNode() {
        return this.rightNode
    }

    setRightNode(rightNode) {
        this.rightNode = rightNode
    }

    getLeftNode() {
        return this.leftNode
    }
    
    setLeftNode(leftNode) {
        this.leftNode = leftNode
    }
}
