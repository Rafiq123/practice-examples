
// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// function fib(n) {
//     var fibSeries = [];
//     fibSeries[0] = 0;
//     fibSeries[1] = 1;
//     for (i = 2; i < n; i++) {
//         fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2]
//     }

//     return fibSeries;
// }

// function fib(n, fibSeries = [], position = 2){
//   if(n=== position) return;
//   if(position == 2){
//     fibSeries.push(0);
//     fibSeries.push(1);
//   }
//   if (position !== n){
//     fibSeries[position] = fibSeries[position-1]+fibSeries[position-2];
//     fib(n,fibSeries,position+1);
//   }
//   return fibSeries;
// }


// function fib(n) {
//     if (n < 2) {
//         return n
//     }

//     return fib(n - 1) + fib(n - 2)
// }
// console.log(fib(6));


//since the abouve recursion solution has exponentioal time complexity 2*n
//we can reduce the time complexity using memoization 

function memoize(fn) {
    var cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        var result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}
function fib(n) {
    if (n < 2) {
        return n
    }

    return fib(n - 1) + fib(n - 2)
}

var fib = memoize(fib);
console.log(fib(2));