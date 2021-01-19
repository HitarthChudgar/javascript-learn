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