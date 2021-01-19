//filter method
const numbers = [1,2,3,4,5];

//is indestructive method as it won't modify the exisitng array
const filterNum = numbers.filter(number => {
    return number > 2;
    //checks only for true conditions and filters out wrong ones
});

console.log(filterNum);

const users = [
    {name: 'hitarth', premium: true},
    {name:'eric', premium: true},
    {name: 'adhoxaja', premium: true},
    {name: 'rdj', premium: false}
];

const filterUsers = users.filter(user => user.premium);

console.log(filterUsers);

//map method
const products = [
    {name: 'reebok', price: 30},
    {name: 'adidas', price: 40},
    {name: 'nike', price: 50},
    {name: 'puma', price: 45}
];

const mapProduct = products.map(product => {
    if(product.price > 40){
        return {name: product.name, price: product.price / 2}; //creating a new object rather than modifying oiginal object
    }else{
        return product; //return normally
    }
})

console.log(mapProduct);

//reduce method
const productsTest = [
    {name: 'reebok', price: 30},
    {name: 'reebok', price: 50},
    {name: 'adidas', price: 40},
    {name: 'nike', price: 50},
    {name: 'puma', price: 45}
];

const reduceProducts = productsTest.reduce((acc,prodred) => {
    if(prodred.name === 'reebok'){
        acc += prodred.price;
    }
    return acc
}, 0);

console.log(reduceProducts);

//find method
const numberFind = [10,25,40,60,65,30,90];

//finds the first that satisifies condition
const findNum = numberFind.find(numbers => {
    return numbers > 25;
});

console.log(findNum);

//sort method

//sorting strings
const names = ['hitu','there','awesome'];
names.sort(); //alters the original array (destructive)
console.log(names);

//sorting objects
const players = [
    {name: 'hitarth', score: 25},
    {name:'eric', score: 15},
    {name: 'adhoxaja', score: 20},
    {name: 'rdj', score: 10}
];

// players.sort((a,b) => {
//     if(a.score > b.score){
//         return -1;
//     }else if(b.score > a.score){
//         return 1
//     }else{
//         return 0;
//     }
// })

//efficient method using same concept of positive, negative or equal
players.sort((a,b) => b.score - a.score);

console.log(players);