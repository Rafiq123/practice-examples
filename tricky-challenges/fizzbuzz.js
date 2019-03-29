//fizz buzz problem print 0 to n numbers with fizzbuzz 
//print "fizz"  for multiple of 3
//pront "buzz" for multiple of 5
//print "fizzbuzz" for multiple of both 3 and 5

function fizzBuzz(n) {
    for (i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        }
        else if (i % 3 === 0) {
            console.log('fizz');
        }
        else if (i % 5 === 0) {
            console.log('buzz')
        }
        else
            console.log(i)
    }
}

fizzBuzz(5);