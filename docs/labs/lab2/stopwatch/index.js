import pad from '../../../src/utils/pad.js';

const MS_IN_ONE_SEC = 1000;
const SECS_IN_ONE_MIN = 60;

// Global reference to the stopwatch handler
let stopwatchHandler = null;

class StopwatchHandler {
  //#region --------- Properties ---------
  /** If the stopwatch is currently running */
  isRunning = false;

  /** A reference to the interval that actually operates the timer */
  timer = null;

  /** The total amount of time that has elapsed so far */
  elapsedTime = 0;
  //#endregion

  //#region --------- Initialization ---------
  /**
   * Initialize the stopwatch code by setting up event handlers for all the buttons
   */
  constructor() {
    const startButtonElem = document.getElementById('start');
    startButtonElem.onclick = startTimerEvent;

    const stopButtonElem = document.getElementById('stop');
    stopButtonElem.onclick = stopTimerEvent;

    const resetButtonElem = document.getElementById('reset');
    resetButtonElem.onclick = resetTimerEvent;
  }
  //#endregion

  //#region --------- Methods ---------
  /**
   * Retrieves the minutes and seconds elements from the DOM
   */
  getMinutesSecondsElements = () => {
    const minutesElem = document.getElementById('minutes');
    const secondsElem = document.getElementById('seconds');

    return {minutesElem, secondsElem};
  };

  /**
   * Increments the elapsed time and updates the display
   */
  incrementTimer = () => {
    this.elapsedTime++;
    const minutes = Math.floor(this.elapsedTime / SECS_IN_ONE_MIN);
    const seconds = this.elapsedTime % SECS_IN_ONE_MIN;

    const {minutesElem, secondsElem} = this.getMinutesSecondsElements();
    minutesElem.innerText = pad(minutes);
    secondsElem.innerText = pad(seconds);
  };

  /**
   * Starts the timer if it's not already running
   */
  startTimer = () => {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timer = setInterval(this.incrementTimer, MS_IN_ONE_SEC);
    }
  };

  /**
   * Stops the timer if it is running
   */
  stopTimer = () =>{
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.timer);
    }
  };

  /**
   * Resets the timer to 0
   */
  resetTimer = () => {
    this.stopTimer();
    this.elapsedTime = 0;

    const {minutesElem, secondsElem} = this.getMinutesSecondsElements();
    minutesElem.innerText = pad(0);
    secondsElem.innerText = pad(0);
  };
  //#endregion
}

//#region --------- Event Handlers ---------
// Note: Event handlers are defined outside the class to avoid confusion with the `this` keyword
/**
 * Event runs when the "start" button is clicked
 */
function startTimerEvent() {
  stopwatchHandler.startTimer();
};

/**
 * Event runs when the "stop" button is clicked
 */
function stopTimerEvent() {
  stopwatchHandler.stopTimer();
}

/**
 * Event runs when the "reset" button is clicked
 */
function resetTimerEvent() {
  stopwatchHandler.resetTimer();
}
//#endregion

// When the page has finished loading initialize the handler
window.onload = () => {stopwatchHandler = new StopwatchHandler();};
