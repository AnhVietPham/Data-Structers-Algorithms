class Node {
    constructor(value) {
        this.node = null;
        this.value = value;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
}

class SpecicalQueue {
    constructor() {
        this.firstStack = new Stack();
        this.secondStack = new Stack();
    }


    enqueue(value) {
        if (!this.firstStack.top) {
            this.firstStack.push(value)
            return this.firstStack;
        }

        while (this.firstStack.top != null) {
            this.secondStack.push(this.firstStack.peek().value);
            this.firstStack.pop();
        }

        this.firstStack.push(value);

        while (this.secondStack.top != null) {
            this.firstStack.push(this.secondStack.peek().value)
            this.secondStack.pop();
        }
        return this.firstStack;
    }

    printSpecialQueue() {
        const arrayValue = [];
        while (this.firstStack.top != null) {
            arrayValue.push(this.firstStack.peek().value);
            this.firstStack.pop();
        }
        return arrayValue;
    }

    dequeue() {
        this.firstStack.pop();
    }

    peek() {
        return this.firstStack.peek().value
    }
}

const mySpecialQueue = new SpecicalQueue();
mySpecialQueue.enqueue("Anh Viet Pham 0");
mySpecialQueue.enqueue("Anh Viet Pham 1");
mySpecialQueue.enqueue("Anh Viet Pham 2");
mySpecialQueue.enqueue("Anh Viet Pham 3");
mySpecialQueue.enqueue("Anh Viet Pham 4");
mySpecialQueue.dequeue()
mySpecialQueue.peek();
console.log(mySpecialQueue.peek());