function mergeSortArray(arr1, arr2) {
    const mergeSortArray = []
    var firstItemArr1 = arr1[0];
    var firstItemArr2 = arr2[0];
    var i = 1;
    var j = 1;

    if (arr1.length === 0) {
        return arr2;
    }

    if (arr2.length === 0) {
        return arr1;
    }

    while (firstItemArr1 || firstItemArr2) {
        console.log(firstItemArr1, firstItemArr2);
        if (firstItemArr2 === undefined || firstItemArr1 < firstItemArr2) {
            mergeSortArray.push(firstItemArr1);
            firstItemArr1 = arr1[i];
            i++;
        } else {
            mergeSortArray.push(firstItemArr2);
            firstItemArr2 = arr2[j];
            j++;
        }
    }
    return mergeSortArray;
}

console.log(mergeSortArray([0,3,10], [3,4,11,30]));
