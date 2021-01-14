// for loops

for(let i=0; i<=6; i+=2){ //checks condition in the bracket
    console.log(i);
}
console.log('loop finished')

// for loop in an array

const names = ['hitu', 'adhoxaja', 'friends'];
for(let i=0; i < names.length; i+=1){
    //console.log(names[i]);
    let html = `<div>${names[i]}</div>`
    console.log(html);
}

// while loops

let i = 0;
while(i < 8){
    console.log(i);
    i+=2.5;
}

// while loops in array

let j = 0;
const nameW = ['hitu', 'adhoxaja', 'friends'];
while(j < nameW.length){
    console.log(nameW[j]);
    j++;
}

// do while loops (used to run the code even if the condition doesn't get satisfied)

let k=5;

do{
    console.log(k); //executes first
    k++;
}while(k<5);

// if statements

const age = 20;
if(age <= 20){
    console.log('you are less than or equal to 20 years old in age');
}

const arrs = ['hi', 'bye', 'bruh'];
if(arrs.length > 2){
    console.log("that's a lot of memebers"); // using "" because apostrophe is taken as ending a string
}

const bfA = 'bestfriend one pretty';
const bfB = 'bestfriend two ugly'
if(bfA == bfB){
    console.log('there are two pretty best friends we have done it finally');
}
else if (bfA.length > bfB.length){
    console.log("first bestfriend is prettier");
}
else{
    console.log('i aint never seen two pretty best friends its always one of them gotta be ugly');
}

// logical operators (&& / ||)

passwordTest = 'hitu@1234'
if(passwordTest.length >= 12 && passwordTest.includes('@')){
    console.log('that is a strong long password');

}
else if(passwordTest.length >= 10 || passwordTest.includes('@')){
    console.log('that is a okay password');
}
else{
    console.log('try for a better password');
}

// not operator

let user = true;
if (user){
    console.log("enter")
}else if (!user){
    console.log('dont enter');
}

// break and continue

let scores = [55,45,0,100,35,10];
for(let i = 0; i < scores.length; i++){
    if(scores[i]==0){
        continue; //break out of current loop and go to top and continue wth next iteration
    }
    console.log('your score is', scores[i]);
    if (scores[i] == 100){
        console.log('you have the highest score');
        break; //break out out from loop and no more iterations
    }

}

// switch statements

const grade = 'B';
switch(grade){
    case 'A': //use hard equality so we cannot compare different types
        console.log('you got A');
        break;
    case 'B':
        console.log('you got B');
        break;        
    case 'C':
        console.log('you got C');
        break;
    default:
        console.log('invalid grade');
}

// variables and block scope

ageTest = 25;

if(true){
    let ageTest = 30;
    console.log('the age in code block one is ', ageTest);

    if(true){
        // in this case ageTest takes the value of the closes variable in its scope if not this then the previous one
        let ageTest = 45;
        console.log('the age in code block two is ', ageTest);
    }

}
console.log('the age in code block outside is ', ageTest);

// var is not used anymore as it ignore block scope
