
// CLOCK

let h = document.getElementById("h");
let m = document.getElementById("m");
let s = document.getElementById("s");

setInterval(() => {
    
    let Time = new Date();
    
    h.innerHTML = Time.getHours();
    m.innerHTML = Time.getMinutes();
    s.innerHTML = Time.getSeconds();

        if (h.innerHTML < 10) {
            h.innerHTML = "0" + h.innerHTML;
        }
        if (m.innerHTML < 10) {
            m.innerHTML = "0" + m.innerHTML;
        }m
        
        if (s.innerHTML < 10) {
            s.innerHTML = "0" + s.innerHTML;
        }
    }, 1000 
)

let weekdayEle = document.getElementById("weekday");
let dateEle = document.getElementById("date");
let monthEle = document.getElementById("month");

setInterval(() => {

let currentDate = new Date();

    monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ]
    weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    let weekday = weekdayNames[currentDate.getDay()];
    let dateNr = currentDate.getDate();
    let month = monthNames[currentDate.getMonth()];
    
    weekdayEle.innerHTML = weekday;
    monthEle.innerHTML = month;
    
    if (dateNr === 1 || dateNr === 21 || dateNr === 31) {                                                              //how to make superscripted?
        date.innerHTML = dateNr + "st";
    } else if (dateNr === 2 || dateNr === 22) {
        date.innerHTML = dateNr + "nd";
    } else if (dateNr === 3) {
        date.innerHTML = dateNr + "rd";
    } else {
        date.innerHTML = dateNr + "th";
    }

}
)

// TIMER

let hTmr = document.getElementById("hTmr");
let mTmr = document.getElementById("mTmr");
let sTmr = document.getElementById("sTmr");

function timer () {

    let timerDate = new Date();

    hTmr.innerHTML = timerDate.getHours();
    mTmr.innerHTML = timerDate.getMinutes();
    sTmr.innerHTML = timerDate.getSeconds();

    if (hTmr.innerHTML < 10) {
        hTmr.innerHTML = "0" + hTmr.innerHTML;
    }
    if (mTmr.innerHTML < 10) {
        mTmr.innerHTML = "0" + mTmr.innerHTML;
    }
    
    if (sTmr.innerHTML < 10) {
        sTmr.innerHTML = "0" + sTmr.innerHTML;
    }
}

