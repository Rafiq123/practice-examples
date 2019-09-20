// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[undefined, undefined],
//     [undefined, undefined]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//     var col = [];
//     let level = 1;
//     for (i = 0; i < n; i++) {
//         var row = [];

//         for (j = level; j < n + level; j++) {
//             row.push(j)
//         }
//         level = j;
//         col.push(row);
//     }
//     return col;
// }

function matrixSpiral(n) {
    var results = [];

    for (i = 0; i < n; i++) {
        results.push([]);
    }
    console.log(results);
}
console.log(matrixSpiral(6));



//2 :  write a function to compute the diagonal difference of matric
//input let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

//output : 0

let printMatrixDiagonally = (arr) => {
    let n = arr.length;
    let sum1 = 0;
    let sum2 = 0;
    for(i=0;i < arr.length;i++){
        sum1 += arr[i][i];
        sum2 += arr[n-1-i][i];
    }

    console.log(sum1 - sum2);
}


let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

printMatrixDiagonally(arr);
