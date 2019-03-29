//chunk problem
//giver input array ans size it should chunk array into sub array based on the size give as parameter
//Eg : ([1,2,3,4,6],2) => [[1,2],[3,4],[6]]

//solution 1
function chunckArray(arr, size) {
    var chunked = [];
    var chunk = [];
    for (i = 0; i < arr.length; i++) {
        chunk.push(arr[i]);
        if (chunk.length === size || i === arr.length - 1) {
            chunked.push(chunk);
            chunk = [];
        }

    }
    return chunked;
}

console.log(chunckArray([1, 2, 3, 4, 5, 5], 2));


//solution 2
function chunckArray(arr, size) {
    var index = 0;
    var chunked = [];
    while (index < arr.length) {
        chunked.push(arr.slice(index, index + size));
        index += size;
    }
    return chunked;
}


console.log(chunckArray([1, 2, 3, 4, 5, 5], 5));