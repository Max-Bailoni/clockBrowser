
// CLOCK

let hours = document.getElementById("h");
let minutes = document.getElementById("m");
let seconds = document.getElementById("s");

setInterval(() => {
    
    let Time = new Date();
    
    hours.innerHTML = Time.getHours();
    minutes.innerHTML = Time.getMinutes();
    seconds.innerHTML = Time.getSeconds();

        if (hours.innerHTML < 10) {
            hours.innerHTML = "0" + hours.innerHTML;
        }
        if (minutes.innerHTML < 10) {
            minutes.innerHTML = "0" + minutes.innerHTML;
        }
        if (seconds.innerHTML < 10) {
            seconds.innerHTML = "0" + seconds.innerHTML;
        }
    }, 1000 
)

// DATE

let weekdayElement = document.getElementById("weekday");
let dateElement = document.getElementById("date");
let monthElement = document.getElementById("month");

setInterval(() => {

let currentDate = new Date();

    monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    weekdayNames = ["Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,"]
    
    let weekday = weekdayNames[currentDate.getDay()];
    let dateNumber = currentDate.getDate();
    let month = monthNames[currentDate.getMonth()];
    
    weekdayElement.innerHTML = weekday;
    monthElement.innerHTML = month;
    
    if (dateNumber === 1 || dateNumber === 21 || dateNumber === 31) {                                                              
        date.innerHTML = dateNumber + "<span><sup>st</sup></span>";
    } else if (dateNumber === 2 || dateNumber === 22) {
        date.innerHTML = dateNumber + "<span><sup>nd</sup></span>";
    } else if (dateNumber === 3) {
        date.innerHTML = dateNumber + "<span><sup>rd</sup></span>";
    } else {
        date.innerHTML = dateNumber + "<span><sup>th</sup></span>";
    }

}
)

// TIMER

let hoursTimer = document.getElementById("hTmr");
let minutesTimer = document.getElementById("mTmr");
let secondsTimer = document.getElementById("sTmr");

function timer () {

    let timerDate = new Date();

    hoursTimer.innerHTML = timerDate.getHours();
    minutesTimer.innerHTML = timerDate.getMinutes();
    secondsTimer.innerHTML = timerDate.getSeconds();

    if (hoursTimer) {
        hoursTimer.innerHTML = hoursTimer.innerHTML + "<span>:</span>";
    }
    if (minutesTimer) {
        minutesTimer.innerHTML = minutesTimer.innerHTML + "<span>:</span>";
    }
    if (secondsTimer) {
        secondsTimer.innerHTML = secondsTimer.innerHTML;
    }

    if (hoursTimer.innerHTML < 10) {
        hoursTimer.innerHTML = "0" + hoursTimer.innerHTML + "<span>:</span>";
    }
    if (minutesTimer.innerHTML < 10) {
        minutesTimer.innerHTML = "0" + minutesTimer.innerHTML + "<span>:</span>";
    }
    
    if (secondsTimer.innerHTML < 10) {
        secondsTimer.innerHTML = "0" + secondsTimer.innerHTML;
    }
}