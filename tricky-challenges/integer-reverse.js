// 51 = 15
//-51 = -51
// -01 = -1

// function reverse(n) {
//     var reversed = n.toString().split('').reverse('').join('');
//     if (n < 0) {
//         return parseInt(reversed) * -1;
//     }

//     return parseInt(reversed);
// }

//using Math sign
function reverse(n) {
    var reversed = n.toString().split('').reverse('').join('');

    return parseInt(reversed) * Math.sign(n);
}

console.log(reverse(51));
console.log(reverse(-51));
console.log(reverse(-01));
console.log(reverse(01));