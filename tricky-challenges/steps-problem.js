// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//solution 1
function steps(n) {
    for (let row = 1; row <= n; row++) {
        var stair = '';
        for (let col = 1; col <= n; col++) {
            if (col <= row) {
                stair += '#';
            }
            else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}

steps(10);


//solution 2 (with recursion)
function steps(n, row = 1, stair = '') {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    if (stair.length <= row) {
        stair += '#';
    }
    else {
        stair += ' ';
    }
    steps(n, row, stair)
}

steps(10);