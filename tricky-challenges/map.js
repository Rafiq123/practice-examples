
(function () {
    Array.prototype.myMap = function (fn) {
        var i = 0;
        var results = [];
        while (i < this.length) {
            results.push(fn(this[i], i))
            i++;
        }
        return results;
    }
    var a = [1, 2, 3];
    var b = a.myMap(function (obj, index) {
        return {
            id: obj
        }
    });
    console.log(b)
}())


