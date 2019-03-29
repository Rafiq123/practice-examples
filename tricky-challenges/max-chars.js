//maximum occurance of charecters in string

var str = 'test results'; // t - 3 times

function maxChar(str) {
    var charObj = {};
    for (let char of str) {
        charObj[char] = charObj[char] + 1 || 1;
    }

    var max = 0;
    var maxChar = '';
    for (let char in charObj) {
        if (charObj[char] > max) {

            max = charObj[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(maxChar(str));