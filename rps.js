//use addEventListener instead of onclick//

let score =JSON.parse(localStorage.getItem('score'))||{
  wins: 0, losses:0, ties:0
} 
document.querySelector('.scoredisplayelem')
.innerHTML = `Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`;
let userchoice;
let computerchoice;
let result='';
function updatescore(){
  document.querySelector('.scoredisplayelem')
  .innerHTML = `Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`;  
}
function playgame(u){
  userchoice = u;
  const x = Math.random();
  if (x>=0 && x<1/3) {
    computerchoice= "Rock"
  }
  else if( x>=1/3 && x< 2/3){
    computerchoice="Paper"
  }
  else if(x>=2/3 && x<1)
    computerchoice= "Scissors"
  check();
}
function check(){
  if(userchoice == computerchoice){
    result='Tie';
    score.ties++;
  }      
  else if( (userchoice =='Rock' && computerchoice == 'Scissors')||(userchoice =='Paper' && computerchoice == 'Rock')||(userchoice =='Scissors' && computerchoice == 'Paper')){
    result= 'Win';
    score.wins++;
  }
  else{
  result='Loss';
  score.losses++;
  }
  localStorage.setItem('score', JSON.stringify(score));
  display();
}
function display(){
  document.querySelector('.tab')
  .innerHTML=`<span class="result">${result}</span>.<br>
  You Chose: <img class="picturechoice" src ="${userchoice}.png"><br>
  Computer Chose: <img class="picturechoice" src="${computerchoice}.png"><br>`
  updatescore();
}

function reset(){
score.losses = 0;
score.ties=0;
score.wins=0;
localStorage.setItem('score', JSON.stringify(score));
document.querySelector('.tab').innerHTML="Score Reset";
updatescore();
}

let x; 
function autoplay(){
  userchoice = Math.random();
  if (userchoice>=0 && userchoice<1/3) {
    userchoice= "Rock"
  }
  else if(userchoice>=1/3 && userchoice< 2/3){
    userchoice="Paper"
  }
  else if(userchoice>=2/3 && userchoice<1){
    userchoice= "Scissors"
  }

  playgame(userchoice);
}