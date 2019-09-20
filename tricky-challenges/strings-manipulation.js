//find the logest word in a given setanance

function longestWord(str){
    //logic
    //split into array
    //sort

    let strArr = str.match(/[A-Za-z0-9]+/gi);
    let sorted = strArr.sort(function(a,b){
      return a.length - b.length;
    })
    return sorted[sorted.length-1];
}

let str = 'Hello$$My?Name>Is?&^Longestword';
console.log(longestWord(str));