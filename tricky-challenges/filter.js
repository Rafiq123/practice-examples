
(function () {
    Array.prototype.myFilter = function (fn) {
        var i = 0;
        var results = [];
        while (i < this.length) {
            fn(this[i], i) && results.push(this[i]);
            i++;
        }
        return results;
    }
    // var a = [1, 2, 3, 5, 6];
    var a = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 }
    ]
    var b = a.myFilter(function (obj, index) {
        return obj.id < 3
    });
    console.log(b)
}())


