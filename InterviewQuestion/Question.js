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
const array1 = ['a','b','c','x'];
const array2 = ['z', 'y', 'a'];
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

console.log(containsCommonItem(array1,array2));

// O(a * b)