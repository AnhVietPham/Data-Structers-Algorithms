/* 
    text 1 = 'Anh Viet Pham'
    text 2 = 'mahP teiV hnA'
*/

function reverse(str) {
    if (str.length < 2 || typeof str !== 'string') {
        return 'This is not String'
    }

    const backward = [];
    const totalItem = str.length - 1;
    for (let i = totalItem; i >= 0; i--) {
        backward.push(str[i]);
    }

    console.log(backward.join(''));
}

function reverse1(str){
    return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');

console.log(reverse3('mahP teiV hnA'));