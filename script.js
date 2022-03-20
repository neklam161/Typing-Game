window.addEventListener('load',init)
var min = 0;
var sec = 0;
let time;
let score= 0;
let ingame=true;
let characters = document.querySelector(".text")
const wordInput = document.querySelector('#wordinput');
const Currenttext = document.querySelector('#current-text');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const scoreDisplay = document.querySelector("#score");
const sentences =["I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.","I wanna hang a map of the world in my house. Then I'm gonna put pins into all the locations that I've traveled to. But first, I'm gonna have to travel to the top two corners of the map so it won't fall down.","Never continue in a job you don't enjoy. If you're happy in what you're doing, you'll like yourself, you'll have inner peace. And if you have that, along with physical health, you will have had more success than you could possibly have imagined.","Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.","No one would have crossed the ocean if he could have gotten off the ship in the storm.","Appreciate those early influences and what they've done for you.","Be honest in your feelings, for they are the surest conduit to knowledge... ","The purpose of life is the investigation of the Sun, the Moon, and the heavens."];
function button(){
  wordInput.value ='';
  scoreDisplay.innerText='00:00';
  resetTimer()
  clearTimeout(time)
  showWord(sentences)
}
function init(){
  Currenttext.innerHTML=""
   showWord(sentences).split('').forEach(char => {
    const charSpan= document.createElement('span');
    charSpan.innerText = char;
    Currenttext.appendChild(charSpan);
  })
  button()
  wordInput.addEventListener('input', startMatch,startTimer);
}
function showWord(sentences){
  const randIndex = Math.floor(Math.random()*sentences.length)
  return sentences[randIndex]
}
function textInput() {
  const arraytext=Currenttext.querySelectorAll('span')
  const arrayvalue=wordInput.value.split('')
  let correct =true
  arraytext.forEach((charSpan,index)=>{
    const character = arrayvalue[index]
    if (character == null) {
      charSpan.classList.remove('correct')
      charSpan.classList.remove('incorrect')
      correct = false
    } else if (character === charSpan.innerText) {
      charSpan.classList.add('correct')
      charSpan.classList.remove('incorrect')

    } else {
      charSpan.classList.remove('correct')
      charSpan.classList.add('incorrect')
      correct = false
    }
  })
  if (correct){
    wordInput.value ='';  
    clearTimeout(time)
    scoreDisplay.innerHTML=timeDisplay.innerHTML;
  }
}
function startMatch(){
  if (ingame === true){
    startTimer()
    wordInput.removeEventListener('input',startTimer);
    ingame=false;
  }
  textInput()
}
function startTimer() {
  sec = parseInt(sec);
  min = parseInt(min);
  sec = sec + 1;
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      min = 0;
      sec = 0;
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    timeDisplay.innerHTML =  min + ':' + sec;
      time=setTimeout("startTimer()", 1000);
}

function resetTimer() {
  timeDisplay.innerHTML = '00:00';
  min="0"
  sec="0"
  ingame=true; 
}