// const basket = ['apples','grapes','pears'];

/* 
Linked List : apples ---> grapes ---> pears

apples
8947 ---> grapes
          87452 ---> pears
                      55581 ---> null
*/

// 10 ---> 16 ---> 5

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: { 
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    printLinkedList() {
        const arrayValue = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arrayValue.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arrayValue;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }

    preappend(value) {
        const preNewNode = {
            value: value,
            next: null
        }
        preNewNode.next = this.head;
        this.head = preNewNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null
        }
        const nodeAtIndex = this.traversalToIndex(index - 1);
        const holdingPointer = nodeAtIndex.next;
        nodeAtIndex.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }

    traversalToIndex(index) {
        let count = 0;
        let currentNode = this.head;
        while (index !== count) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    remove(index) {
        const nodeAtPreIndex = this.traversalToIndex(index - 1);
        const holdingPointer = nodeAtPreIndex.next;
        nodeAtPreIndex.next = holdingPointer.next;
        this.length--;
        return this;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.insert(2, 19);
myLinkedList.insert(200, 190);
myLinkedList.insert(4, 1995);
myLinkedList.insert(3, 19954);
myLinkedList.insert(5, 1995456);
myLinkedList.insert(6, 0000);
console.log(myLinkedList.printLinkedList());
myLinkedList.remove(7);
console.log(myLinkedList.printLinkedList());