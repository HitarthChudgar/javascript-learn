console.log(1);
console.log(2);

//simple representation of a callback function
setTimeout(() => {
    console.log('callbackfunction fired');
}, 2000)

console.log(3);
console.log(4);

//making HTTP requests
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', ()=>{
    // console.log(request, request.readyState);
    if(request.readyState === 4){ //different states of the xmlhttp request
        console.log(request.responseText);
    }
})

request.open('GET','https://jsonplaceholder.typicode.com/todos/'); //setting up the request
request.send(); //sending the request