class StackArray {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    pop() {
        return this.array.pop();
    }

    push(value) {
        this.array.push(value);
        return this;
    }
}

const myStackArray = new StackArray();
myStackArray.push('Anh Viet Pham');
myStackArray.push('Dennis Pham');
myStackArray.push('Pham Le Huy Hoang');
myStackArray.push('Pham Van Cuong');
myStackArray.push('Le Thi Hoa');
myStackArray.pop();
console.log(myStackArray);
console.log(myStackArray.peek())