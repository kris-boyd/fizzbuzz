
document.querySelector('form').addEventListener('submit', fizzBuzz);

function fizzBuzz(e) {
    e.preventDefault();
const ul = document.querySelector('ul');
ul.innerHTML = "";
let result;
const userNumber = document.querySelector('#userNumber').value;
let resultNode;
let li;

for (let i = 1; i <= userNumber; i++) {
    if (i % 5 === 0 && i % 3 ===0) {
        result ='FizzBuzz'
    }else if (i % 5 === 0) {
        result = 'Buzz';
    }else if (i %3 === 0) {
        result = 'Fizz';
    } else {
        result = i
    }
    resultNode = document.createTextNode(result);
    li = document.createElement('li');
    li.appendChild(resultNode)
    ul.appendChild(li);

}

    // It shows "Fizz" instead if the number is divisible by 3.

    // It shows "Buzz" instead if the number is divisible by 5 and not by 3.

    //  It shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.





}
