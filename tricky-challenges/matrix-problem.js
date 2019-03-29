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