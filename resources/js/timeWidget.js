function timeUntil(endOfSem) {
    var endOfSem = endOfSem.getTime(); 
    var now = new Date().getTime();
    var timeUntilEnd = endOfSem - now;

    var days = Math.floor(timeUntilEnd / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeUntilEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeUntilEnd % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeUntilEnd % (1000 * 60)) / 1000);

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }
}

 
function setTime() {
    var endOfSem = new Date(2022, 11, 22);
    var message = timeUntil(endOfSem);

    const daysSpan = document.getElementById("days");
    daysSpan.innerText = message.days;
    
    const hoursSpan = document.getElementById("hours");
    hoursSpan.innerText = message.hours;

    const minutesSpan = document.getElementById("minutes");
    minutesSpan.innerText = message.minutes;
    
    const secondsSpan = document.getElementById("seconds");
    secondsSpan.innerText = message.seconds;
}

setInterval(setTime, 1000);