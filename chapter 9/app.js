console.log(1);
console.log(2);

//simple representation of a callback function
setTimeout(() => {
    console.log('callbackfunction fired');
}, 2000)

console.log(3);
console.log(4);

const getTodos = (resource, callback) => {
    //making HTTP requests
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) { //different states of the xmlhttp request and make sure it is a okay response
            const data = JSON.parse(request.responseText); //converting JSON to objects in Javascript
            callback(undefined, data); 
        } else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    });

    request.open('GET', resource); //setting up the request
    request.send(); //sending the request
};

getTodos('./todos/hitu.json', (err, data) => {
    console.log(data);
    getTodos('./todos/todo.json', (err, data) => {
        console.log(data);
    })
});