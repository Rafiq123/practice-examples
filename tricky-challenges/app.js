(function () {

    //1 : scope related exmple  ------------------------------------------------------------------------------------------------
    var obj = {
        x: 1,
        y: 2,
        sum: function () {
            console.log(this)
            return this.x + this.y
        }
    }

    // console.log(obj.sum()) // this points to obj since sum is invoked from the object directly

    // var refSum = obj.sum;
    // console.log(refSum()) // this points to outer environment
    // ------------------------------------------------------------------------------------------------

    //2  closure example -------------------------------------------------------------------------------------------------------------------

    var arr = [];
    for (i = 0; i < 3; i++) {
        arr.push(
            function () {
                console.log(i)
            }
        )
    }

    arr[0]();  // prints 3
    arr[1]();  // prints 3
    arr[2]();  // prints 3

    //solution with closure
    var arr2 = [];
    for (i = 0; i < 3; i++) {
        arr2.push(
            (function (i) {
                return function () {
                    console.log(i)
                }
            }(i))
        )
    }

    arr2[0]();  // prints 3
    arr2[1]();  // prints 3
    arr2[2]();  // prints 3

    // ------------------------------------------------------------------------------------------------

    //3  scopes example -------------------------------------------------------------------------------------------------------------------

    (function () {
        var a = b = 9;
        console.log(b)
    }());
    console.log(b)

    // ------------------------------------------------------------------------------------------------


    //4  Check if number is integer -------------------------------------------------------------------------------------------------------------------

    function isInt(i) {
        return i % 1 === 0;
    }

    console.log(isInt(5));
    console.log(isInt('1'));
    console.log(isInt('a'));
    // ------------------------------------------------------------------------------------------------


    //5  Write a function that would allow you to do this. multiply(5)(6);  -------------------------------------------------------------------------------------------------------------------

    function multiply(a) {
        return function (b) {
            return a * b;
        }
    }
    console.log(multiply(5)(6));
    // ------------------------------------------------------------------------------------------------

    //6 How would you add your own method to the Array object so the following code would work?  -------------------------------------------------------------------------------------------------------------------

    // var arr = [1, 2, 3, 4, 5];
    // var avg = arr.average();
    // console.log(avg);


    // solution
    Array.prototype.average = function () {
        var sum = this.reduce(function (total, value) {
            return total + value;
        });
        return sum / this.length;
    }

    var arr = [1, 2, 3, 4, 5];
    var avg = arr.average();
    console.log(avg);
    // ------------------------------------------------------------------------------------------------


    //6 string reversal?  -------------------------------------------------------------------------------------------------------------------
    // solution1 
    function reverse(str) {
        return str.split('').reverse().join('');
    }

    // solution 2
    function reverse(str) {
        var reversed = '';
        for (let character of str) {
            reversed = character + reversed;
        }
        return reversed;
    }

    //solution 3
    function reverse(str) {
        return str.split('').reduce(function (accumulator, currentValue, currentIndex, array) {
            return currentValue + accumulator;
        });
    }
    // ------------------------------------------------------------------------------------------------

}());

//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
//For example, arr = [1,3,5,7,9] . Our minimum sum is 1+3+5+7 = 16 and our maximum sum is 3+5+7+9=24 . We would print
function miniMaxSum(arr) {
    let sum = 0;
    let min = arr[0];
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        sum += arr[i]; 
        if(arr[i] < min){
            min = arr[i]
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }

    console.log(sum-max, sum - min)
}






