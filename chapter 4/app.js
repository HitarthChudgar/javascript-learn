// objects (always in key value pairs)

let user = {
    name : 'hitarth',
    age: '20',
    email : 'hitarthchudgar@gmail.com',
    blogs : ['hi there', 'how are you'],
    logIn(){
        console.log('user logged in');
    },
    logOut(){
        console.log('user logged out');
    },
    logBlogs(){
        console.log('the user has these blogs published');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

console.log(user.age);
console.log(user['age']);
user.age = 21;
console.log(user.age);
let key = 'name';
console.log(user[key]); //not used often only sometimes bc if we say user.key it searches for key in user object

console.log(typeof user); //get type of literal

//adding methods

user.logIn();
user.logOut();
user.logBlogs();

// objects in arrays

let admin = {
    name : 'hitarthhere',
    role : 'admin',
    age : '25',
    articles : [
        {title : 'how to code', likes: 30},
        {title : 'how to code two', likes: 35}
    ],
    logArticles(){
        console.log('following articles are there');
        this.articles.forEach(article => {
            console.log(article.title, article.likes);
        })
    }
}

admin.logArticles();

// math objects

const area = 5.5;

console.log(Math.round(area)); // always object.method(varibale)

// function to get random integers in a given range (random produces between 0 inclusive and 1 excluded)

let maxRandom = max => {
    return Math.floor(Math.random() * Math.floor(max));
}

console.log('in the given limit it is', maxRandom(3));

// primitive value

let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(scoreOne, scoreTwo);
scoreTwo = 100;
console.log(scoreOne, scoreTwo);

// if we change a primitive type it does not affect the other one

// reference type

let typeOne = {
    name: 'hitu',
    age: '35'
}

let typeTwo = typeOne; // copies the pointer on stack
console.log(typeOne,typeTwo);

typeOne.name='hitarth';
console.log(typeOne,typeTwo);

// if we change a primitive type it does affect the other one