class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            var currentNode = this.root;
            while (currentNode) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left
                } else {
                    if (value > currentNode.value) {
                        if (!currentNode.right) {
                            currentNode.right = newNode;
                            return this;
                        }
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }

}