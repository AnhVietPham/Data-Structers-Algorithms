// For loop in Javascript
const {
    performance,
    PerformanceObserver
  } = require('perf_hooks');
  
const nemo = ['nemo'];
const fish = ['dory', 'bruce','marlin','nemo'];
const everyone = ['dory','bruce','marlin','nemo','gill','bloat','nigel','squirt','darla','hank'];
const large = new Array(1000000).fill('nemo');
// function findNemo(array){
//     for (let i = 0; i < array.length; i++){
//         if(array[i] === 'nemo'){
//             console.log('Found Nemo');
//         }
//     }
// }

// findNemo(nemo);

function findNemo2(array){
    let t0 = performance.now();
    for(let i = 0; i < array.length; i++){
        console.log(i)
        if(array[i] === 'nemo'){
            console.log('Found Nemo!');
        }
    }
    let t1 = performance.now();
    console.log("Call to find Nemo took " + (t1 - t0) + " miliseconds");
}

findNemo2(fish);