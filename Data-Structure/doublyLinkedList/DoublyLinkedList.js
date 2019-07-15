class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    printDoublyLinkedList() {
        const arrayValue = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arrayValue.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arrayValue;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    preAppend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {

        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const nodeAtPreIndex = this.traversalToIndex(index - 1);
        const holdingPoniter = nodeAtPreIndex.next;
        nodeAtPreIndex.next = newNode;
        newNode.prev = nodeAtPreIndex;
        newNode.next = holdingPoniter;
        holdingPoniter.prev = newNode;
        this.length++;
        return this;
    }

    traversalToIndex(index) {
        let count = 1;
        let currentNode = this.head;
        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    remove(index) {
        const nodeAtPreIndex = this.traversalToIndex(index - 1);
        const holdingPointer = nodeAtPreIndex.next;
        nodeAtPreIndex.next = holdingPointer.next
        holdingPointer.prev = nodeAtPreIndex;
        this.length--;
        return this;
    }
}

const myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.append(2);
myDoublyLinkedList.append(3);
myDoublyLinkedList.append(4);
myDoublyLinkedList.insert(100,550);
myDoublyLinkedList.preAppend(44);
myDoublyLinkedList.insert(3,99);
myDoublyLinkedList.remove(3);
console.log(myDoublyLinkedList.printDoublyLinkedList());