// Native
function hasPairWithSum(arr, sum) {
    var len = arr.length
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === sum) {
                return true
            }
        }
    }
    return false
}

// console.log(hasPairWithSum([6,4,3,2,1,7], 9))

// Better
function hasPairWithSum2(arr,sum){
    const mySet = new Set()
    for(let i = 0; i < arr.length ; i++){
        mySet.add(sum - arr[i])
        if(mySet.has(arr[i])){
            return true
        }
    }
    return false
}

console.log(hasPairWithSum2([6,4,9,2,3,1], 9))