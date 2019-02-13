// Rule Worst Case
// Example 1
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + a; // O(1)

    for (let i = 0; i < input.length; i++) {  // O(n)
        anotherFunction(); // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
    }
    return a // O(1)
}

// Big O(3 + 4n) 
// Rule Remove constants --> Big O(n)


// Example 2
function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)

    for (let i = 0; i < input; i++) { // O(n)
        let x = i + 1; // O(n)
        let y = i + 2; // O(n)
        let z = i + 3; // O(n)
    }

    for (let j = 0; i < input; j++) { // O(n)
        let p = j * 2; // O(n)
        let q = j * 2; // O(n)
    }

    let whoAmI = "I don't know"; // O(1)
}

//BIG O(4 + 7n)
// Remove constant --> BIG O(n)

// Example 3
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); // O(1)

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) { // O(n/2)
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) { // O(100)
        console.log("Hi");
    }
}

// O(1 + n/2 + 100) --> O(n/2 + 101)
// Remove constant time --> O(n)

//Example 4
function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(element => { // O(a)
        console.log(boxes)
    });

    boxes2.forEach(element => { // O(b)
        console.log(boxes)
    });
}

// Rule Different term for input
// Big O(a + b)