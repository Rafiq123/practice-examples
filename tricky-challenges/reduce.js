
(function () {
    Array.prototype.myReduce = function (fn) {
        var i = 0;
        var result = 0;
        while (i < this.length) {
            result = fn(result, this[i], i, this)
            i++;
        }
        return result;
    }
    var a = [1, 2, 3, 5, 6];
    //     var a = [
    //         { id: 1 },
    //         { id: 2 },
    //         { id: 3 },
    //         { id: 4 }
    //     ]
    var b = a.myReduce(function (accumalator, currentValue, index, array) {
        return accumalator + currentValue;
    });
    console.log(b)
}())


