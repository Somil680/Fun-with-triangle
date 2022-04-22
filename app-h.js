const sidea = document.querySelector('#side-a');
const sideb = document.querySelector('#side-b');
const btncheck = document.querySelector('#btn');
const outputBox = document.querySelector('#outputBox');

btncheck.addEventListener('click' , calculate);
console.log("clicked");
function calculate(){
 var a = sidea.value;
 var b = sideb.value;
 var result = Math.sqrt((a*a) + (b*b));
 outputBox.innerHTML = `Hypotunes of a triangle is ${result}.`

}