window.addEventListener('load',init)


const levels={
  easy:5,
  medium:3,
  hard:2
}
const currentLevel = levels.easy;

let time= currentLevel;
let score= 0;
let isPlaying;

const wordInput = document.querySelector('#wordinput');
const Currenttext = document.querySelector('#current-text');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const scoreDisplay = document.querySelector("#score");
const sentences =['woman', 'possible', 'pipe', 'makeshift', 'children', 'eminent', 'reminiscent', 'acid', 'sticks', 'unadvised', 'unable', 'church', 'cute', 'learn', 'addition', 'greedy', 'tacky', 'zoom', 'blade', 'childlike', 'feeble', 'railway', 'doubtful', 'hideous', 'possessive', 'incompetent', 'actually', 'road', 'ignore', 'knife', 'heavy', 'greasy', 'legs', 'macho', 'connect', 'great', 'hesitant', 'tasty', 'phone', 'thundering', 'pencil', 'soothe', 'potato', 'one', 'grouchy', 'underwear', 'female', 'wide-eyed', 'strange', 'vacation' , 'hat',
'river',
'lucky',
'statue',
'generate',
'stubborn',
'cocktail',
'runaway',
'joke',
'developer',
'establishment',
'hero',
'javascript',
'nutrition',
'revolver',
'echo',
'siblings',
'investigate',
'horrendous',
'symptom',
'laughter',
'magic',
'master',
'space',
'definition'] ;

function init(){
  showWord(sentences);

  wordInput.addEventListener('input', startMatch);

  setInterval(countdown,1000);

  setInterval(checkStatus,50)
}
function showWord(sentences){
  const randIndex = Math.floor(Math.random()*sentences.length)
  Currenttext.innerHTML= sentences[randIndex];
}

function startMatch(){
  if(matchsentences()){
    isPlaying = true;
    time = currentLevel;
    showWord(sentences);
    wordInput.value = '';
    score++;
  }

  if(score === -1){
    scoreDisplay.innerHTML = 0;
  }else{
    scoreDisplay.innerHTML = score ;
  }
  
}

function matchsentences(){
  if(wordInput.value === Currenttext.innerHTML){
    message.innerHTML ='correct'
    return true;
  }else {
    message.innerHTML = ''
    return false;
  }
}

function countdown(){
  if(time>0){
    time--;

  }else if (time===0){
    isPlaying=false;
  }
  timeDisplay.innerHTML = time;
}
function checkStatus(){
  if(!isPlaying && time === 0){
    message.innerHTML = 'Game over!';
    score=-1;
  }
}