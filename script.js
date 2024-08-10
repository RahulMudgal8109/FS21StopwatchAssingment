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
            miliseconds.textContent = "00";
            if (secs >= 59) {
                secs = 0;
                seconds.textContent = "00";
                if (mins > 59 && sec > 59) {
                    mins = 0;
                    minutes.textContent = `00`;
                    hrs++;
                    hours.textContent = `${parseInt(hours.textContent) + 1} ${+ ":"}`;
                }
                else {
                    mins += 1;
                    if (mins < 9) {
                        minutes.textContent = `0${parseInt(minutes.textContent) + 1}`;
                    }
                    else {

                    }
                }
            }
            else {
                secs += 1;
                if (secs > 9) {
                    seconds.textContent = `${parseInt(seconds.textContent) + 1}`;
                }
                else {
                    seconds.textContent = `0${parseInt(seconds.textContent) + 1}`;
                }
            }
        }
        else {
            mSecs += 1;
            miliseconds.textContent = parseInt(miliseconds.textContent) + 1;
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
    miliseconds.textContent = "00";
    seconds.textContent = "00";
    minutes.textContent = "00";
    hours.textContent = "00";


}