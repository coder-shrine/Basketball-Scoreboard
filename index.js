//DOM Elements
let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');
let timerElement = document.getElementById('timer');
let periodElement = document.getElementById('period');
let homeFoulsElement = document.getElementById('home-fouls');
let guestFoulsElement = document.getElementById('guest-fouls');
let pauseElement=document.getElementById('pauseResume');

//Event Listeners - All in one place
//Event Listeners for adding Points
document.getElementById('home-pts-1').addEventListener('click', (event) => addOne(event.target));
document.getElementById('home-pts-2').addEventListener('click', (event) => addTwo(event.target));
document.getElementById('home-pts-3').addEventListener('click', (event) => addThree(event.target));
document.getElementById('guest-pts-1').addEventListener('click', (event) => addOne(event.target));
document.getElementById('guest-pts-2').addEventListener('click', (event) => addTwo(event.target));
document.getElementById('guest-pts-3').addEventListener('click', (event) => addThree(event.target));
//Event Listeners for adding fouls
document.getElementById('home-fouls-btn').addEventListener('click', (event) =>teamFouls(event.target));
document.getElementById('guest-fouls-btn').addEventListener('click', (event) =>teamFouls(event.target));
//Event Listeners for Game menu buttons
document.getElementById('start-game').addEventListener('click', ()=>startGame());
document.getElementById('reset-game').addEventListener('click', ()=>gameReset());
document.getElementById('pauseResume').addEventListener('click', ()=>pauseUnpauseGame());

//Game state variables
const scores =[0,0];
let fouls=[0,0];
let homePts=scores[0];
let guestPts=scores[1];
let homeFouls=fouls[0];
let guestFouls=fouls[1];
let period=1;

//Time variables
//Game time is 48 mins in seconds
let fixedGameTime=2880;
let totalSeconds;
let minutes;
let seconds;
let startCountDown;

//State variables
let alreadyCounting=false;
let isPaused=false;
let gameOngoing=false;

function addOne(eventTarget){
    if(gameOngoing===true && isPaused===false){
        let id =eventTarget.id;
        if( id === 'home-pts-1'){
            homePts++;
            homeScore.textContent=homePts;
        }
        else{
            guestPts++;
            guestScore.textContent=guestPts;
        }
        isLeading();// checks for lead after every increment
    }
}



function addTwo(eventTarget){
    if(gameOngoing===true && isPaused===false){
        let id =eventTarget.id;
        if( id === 'home-pts-2'){
            homePts+=2;
            homeScore.textContent=homePts;
        }
        else{
            guestPts+=2;
            guestScore.textContent=guestPts;
        }
        isLeading();// checks for lead after every increment
    }
}



function addThree(eventTarget){
    if(gameOngoing===true && isPaused===false){
        let id =eventTarget.id;
        if(id==='home-pts-3'){
            homePts+=3;
            homeScore.textContent=homePts;
        }
        else{
            guestPts+=3;
            guestScore.textContent=guestPts;
        }
        isLeading();// checks for lead after every increment
    }
}

function teamFouls(eventTarget){
    if(gameOngoing===true && isPaused===false){
        let id =eventTarget.id;
        if(id==='home-fouls-btn'){
            homeFouls++;
            homeFoulsElement.textContent=homeFouls;
            
        }
        else if(id==='guest-fouls-btn'){
            guestFouls++;
            guestFoulsElement.textContent=guestFouls;
        }
    }
}

//Function to check which team is in lead and change the color of the score accordingly
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
    if(alreadyCounting) return;// checking if a count is already going on
    alreadyCounting=true; // sets alreadyCounting variable to true so clicking the button again wont triggetr mutiple countdown.
    startCountDown = setInterval(()=>{
    if(totalSeconds<=0){// Checking if countdown has reached zero
        clearInterval(startCountDown);// clears the startCountDown variable and stops the set interval function from running. 
        timerElement.textContent='00:00';//Resets the timer in DOM
        gameOngoing=false;// sets game to not ongoing.
    }else{//If not it will start countdown
        totalSeconds--; // starts counting down form the total seconds set.
        minutes=Math.floor(totalSeconds/60); // calculating minutes
        seconds=totalSeconds % 60; // calculating secs from total secs using % operator
        if(totalSeconds%720===0){//Basketball has 4 periods every 12 mins(720secs)
            pauseUnpauseGame(); //When the period changes pause the game for break automatically
            period++; //Increments the period variable 
            periodElement.textContent=period; // Displays the period variable in DOM
        }
        timerElement.textContent=`${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;// Displays mins and seconds in timer element of the DOM
    }
}, 1000);//setInterval runs this function every 1000ms which is 1 second

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
    if(gameOngoing){ // Checks if game is ongoing , wont work if start games has not been clicked.
        if(isPaused){ // If already paused
            startTimer(); //Resume
            isPaused=false;
            pauseElement.textContent='Pause Game';
        }else{ // Else Pause
        isPaused=true;
        clearInterval(startCountDown);
        alreadyCounting=false;
        pauseElement.textContent='Resume Game'; //Changes the text content of the Pause button to Resume button
        }
    }
}

