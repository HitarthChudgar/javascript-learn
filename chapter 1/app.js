let age = 25;
let year = 2020;
let name = "Hitarth";
let total = age + year;
console.log(age, year, name);
console.log(total)

//over-riding javascript variables
age=30; 
console.log(age);

//can't override a const variable type (as name suggests they stay constant)
const points = 100;
console.log(points);

//strings (strings can also have both chars and numbers)
let string = "Hitarth 123 here";
console.log(string);

let email="hitarthchudgar@gmail.com"
console.log(email);

//string concatenation
let nameA = "Hitarth";
let nameB = "Chudgar";
let fullName = nameA + ' ' + nameB;
console.log(fullName);

//getting characters (index value stars at 0)
console.log("first character is", fullName[0]);

//length of string ('' is also counter as a character)
console.log("length of string is", fullName.length); //nice to note that length is a property of string rather than changing anything

//string methods
console.log("uppercase of string is", fullName.toUpperCase())
let lowerCase = fullName.toLowerCase();
console.log(lowerCase);

let index = email.indexOf('a');
console.log ("index of a is", index);

//more string methods

let testS = "uxdesignerdeveloper"

console.log(testS.lastIndexOf('r'));
console.log(testS.slice(1,5)); //(n-1)th index position is taken
console.log(testS.substr(2,8)); //takes 8 chars from 2
console.log(testS.replace('x','i')); //takes only first occurance of letter

//numbers

let radius = 10;
const pi = 3.14;
let area = pi * ((radius)**2);
console.log("the area is", area);

//remainder
let rem = 10 % 3;
console.log("remainder", rem);

//calculations follow pemdas

//increment/decrement shorthand notation stuff
let count = 1;
// count++;
// count--;
//count *= 2;
count /= 10;

console.log(count);

//NaN happens when we try operating with a number and a string

//template string
const title = "Best read of 2020";
const author = "JK Rowling"
const book = "Harry Potter"

let output = `The ${title} is ${book} by ${author}`; 
console.log(output);

//html template
html = `
    <h2>${title}</h2>
    <p>${book} by author ${author}</p>
`
console.log(html);

//arrays 

let arr = ['hitarth','scooby','impostor'];
console.log(arr[1]);
console.log(arr);

let numArr = ([1,2,3]);
console.log(numArr);
let lenNum = numArr.length;
console.log(lenNum);

//array methods 

//join (converts all list elements into a string)

let joinArr = arr.join(' and ',' are ');
console.log(joinArr);

//indexOf (returns the index of element)
let inArr = arr.indexOf('scooby');
console.log(inArr);

//push (pushes an element to end of array and returns length)
let pushArr = arr.push('red sus');
console.log(pushArr);

//pop(removes element from end of array)
let popArr = arr.pop();
let popArr2 = arr.pop();
console.log(arr);

//null (sample test case when user clears form we set it to null!)
let agetest = null;
console.log(agetest, agetest + 3, `the age is ${agetest}`);

//boolean 

let anArr = (['hi','hello','bye']);
let emailB = 'hitu@design.com'

//includes boolean test
let resBool = emailB.includes('@');
console.log(resBool);

//includes equality boolean tests

let boolAge = 20;
console.log(boolAge == 20); //checks if lhs and rhs are equal
console.log(boolAge != 20);
console.log(boolAge > 20);
console.log(boolAge < 20);
console.log(boolAge <= 20);
console.log(boolAge >= 20);

let boolStr = 'hitarth';
console.log(boolStr == 'hitarth');
console.log(boolStr != 'hitarth');
console.log(boolStr > 'Hitarth'); //first letter case compared lower case > higher case (otherwise checks the order in alphabet)
console.log(boolStr < 'Hitarth');
console.log(boolStr > 'siddharth');

//loose comparision (compares even if type is different and makes it equal due to type conversion)

console.log(boolAge == '20');

//strict comparision (different types cannot be equal)

console.log(boolAge !== '20');
console.log(boolAge === 20);

//type conversion

conTypeN = 25;
conTypeS = 'hello';
conTypeNS = '25';

conTypeBT = 200;
conTypeBF = 0;

console.log(Number(conTypeNS), typeof conTypeNS);
console.log(Boolean(conTypeBF), typeof conTypeBF);
console.log(Boolean(conTypeBT), typeof conTypeBF); //negative and positive is true but 0 is false in type conversion
