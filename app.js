const quizform  = document.querySelector('.quiz-container');
const button  = document.querySelector('#btn');
const output  = document.querySelector('#outputBox');

const correctanswer = ['90°' , 'Right angle']

button.addEventListener('click' , calculateScore);
console.log("clicked");

function calculateScore(){

  
    const myFormData = new FormData(quizform);
    let score = 0;
        index = 0;

    for (let entry of myFormData.values()){
     
   if (entry === correctanswer[index]){
      score = score + 1;
       console.log("right");
       output.innerHTML = `Your Score is ${score}`;
       }else{
          output.innerHTML =  `Your Score is ${score}`;

       }
   index++
   };
   };






