// Reference type
var obj1 = { value: 10 };
var obj2 = obj1;
var obj3 = { value: '10' };
console.log(obj1, obj2);
console.log(obj1 === obj2);
console.log(obj1, obj3);
console.log(obj1.value === obj3.value);
let name = 'AVP';
let name1 = name;
console.log(name, name1);
name = "Another AVP";
console.log(name, name1)

// instantiation
class Person {
    constructor(name, address) {
        console.log(this);
        this.name = name;
        this.address = address;
    }

    introduce(){
        console.log('Hi, I am ${this.name}, and I come from ${this.address}');
    }
}

class Student extends Person{
    constructor(name, address, school){
        super(name, address);
        this.school = school;
    }
    learn(){
        console.log('I am student, I am ${this.name}, I come from ${this.address}, Now I am studying at ${this.school}')
    }
}

const student1 = new Student('AVP','HCM','KHTN');
const student2 = new Student('AVP2','HCM2','KHTN2');
const student3 = student1;
console.log(student1,student2);
student3.address = "Binh Duong";
console.log(student1,student3);
