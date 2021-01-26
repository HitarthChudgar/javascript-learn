console.log(1);
console.log(2);

//simple representation of a callback function
setTimeout(() => {
    console.log('callbackfunction fired');
}, 2000)

console.log(3);
console.log(4);

const getTodos = (callback) => {
    //making HTTP requests
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) { //different states of the xmlhttp request and make sure it is a okay response
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); //setting up the request
    request.send(); //sending the request
};

getTodos((err, data) => {
    console.log('callback fired');
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});