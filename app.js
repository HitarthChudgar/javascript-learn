//it is a javascript object
const time = new Date();

console.log(time);
console.log(typeof time);

//year, month, date and time
console.log('getFullYear:', time.getFullYear());
console.log('getTime:', time.getDate());
console.log('getDay:', time.getDay());

//timestamps
console.log('timestamp:', time.getTime());

//date strings
console.log(time.toDateString());
console.log(time.toTimeString());
console.log(time.toLocaleString());