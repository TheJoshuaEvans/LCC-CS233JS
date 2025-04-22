//* Joshua Evans - 2025-04-19
import handleClassMutation from './utils/handle-class-mutation.js';

/**
 * Special class handles management of special styling functionality that takes advantage of JavaScript
 */
class StyleHandler {
  /**
   * Map that connects element IDs to running die animation timers
   */
  runningDieAnimationTimers = {};

  /**
   * Add classes that indicate that an element is selected
   *
   * @param {HTMLElement} element
   */
  addSelectedClasses = (element) => {
    element.classList.add('border-warning');
    element.classList.add('border-5');
  };

  /**
   * Remove classes that indicate an element is selected
   *
   * @param {HTMLElement} element
   */
  removeSelectedClasses = (element) => {
    element.classList.remove('border-warning');
    element.classList.remove('border-5');
  };

  /**
   * Removes all numbered dice classes from an element (die-1 to die-6)
   *
   * @param {HTMLElement} element
   */
  removeAnimDieNumClasses = (element) => {
    for (let i = 1; i <= 6; i++) {
      element.classList.remove('die-anim-' + i);
    }
  };

  /**
   * Begins animating a die by establishing an interval that randomly sets the die number
   *
   * @param {HTMLElement} element
   */
  animateDie = (element) => {
    const dieId = element.getAttribute('id');
    const interval = setInterval(() => {
      this.removeAnimDieNumClasses(element);
      const randomDieInt = Math.floor(Math.random() * 6) + 1;
      element.classList.toggle('die-anim-' + randomDieInt);
    }, 100);
    this.runningDieAnimationTimers[dieId] = interval;
  };

  /**
   * Clear the die animation for the given die element
   *
   * @param {HTMLElement} element
   */
  clearDieAnimation = (element, newDieClass) => {
    const dieId = element.getAttribute('id');
    if (this.runningDieAnimationTimers[dieId]) {
      clearInterval(this.runningDieAnimationTimers[dieId]);
      this.removeAnimDieNumClasses(element);
      delete this.runningDieAnimationTimers[dieId];
    }

    if (newDieClass) {
      this.removeAnimDieNumClasses(element);
      element.classList.add(newDieClass);
    }
  };

  constructor() {
    // Add the style mutation handlers to the die elements
    this.die = Array.from(document.querySelectorAll('.die'));
    this.die.forEach((dieElement) => {
      handleClassMutation({
        element: dieElement, className: 'selected',
        onClassAdded: this.addSelectedClasses, onClassRemoved: this.removeSelectedClasses,
      });

      handleClassMutation({
        element: dieElement, className: 'die-animated',
        onClassAdded: this.animateDie, onClassRemoved: this.clearDieAnimation,
      });
    });
  }
}

export default StyleHandler;
