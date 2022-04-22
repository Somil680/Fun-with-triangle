const base = document.querySelector('#base');
const hight = document.querySelector('#hight');
const btn = document.querySelector('#btn-box');
const output = document.querySelector('#outputBox');

btn.addEventListener('click', calculatearea);
function calculatearea() {
    var b = base.value;
    var h = hight.value;
    var result = 1/2*(b*h);
    output.innerHTML =  `The Area of triange is ${result}`;
}