class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let currentNode = this.root;
            while (currentNode) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        } else {
            let currentNode = this.root;
            while (currentNode) {
                if (value < currentNode.value) {
                    currentNode = currentNode.left;
                } else if (value > currentNode.value) {
                    currentNode = currentNode.right;
                } else if (value == currentNode.value) {
                    return currentNode;
                }
            }
        }
        return false;
    }

    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                if (!currentNode.left && !currentNode.right) {
                    if (currentNode.value < parentNode.value) {
                        parentNode.left = null;
                        return this;
                    } else if (currentNode.value > parentNode.value) {
                        parentNode.right = null;
                        return this;
                    }
                } else if (!currentNode.left) {
                    if (currentNode.value < parentNode.value){
                        parentNode.left = currentNode.right;
                        return this;
                    }else {
                        parentNode.right = currentNode.right;
                        return this;
                    }
                } else if (!currentNode.right){
                    if (currentNode.value < parentNode.value){
                        parentNode.left = currentNode.left;
                        return this;
                    }else {
                        parentNode.right = currentNode.left;
                        return this;
                    }
                } else if (currentNode.left && currentNode.right){
                    
                }
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(3)
tree.insert(5)
tree.insert(21)
tree.insert(130)
tree.insert(154)
tree.insert(1)
tree.insert(2)
tree.insert(6)
tree.remove(5)
tree.remove(1)
console.log(JSON.stringify(traverse(tree.root)));
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}