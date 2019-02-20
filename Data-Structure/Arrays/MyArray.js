class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        delete this.data[this.length - 1];
        this.length--;
    }

    delete(index) {
        this.shiftItem(index)
    }

    shiftItem(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[index] = this.data[index + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const myArray = new MyArray();
myArray.push('Hi');
myArray.push('I\'am');
myArray.push('!');
myArray.push('Viet');
console.log(myArray);
myArray.delete(2);
console.log(myArray);
