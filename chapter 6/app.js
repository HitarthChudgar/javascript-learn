const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback')
const username = document.querySelector('#username')
form.addEventListener('submit', e => {
    e.preventDefault();

    //validation
    const usernamenew = form.username.value;
    const userPattern = /^[a-z]{6,12}/;
    let result = userPattern.test(usernamenew);
    if (result) {
        feedback.textContent = 'You are good to go!'
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Username should be between 6-12 characters long'
        feedback.style.color = 'red';
    }
})

//live feedback
form.username.addEventListener('keyup', e => {
    const userPattern = /^[a-z]{6,12}/;
    if (userPattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
})

// //testing regEx
// const username = 'hitarth';
// const pattern = /^[a-z]{6,}$/

// let result = pattern.test(username); //returns boolean
// console.log(result);

// if (result) {
//     console.log('regEx passed');
// } else {
//     console.log('regEx failed');
// }

// let reslocation = username.search(pattern);
// console.log(reslocation);