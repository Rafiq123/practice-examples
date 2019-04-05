//Directions
//Input caller(1)(2)(3)('+)
//Input caller(1)(3)('+)
//dynamic input calls

function caller(n) {
    var arr = [n];
    var innerCaller = function (n) {
        if (n === '+') {
            return arr.reduce((result, item) => result + item);
        } else if (n === '-') {
            return arr.reduce((result, item) => result - item);
        } else {
            arr.push(n);
            return innerCaller;
        }
    }
    return innerCaller;
}

console.log(caller(5)(9)(10)(23)('-'));
console.log(caller(5)(9)(10)('+'));