const player = document.getElementById('player');
const cactus = document.getElementById('cactus');
const background = document.getElementById('background');
const buttonPlayStop = document.getElementById('buttonPlayStop');

let scoreInterval;
let score = 0;

//Player Jump
document.addEventListener('click',function(){
    player.classList.add('playerJump');
} );
//Player remove Jump
player.addEventListener('animationend',() => {
    player.classList.remove('playerJump');
});

//Stop
function stopAnimation(){
    cactus.style.animationPlayState = 'paused';

    player.style.animationPlayState = 'paused';

    background.style.animationPlayState = 'paused';
}
//Stop Game
function pauseGame(){
   stopAnimation();
    stopScore();
}

function resumeScore(){
    scoreInterval = setInterval(() => {
        score++;
        document.getElementById('score').innerText = score;
    }, 1000)
}
//Para que el score se detenga cuando pausamos el juego.

function stopScore(){
    clearInterval(scoreInterval);
}
function resumeGame(){
    resumeAnimation();
    resumeScore();
}
function resumeAnimation(){
    cactus.style.animationPlayState = 'running';
    player.style.animationPlayState = 'running';
    background.style.animationPlayState = 'running';
}
//Evento "click" en el botòn de Play.
buttonPlayStop.addEventListener('click',()=>{
    if(buttonPlayStop.classList.contains('play')){
        resumeGame();
    }
    else{
        pauseGame();
    }
    buttonPlayStop.classList.toggle('play');
});
//Tiempo en el que va aumentando el score.
scoreInterval = setInterval(() => {
    score++;
    document.getElementById('score').innerText = score;
},2000);
