class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        if (!this.first) {
            return null;
        }
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this
    }

    dequeue() {
        if (!this.first) {
            return null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const myQueue = new Queue();
myQueue.enqueue("Anh Viet Pham");
myQueue.enqueue("Huy Hoang");
myQueue.enqueue("Van Cuong");
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue);
console.log(myQueue.peek());