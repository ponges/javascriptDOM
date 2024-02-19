// Variables for buttons 
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading 0
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for set interval & timer status
let timerInterval = null;
let timerStatus = "stopped"

// Stop Watch Function
function stopWatch(){
    // Add a second
    seconds++;
    // Every 60 seconds reset seconds add a minute
    // Every 60 minutes reset minutes add an hour
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
        if(minutes / 60 === 1){
            hours++;
        }    
    }
// if seconds is less than 10, seconds string value is 0+value else its just the value
if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
} else {
    leadingSeconds = seconds;
}
// if minutes is less than 10, minutes string value is 0+value else its just the value
if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
} else {
    leadingMinutes = minutes;
}
// if hours is less than 10, hours string value is 0+value else its just the value
if (hours < 10) {
    leadingHours = "0" + hours.toString();
} else {
    leadingHours = hours;
}

// in display show the stringvalues for seconds minutes and hours
let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes+":"+leadingSeconds;
}

//Click Start/Stop button
startStopBtn.addEventListener('click',function(){
// If timer is stopped make stopwatch run once every second, change button icon to pause set status to started    
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch,1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause">`;
        timerStatus = "started";
// else if timer is started stop timer, change button icon to play and set status to stopped        
    }else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play">`;
        timerStatus = "stopped";
    };

});

// Click reset button
// Stop timer and reset clock, set button icon to play and set status to stopped
resetBtn.addEventListener('click', function(){
    
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = "00:00:00"
    
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play">`;
    timerStatus = "stopped";

});