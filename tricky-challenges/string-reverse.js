// solution 2
function reverse(str) {
    return str.split('').reverse().join('');
}

// solution 2
function reverse(str) {
    var reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

//solution 3
function reverse(str) {
    return str.split('').reduce(function (accumulator, currentValue, currentIndex, array) {
        return currentValue + accumulator;
    });
}

var str = 'test';
console.log(reverse(str));