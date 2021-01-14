// declaring the function (supports hoisting i.e. can call the function before it is defined in logical order)

function printing(){
    console.log('hello world');
}

// function expression (does not support hoisting) & ends with ; bc its an expression

const expr = function(){
    console.log('hello world');    
};

printing();
expr();

// passing arguments

function passArg(name = 'johnny', surname='ive'){
    console.log(`good day ${name} ${surname}`);
}

passArg();
passArg('hitarth', 'chudgar');

// returning values

const calcArea = function(radius){
    return 3.14 * (radius)**2; 
};

const area = calcArea(5);
console.log(area);

// arrow functions

const calcAreaArr = rad => 3.14 * (rad)**2;

const areaArr = calcAreaArr(4);
console.log(areaArr);

// more practice with arrow functions

const greet = () => 'hello world';
let greetingBe = greet();
console.log(greetingBe);

const bill = (products, tax) => {
    let total = 0;
    for(let i=0; i < products.length; i++){
        total += products[i] + products [i] * tax;
    }
    return total;
};

let cost = bill([10,20,30], 0.15);
console.log(cost);

// functions and methods are invoked differently thats the main difference name.toUpperCase() compared to just greet()

// callbacks and forreach (calling a function within a function)

const logPerson = (person, index) =>{
    console.log(`this is ${person} with index of ${index}`);
}

let people = ['h','i','t','a','r'];
people.forEach(logPerson);

// callbacks in action left


