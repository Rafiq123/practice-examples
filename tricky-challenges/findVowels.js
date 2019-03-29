// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// solution1
function findVowels(str) {
    var charMap = {};
    for (let char of str.toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return (charMap.a || 0) + (charMap.e || 0) + (charMap.i || 0) + (charMap.o || 0) + (charMap.u || 0)
}

console.log(getVowels('Why do you Ask?'));

//solution2
function findVowels(str) {
    var count = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

//solution 3 (using regExpression)

function findVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
console.log(findVowels('Why do you Ask?'));