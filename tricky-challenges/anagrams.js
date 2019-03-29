// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


//solution 1
function isAnagrams(strA, strB) {
    var mapA = charObjMap(strA);
    var mapB = charObjMap(strB);

    if (Object.keys(mapA).length !== Object.keys(mapB).length) {
        return false;
    }

    for (let char in mapA) {
        if (mapA[char] !== mapB[char]) {
            return false;
        }
    }

    return true;

}

function charObjMap(str) {
    var charMap = {};
    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

console.log(isAnagrams('Hi there', 'Bye there'))





//solution 2

function cleanString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function isAnagram(strA, strB) {
    return cleanString(strA) === cleanString(strB);
}

console.log(isAnagram('Hi there', 'Bye there'))