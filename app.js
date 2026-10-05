console.log('MIT Portal Loaded');
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM ready');
});

const college = "MIT";
let students = 120;
students++; //121

const msg =`MIT has ${students} students`;
console.log(msg);

//typeof quirks
typeof []  // 'object' not 'array' !
Array.isArray([]) //true\

const courses = ['BCA', 'CSIT', 'BIT'];
for (const course of courses) {
    console.log(course);
}
let score = 75
const status = score >= 60 ? 'pass' : 'fail';
console.log('status: ' + status)

let email = 'abc@xyz.com'
function showError(msg) {
    console.log(msg)
}
if ( email.includes(`@`) === false) {
    showError('Invalid email');
}