// console.log(1);
// console.log(2);

// //simple representation of a callback function
// setTimeout(() => {
//     console.log('callbackfunction fired');
// }, 2000)

// console.log(3);
// console.log(4);

//promises in use

// const getTodos = (resource) => {
//     return new Promise((resolve, reject) => {
//         //making HTTP requests
//         const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange', () => {
//             // console.log(request, request.readyState);
//             if (request.readyState === 4 && request.status === 200) { //different states of the xmlhttp request and make sure it is a okay response
//                 const data = JSON.parse(request.responseText); //converting JSON to objects in Javascript
//                 resolve(data);
//             } else if (request.readyState === 4) {
//                 reject('error getting resource');
//             }
//         });

//         request.open('GET', resource); //setting up the request
//         request.send(); //sending the request
//     });
// };

// getTodos('./todos/hitu.json').then(data => {
//     console.log('promise resolved:', data);
// }).catch(err => {
//     console.log('promise rejected:', err);
// })



// //promise example

// const getSomething = () => {
//     return new Promise((resolve, reject) => { //promise can be resolved or rejected
//         //fetch something
//         // resolve('get some data');
//         reject('some error')
//     });
// }

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

//fetch api
// fetch('./todos/todo.json').then((response) => { //promises are only rejected in fetch api during a network error
//     console.log('resolved', response);
//     return response.json();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log('reject', err);
// });

//async and await
const getTodosAsync = async () => { //declaring an async function
    const response = await fetch('./todos/hitus.json'); //promise and won't assign to response unless it fetches same for below
    
    if (response.status !== 200) {
        throw new Error('Cannot find the given end point');
    }

    const data = await response.json();
    return data;
};

//calling an async function
getTodosAsync() //non blocking but have to use then to return data otherwise returns a promise
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message)); //catch is called when a promise is rejected and async fails