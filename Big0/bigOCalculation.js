
function funChallenge(input) {
    let a = 10; // O[1]
    a = 50 + a; // O[1]

    for (let i = 0; i < input.length; i++) {  // O[n]
        anotherFunction(); // O[n]
        let stranger = true; // O[n]
        a++; // O[n]
    }
    return a // O[1]
}

// Big O(3 + 4n) 
// Remove constants --> Big O(4n)