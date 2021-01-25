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

//more about timestamps
const before = new Date('February 1 2019 7:30:59');
const now = new Date();

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 100 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(`the blog was written ${days} ago`);

//convverting time stamps into date objects
const timestamp = 1647897598;
console.log(new Date(timestamp));

//date-fns test
const date_fns = new Date();
console.log(dateFns.isToday(now));

//formatting options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd, Do, MM, YY'));