let data = [
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [4, 8, 12, 16]
]

//expectation - Given n*n matrix print the items diagonally from the bottom 
//eg : 16 12 15 8 11 14 ... so on

for (let i = 2 * (data.length - 1); i >= 0; i--) {
    for (let j = data.length - 1; j >= 0; j--) {
        let k = i - j;
        if (k >= 0 && k < data.length) {
            console.log(data[j][k]);
        }

    }
}