class Node {
    constructor(value) {
        this.next = null;
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

    printStack(){
        const arrayValue = [];
        while(this.top != null){
            arrayValue.push(this.peek().value);
            this.pop();
        }
        return arrayValue;
    }
}

const myStack = new Stack();
myStack.push("Anh Viet Pham 0");
myStack.push("Anh Viet Pham 1");
myStack.push("Anh Viet Pham 2");
myStack.push("Anh Viet Pham 3");
myStack.push("Anh Viet Pham 4");
console.log(myStack.printStack());