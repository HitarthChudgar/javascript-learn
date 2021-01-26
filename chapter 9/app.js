// console.log(1);
// console.log(2);

// //simple representation of a callback function
// setTimeout(() => {
//     console.log('callbackfunction fired');
// }, 2000)

// console.log(3);
// console.log(4);

//promises in use

const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        //making HTTP requests
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) { //different states of the xmlhttp request and make sure it is a okay response
                const data = JSON.parse(request.responseText); //converting JSON to objects in Javascript
                resolve(data);
            } else if (request.readyState === 4) {
                reject('error getting resource');
            }
        });

        request.open('GET', resource); //setting up the request
        request.send(); //sending the request
    });
};

getTodos('./todos/hitu.json').then(data => {
    console.log('promise resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
})



//promise example

// const getSomething = () =>{
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