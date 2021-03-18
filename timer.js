// BUTTONS
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

//FOCUS TIMER
var fm = document.getElementById('focus_mins');
var fs = document.getElementById('focus_secs');

//BREAK TIMER
var bm = document.getElementById('break_mins');
var bs = document.getElementById('break_secs');

//REFERENCE TO A TIMER VARIABLE
var startTimer;

//START TIMER FUNCTION CALLER
start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running.");
    }
})

//RESET START TIMER FUNCTION CALLER
reset.addEventListener('click', function(){
    document.getElementById("body").style.backgroundColor = "#BEBBD4";
    fm.innerText = "25";
    fs.innerText = 0;

    bm.innerText = "5";
    bs.innerText = 0;

    document.getElementById('counter').innerText = ' ';
    stopInterval()
    startTimer = undefined;
})

//RESET STOP TIMER FUNCTION CALLER
stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


//START TIMER FUNCTION
function timer(){
    //Work Timer Countdown
    if(fs.innerText != 0){
        fs.innerText--;
    } else if(fm.innerText != 0 && fs.innerText == 0){
        fs.innerText = 59;
        fm.innerText--;
    }

    //Break Timer Countdown
    if(fm.innerText == 0 && fs.innerText == 0){
        document.getElementById("body").style.backgroundColor = "#DDD5C5";
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Increment Counter by one if one full cycle is completed
    if (fm.innerText == 0 && fs.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        //Change background color to violet
        document.getElementById("body").style.backgroundColor = "#BEBBD4";
        // Reset timer
        fm.innerText = "25";
        fs.innerText = 0;
        bm.innerText = "5";
        bs.innerText = 0;

        //document.getElementById('counter').innerHTML += '\uf0c8';
        var pomodoro = document.getElementById('counter');
        pomodoro.innerHTML += "<input type='checkbox'>";
    }
}

//STOP TIMER FUNCTION
function stopInterval(){
    clearInterval(startTimer);
}


