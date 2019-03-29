function getTodos(id) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://jsonplaceholder.typicode.com/todos/${id}`);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
}

getTodos(1).then((response) => {
    console.log('success')
    console.log(response)
}).catch((error) => {
    console.log('error')
    console.log(error)
})


//promise.all example
var promise = [];
promise.push(getTodos(1));
promise.push(getTodos(2));

Promise.all(promise).then((response) => {
    console.log('success')
    console.log(response)
}).catch((error) => {
    console.log('error')
    console.log(error)
});


//promise.race exmples
var promise = [];
promise.push(getTodos(1));
promise.push(getTodos(100000));

Promise.race(promise).then((response) => {
    console.log('success')
    console.log(response)
}).catch((error) => {
    console.log('error')
    console.log(error)
});
