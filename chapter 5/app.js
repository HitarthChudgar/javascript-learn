// dom is essentialy produced by the browser and allows us to acccess the html of a page
// we can see html as a tree with a heirarchy with html being the root node and rest being element nodes and text having its own called the text nodes
// reaching an element is called querying the dom

// logging the first paragraph in the dom
const para = document.querySelector('p');
console.log(para);


// logging the first div in the dom
const div = document.querySelector('div');
console.log(div);

// logging in all the paragraphs 
const paras = document.querySelectorAll('p');
console.log(paras[1]); //acts as nodes in a list/array

// querying a class
const error = document.querySelector('.error');
console.log(error);

// get elements by their id
const head = document.getElementById('name');
console.log(head);

// get elements by their class name
const classes = document.getElementsByClassName('error') // no need to use selector bc it already specifies class name in the method
console.log(classes[1]); // cannot use forEach as it is a html collection and needs to be converted to an array

// get elements by their tag name
const tags = document.getElementsByTagName('p');
console.log(tags[2]);

// querySelector is preferred

// getting the innerText in a tag
const paraInner = document.querySelector('p');
paraInner.innerText += ' Designer';

// changing for all p tags
const paraAll = document.querySelectorAll('p');
paraAll.forEach(inc => {
    console.log(inc.innerText);
    inc.innerText += ' hello';
});

// printing stuff within a div
const content = document.querySelector('.content');
// console.log(content.innerHTML);
content.innerHTML += '<h2>changing it to a heading</h2>'

const people =['me', 'myself', 'i'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`; //appending
});

//getting and setting attributes

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://hitarthchudgar.design');
link.innerText = 'Hitarth Chudgar';

const heading = document.querySelector('h1');
console.log(heading.getAttribute('id'));

//adding an attribute that does not exist
heading.setAttribute('style', 'color: aqua;');

//changing and adding CSS styles

