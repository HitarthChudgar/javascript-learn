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