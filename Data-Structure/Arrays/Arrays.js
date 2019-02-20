const strings = ['a', 'b', 'c', 'd', 'e'];
const numbers = [1, 2, 3, 4, 5, 6];
/*
Variable array is somewhere in memory and computer knows it.
When I do array[2], I am telling the computer, hey go to array and grab the 3rd item from where the array 
is stored
*/

//push
// strings.push('f');
// console.log(strings);

//pop
// strings.pop();
// console.log(strings);

//unshift
// strings.unshift('x');
// console.log(strings);

//splice
strings.splice(3,0,'AVP');
console.log(strings);