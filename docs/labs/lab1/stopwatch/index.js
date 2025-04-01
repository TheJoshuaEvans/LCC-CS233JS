/*  Overview
  This application simulates a simple stop watch on the page.  The user
  can start, stop or reset the clock using the buttons and link on the page.

  There are 3 global variables that are used to keep track of the "state"
  of the application.
  -  isRunning - is a boolean that keeps track of whether the stopwatch is running or paused
  -  elapsedTime - is an integer that represents number of seconds that the stopwatch has been running
  -  timer - a reference to the code that fires at 1 second intervals that updates the clock

  There are 3 functions that are associated with the click event handler for the buttons
  and link on the page.  stopTimer, startTimer and resetTimer.

  There are 3 "helper" functions
  -   init is called when the page loads to set up the page
  -   incrementTimer is called at one second intervals to update the page
  -   pad is used to make sure that min or sec that are 1 digit can be displayed as 2
      digits by adding a leading zero
*/
/*
  Create 3 global variables: isRunning, timer and elapsedTime.
  Initialize them to false, null and 0 respectively.
*/

import pad from '../../../src/utils/pad.js';

const MS_IN_ONE_SEC = 1000;
const SECS_IN_ONE_MIN = 60;

let isRunning = false;
let timer = null;
let elapsedTime = 0;

/**
 * Initializes the stopwatch code by setting up event handlers for all the buttons
 */
function init()
{
  // Get the button element with an id of 'start' and put it in a variable
  // Do the same for the stop button and the reset button
  // Add an onclick event handler to each of the buttons

  // The function startTimer, stopTimer or resetTimer should be called when
  // the appropriate button is clicked
  const startButtonElem = document.getElementById('start');
  startButtonElem.onclick = startTimer;

  const stopButtonElem = document.getElementById('stop');
  stopButtonElem.onclick = stopTimer;

  const resetButtonElem = document.getElementById('reset');
  resetButtonElem.onclick = resetTimer;
}

/**
 * Starts the timer, but only if it is not already running
 */
function startTimer() {
  // if the timer is NOT running, start it by doing the following:
  // set the isRunning variable to true
  // call the function setInterval (which will call the function incrementTimer every second)
  // save the timer in the timer variable so you can stop the timer later on
  //end if

  if (!isRunning) {
    isRunning = true;
    timer = setInterval(incrementTimer, MS_IN_ONE_SEC);
  }
}

/**
 * Retrieves the minutes and seconds elements from the DOM
 */
function getMinutesSecondsElements() {
  const minutesElem = document.getElementById('minutes');
  const secondsElem = document.getElementById('seconds');

  return {minutesElem, secondsElem};
}

/**
 * Increments the elapsed time and updates the display
 */
function incrementTimer() {
  // increment the elapsedTime
  // calculate the number of minutes and seconds as follows:
  // minutes = the integer portion of (elapsedTime / 60)
  // seconds = the remainder when dividing elapsedTime by 60

  // call the function pad (to make sure there's a leading 0 on minutes if necessary)
  // call the function pad (to make sure there's a leading 0 on seconds if necessary)
  // write minutes to the element on the page
  // write seconds to the element on the page

  elapsedTime++;
  const minutes = Math.floor(elapsedTime / SECS_IN_ONE_MIN);
  const seconds = elapsedTime % SECS_IN_ONE_MIN;

  const {minutesElem, secondsElem} = getMinutesSecondsElements();
  minutesElem.innerText = pad(minutes);
  secondsElem.innerText = pad(seconds);
}

/**
 * Stops the timer if it is running
 */
function stopTimer() {
  // if the timer is running, stop it by doing the following:
  // set isRunning to false
  // call the function clearInterval to stop the timer
  // end if

  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
}

/**
 * Resets the timer to 0
 */
function resetTimer() {
  // stop the timer by calling stopTimer
  // set the elapsedTime back to 0
  // write 00 to the elements on the page for minutes and seconds

  stopTimer();
  elapsedTime = 0;

  const {minutesElem, secondsElem} = getMinutesSecondsElements();
  minutesElem.innerText = pad(0);
  secondsElem.innerText = pad(0);
}

// When the page has finished loading, call the function init
window.onload = init;
