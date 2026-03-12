let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');
let timerElement = document.getElementById('timer');
let periodElement = document.getElementById('period');
let homeFoulsElement = document.getElementById('home-fouls');
let guestFoulsElement = document.getElementById('guest-fouls');
let pauseElement=document.getElementById('pauseResume');

const scores =[0,0];
let fouls=[0,0];

let homePts=scores[0];
let guestPts=scores[1];
let homeFouls=fouls[0];
let guestFouls=fouls[1];
let period=1;


let fixedGameTime=2880; //seconds
let totalSeconds;
let minutes;
let seconds;
let startCountDown;
let alreadyCounting=false;
let isPaused=false;
let gameOngoing=false;

function addOne(clickedButton){
    let id =clickedButton.id;
    if( id === 'home-pts-1'){
        homePts++;
        homeScore.textContent=homePts;
    }
    else{
        guestPts++;
        guestScore.textContent=guestPts;
    }
    isLeading();
}



function addTwo(clickedButton){
    let id =clickedButton.id;
    if( id === 'home-pts-2'){
        homePts+=2;
        homeScore.textContent=homePts;
    }
    else{
        guestPts+=2;
        guestScore.textContent=guestPts;
    }
    isLeading();
}



function addThree(clickedButton){
    let id =clickedButton.id;
    if(id==='home-pts-3'){
        homePts+=3;
        homeScore.textContent=homePts;
    }
    else{
        guestPts+=3;
        guestScore.textContent=guestPts;
    }
    isLeading();
}

function teamFouls(clickedButton){
    let id =clickedButton.id;
    if(id==='home-fouls-btn'){
        homeFouls++;
        homeFoulsElement.textContent=homeFouls;
        
    }
    else if(id==='guest-fouls-btn'){
        guestFouls++;
        guestFoulsElement.textContent=guestFouls;
    }
}

//function to check Team in lead
function isLeading(){
    if(homePts>guestPts){
        homeScore.style.color='#4FF96D';
        guestScore.style.color='#F94F6D';
    }else if (guestPts>homePts){
        guestScore.style.color='#4FF96D';
        homeScore.style.color='#F94F6D';
    }
    else{
        homeScore.style.color='#F9F94F';
        guestScore.style.color='#F9F94F';
    }
}

//New Game Function, Reset everything
function gameReset(){
    totalSeconds = fixedGameTime;
    clearInterval(startCountDown);
    timerElement.textContent='00:00'
    homePts=0;
    homeFouls=0;
    homeFoulsElement.textContent=homeFouls;
    homeScore.textContent='0';
    homeScore.style.color='#F94F6D';
    guestPts=0;
    guestFouls=0;
    guestFoulsElement.textContent=guestFouls;
    guestScore.textContent='0';
    guestScore.style.color='#F94F6D';
    period=1;
    periodElement.textContent='0'
    alreadyCounting=false;
    isPaused=false;
    gameOngoing=false;
    pauseElement.textContent='Pause Game';

}


function startTimer(){
    if(alreadyCounting) return;
    alreadyCounting=true;
    startCountDown = setInterval(()=>{
    if(totalSeconds<=0){
        clearInterval(startCountDown);
        timerElement.textContent='00:00';
        gameOngoing=false;
    }else{
        totalSeconds--;
        minutes=Math.floor(totalSeconds/60);
        seconds=totalSeconds % 60;
        if(totalSeconds%720===0){
            pauseUnpauseGame();
            period++;
            periodElement.textContent=period;
        }
        timerElement.textContent=`${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
    }
}, 1000);
}


function startGame(){
    totalSeconds=fixedGameTime;
    //just to print the time once before the setInterval() starts running
    minutes = Math.floor(totalSeconds/60);
    seconds = totalSeconds % 60;
    timerElement.textContent=`${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
    
    startTimer();
    periodElement.textContent=period;
    gameOngoing=true;
}

function pauseUnpauseGame(){
    if(gameOngoing){
        if(isPaused){
            startTimer();
            isPaused=false;
            pauseElement.textContent='Pause Game';
        }else{
        isPaused=true;
        clearInterval(startCountDown);
        alreadyCounting=false;
        pauseElement.textContent='Resume Game';
        }
    }
}

