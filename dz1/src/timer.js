//import { Howl, Howler } from './howler.js';

const timeEl = document.querySelector('#time');
let lastHours = 0;
let lastMinutes = 0;
/*const sound = new Howl({
    src: ['sound.webm', 'sound.mp3']
  });*/


export function buildTimer(timeString) {
    let hours = parseInt(timeString.slice(0,2));
    let minutes = parseInt(timeString.slice(3,5));
    let diff= Math.abs((hours*60+minutes)-((new Date).getHours()*60)-(new Date).getMinutes());
    lastHours = Math.trunc(diff/60);
    lastMinutes = diff-60*lastHours;

    startTimer()
}

export function startTimer( ){
    setInterval(decreaseTime, 60000);
    setTime(lastHours, lastMinutes);
}

function decreaseTime() {
    let currentHours=0;
    let currentMinutes=0;

    if (lastHours === 0 && lastMinutes === 0){
       stopTimer ()
    }else if (lastMinutes === 0) {
        currentHours = --lastHours;
    }else{
        currentHours = lastHours;
        currentMinutes = --lastMinutes;
        
    }
   
    
    setTime(currentHours, currentMinutes);
        
}

function setTime(value1, value2){
    if (value1<10){
        value1 = `0${value1}`;  
    } 
    if  (value2 < 10){
        value2 = `0${value2}`
    }

    timeEl.innerHTML=`${value1}:${value2}`
}


function stopTimer() {
    //sound.play();
    timeEl.parentNode.classList.add('hide')
}




