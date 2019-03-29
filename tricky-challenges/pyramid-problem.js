// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//solution 1
function pyramid(n) {
    let colLength = (n + (n - 1));
    for (let row = 0; row < n; row++) {
        var level = '';
        for (let col = 0; col < colLength; col++) {
            if (col >= Math.floor(colLength / 2) - row && col <= Math.floor(colLength / 2) + row) {
                level += '#';
            }
            else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

pyramid(50);


//solution 2 (using recursion)

function pyramid(n, row = 0, level = '') {
    var colLength = n + (n - 1);
    if (n === row) {
        return;
    }

    if (level.length === colLength) {
        console.log(level);
        return pyramid(n, row + 1);
    }
    if (level.length >= Math.floor(colLength / 2) - row && level.length <= Math.floor(colLength / 2) + row) {
        level += '#';
    }
    else {
        level += ' ';
    }
    pyramid(n, row, level);
}

pyramid(10);

