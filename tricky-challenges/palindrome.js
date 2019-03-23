function palindrome(str){
    var reversed = str.split('').reverse().join('');
    return reversed === str;
}