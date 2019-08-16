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
                    if (currentNode.value < parentNode.value) {
                        parentNode.left = currentNode.right;
                        return this;
                    } else {
                        parentNode.right = currentNode.right;
                        return this;
                    }
                } else if (!currentNode.right) {
                    if (currentNode.value < parentNode.value) {
                        parentNode.left = currentNode.left;
                        return this;
                    } else {
                        parentNode.right = currentNode.left;
                        return this;
                    }
                } else if (currentNode.left && currentNode.right) {
                    let leftMostParent = currentNode.left;
                    if ((!leftMostParent.right) || (!leftMostParent.right && !leftMostParent.left)) {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftMostParent;
                            return this;
                        } else {
                            parentNode.right = leftMostParent;
                            return this;
                        }
                    } else if (leftMostParent.right) {
                        let leftMostChild = leftMostParent.right;
                        if (!leftMostChild.right || (!leftMostChild.right && !leftMostChild.left)) {
                            if (currentNode.value < parentNode.value) {
                                parentNode.left = leftMostChild;
                                leftMostParent.right = leftMostChild.left;
                                parentNode.left.left = leftMostParent;
                                parentNode.left.right = currentNode.right;
                                return this
                            } else {
                                parentNode.right = leftMostChild;
                                leftMostParent.right = leftMostChild.left;
                                parentNode.right.left = leftMostParent;
                                parentNode.right.right = currentNode.right;
                                return this;
                            }
                        } else if (leftMostChild.right) {
                            let currentRightNodeOfLeftMostChild = leftMostChild.right;
                            let subCurrentOfRightNodeOfLeftMostChild = currentRightNodeOfLeftMostChild.right
                            while (subCurrentOfRightNodeOfLeftMostChild) {
                                leftMostChild = currentRightNodeOfLeftMostChild;
                                currentRightNodeOfLeftMostChild = subCurrentOfRightNodeOfLeftMostChild;
                                subCurrentOfRightNodeOfLeftMostChild = subCurrentOfRightNodeOfLeftMostChild.right;
                            }
                            leftMostChild.right = subCurrentOfRightNodeOfLeftMostChild;

                            if (currentNode.value < parentNode.value) {
                                parentNode.left = currentRightNodeOfLeftMostChild;
                                currentRightNodeOfLeftMostChild.left = leftMostParent;
                                return this;
                            } else {
                                parentNode.right = currentRightNodeOfLeftMostChild;
                                currentRightNodeOfLeftMostChild.left = leftMostParent;
                                return this;
                            }
                        }
                    }
                }
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(44)
tree.insert(17)
tree.insert(88)
tree.insert(8)
tree.insert(32)
tree.insert(28)
tree.insert(21)
tree.insert(29)
tree.insert(65)
tree.insert(97)
tree.insert(54)
tree.insert(82)
tree.insert(93)
tree.insert(76)
tree.insert(68)
tree.insert(80)
tree.insert(6)
tree.insert(85)
tree.insert(87)
tree.remove(88)
console.log(JSON.stringify(traverse(tree.root)));
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}