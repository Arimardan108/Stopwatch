
/* 
    getting all four divs (hours, minutes, seconds and milliseconds divs), 
    so that we can updata the numeric data of these using javascript
*/

// getting the hours div using its id in html
let hours__div = document.getElementById("no__of__hours");
// getting the minutes div using its id in html
let minutes__div = document.getElementById("no__of__minutes");
// getting the seconds div using its id in html
let seconds__div = document.getElementById("no__of__seconds");
// getting the milliseconds div using its id in html
let milliseconds__div = document.getElementById("no__of__milliseconds");


/* 
    getting all the buttons(Start, Pause and Reset),
    so that we can apply event listners to them
*/

// getting the start button using its id in html
let start__btn = document.getElementById("start__button");
// getting the pause button using its id in html
let pause__btn = document.getElementById("pause__button");
// getting the reset button using its id in html
let reset__btn = document.getElementById("reset__button");


// declaring four variables(hrs, mins, secs, millisecs), and initiallizing all fours value to zero 
let [hrs, mins, secs, millisecs] = [0, 0, 0, 0];


// declaring a variable, which gets initialized to our setInterval
let setInterval___id;
// declaring and initialized a variable, which bascially tells whether the timer is currently paused or not
let isPaused = true;

// listening click event listener on the start button
start__btn.addEventListener("click", () => {
    // if the timer is running then do nothing, just return from the function 
    if (isPaused === false) {
        return;
    }

    // otherwise mark isPaused variable to false, and call interval
    isPaused = false;
    setInterval___id = setInterval(timer, 10);
})


// listening click event listener on the pause button
pause__btn.addEventListener("click", () => {
    // if the timer is currently paused then do nothing, just return from the function 
    if (isPaused) {
        return;
    }

    // otherwise mark isPaused variable to true, and clear the interval
    isPaused = true;
    clearInterval(setInterval___id);
})

// listening click event listener on the reset button
reset__btn.addEventListener("click", () => {

    // reinitializing the variables(hrs, mins, secs and millisecs) to zero
    [hrs, mins, secs, millisecs] = [0, 0, 0, 0];

    // clearing interval
    clearInterval(setInterval___id);

    // marking isPaused to true
    isPaused = true;

    // calling the updateScreen function which will update the screen with all set to zero
    updateScreen();
})

// timer function, responsible for updating the data of the variables(hrs, mins, secs and millisecs)
function timer() {

    // at every interval of 10 milliseconds add 10 to millisecs
    millisecs += 10;

    // if at any point millisecs becomes equal to 1000, reinitialize it to zero and increament secs by one.
    if (millisecs === 1000) {
        millisecs = 0;
        secs++;
    }

    // if at any point secs becomes equal to 60, reinitialize it to zero and increament mins by one.
    if (secs === 60) {
        secs = 0;
        mins++;
    }

    // if at any point mins becomes equal to 60, reinitialize it to zero and increament hrs by one.
    if (mins === 60) {
        mins = 0;
        hrs++;
    }

    // at the end call the updateScreen function, this function updates the screen with new data
    updateScreen();
}

// updateScreen function, responsible for updating the screen with new data
function updateScreen() {

    /*
        I created four variables(modified__hrs, modified__mins, modified__secs and modified__millisecs), 
        bascially they get the data from millisecs, secs, mins and hrs and represent them in much better way
        with some leading zeroes if required
    */
    let modified__hrs = (hrs < 10) ? ("0" + hrs) : hrs;
    let modified__mins = (mins < 10) ? ("0" + mins) : mins;
    let modified__secs = (secs < 10) ? ("0" + secs) : secs;
    let modified__millisecs = (millisecs < 10) ? ("00" + millisecs) : 
                            ((millisecs < 100) ? ("0" + millisecs) : millisecs);

    /*
        update the screen with using .innerHTML
        get the all four divs and then update its text. 
    */
    milliseconds__div.innerHTML = modified__millisecs;
    seconds__div.innerHTML = modified__secs;
    minutes__div.innerHTML = modified__mins;
    hours__div.innerHTML = modified__hrs;
}

// done



