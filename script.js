let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let miliseconds = document.getElementById('miliseconds');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let mSecs = 0;
let secs = 0;
let mins = 0;
let hrs = 0;
let timer;

start.addEventListener('click', startClock);
stop.addEventListener('click', stopClock);
reset.addEventListener('click',resetClock);

function startClock() {
    start.disabled=true;
    start.classList.add("nonActive");
    stop.disabled=false;
    stop.classList.remove("nonActive");
    timer=setInterval(function () {
        console.log(mSecs);
        if (mSecs > 99) {
            mSecs = 0;
            miliseconds.innerText = "00";
            if (secs >= 59) {
                secs = 0;
                seconds.innerText = "00";
                if (mins > 59 && sec > 59) {
                    mins = 0;
                    minutes.innerText = `00`;
                    hrs++;
                    hours.innerText = `${parseInt(hours.innerText) + 1} ${+ ":"}`;
                }
                else {
                    mins += 1;
                    if (mins < 9) {
                        minutes.innerText = `0${parseInt(minutes.innerText) + 1}`;
                    }
                    else {

                    }
                }
            }
            else {
                secs += 1;
                if (secs > 9) {
                    seconds.innerText = `${parseInt(seconds.innerText) + 1}`;
                }
                else {
                    seconds.innerText = `0${parseInt(seconds.innerText) + 1}`;
                }
            }
        }
        else {
            mSecs += 1;
            miliseconds.innerText = parseInt(miliseconds.innerText) + 1;
        }
    }, 10)
}
function stopClock(){
    stop.disabled=true;
    start.disabled=false;
    stop.classList.add("nonActive");
    start.classList.remove("nonActive");
    clearInterval(timer);

}
function resetClock()
{
    clearInterval(timer);
    stop.disabled=false;
    start.disabled=false;
    stop.classList.remove("nonActive");
    start.classList.remove("nonActive");
    miliseconds.innerText = "00";
    seconds.innerText = "00";
    minutes.innerText = "00";
    hours.innerText = "00";


}