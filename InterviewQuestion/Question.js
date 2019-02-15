/* 
    Give 2 arrays, create a function that let's a user know (true/fase)
    whether these two arrays contain any common items 
    For example:
    const array1 = ['a','b','c','x'];
    const array2 = ['z', 'y', 'i'];
    should return fase
    -------------
    const array1 = ['a','b','c','x'];
    const array2 = ['z', 'y', 'i'];
    should return true
*/
// Solution 1
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'c'];
function containsCommonItem(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true
            }
        }
    }
    return false
}

//console.log(containsCommonItem(array1,array2));
// O(a * b)

// Create object in Javascript
const person = {
    name: 'Anh Viet Pham',
    age: 23,
    gender: 'male',
    interests: ['Music', 'Soccer'],
    address: 'HCM City'
};
//console.log(person['age']);

// Soluton 2 --> Usng Object in JavaScript
function containsCommonItem2(arr1, arr2) {
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i]
            map[item] = true;
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false;
}
console.log(containsCommonItem2(array1, array2));
// O(a + b)