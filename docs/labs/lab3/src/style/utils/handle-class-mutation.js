//? Joshua Evans - 2025-04-22
/**
 * @typedef HandleMutationParams
 * @prop {MutationRecord[]} mutationRecords Records of the mutation triggering the callback
 * @prop {HTMLElement} element The element that will be mutated
 * @prop {string} className The name of the class being mutated
 * @prop {function(Event)} onClassAdded Callback to be called when the class is added
 * @prop {function(Event)} onClassRemoved Callback to be called when the class is removed
 */

/**
 * Handle class mutation events by running callbacks when a designated class is added or removed
 *
 * @param {HandleMutationParams} params
 */
const handleClassMutation = (params) => {
  const {element, className, onClassAdded = () => {}, onClassRemoved = () => {}} = params;

  /**
   * @param {MutationRecord[]} mutationRecords
   */
  const handleMutation = (mutationRecords) => {
    mutationRecords.forEach((mutationRecord) => {
      // Do not run if the mutation is not a class update
      if (mutationRecord.type !== 'attributes' || mutationRecord.attributeName !== 'class') {
        return;
      }

      const doesContainsClassName = mutationRecord.target.classList.contains(className);
      const didContainClassName = mutationRecord.oldValue.includes(className);

      // Run the "onAdded" callback if the class was newly added
      if (doesContainsClassName && !didContainClassName) {
        onClassAdded(mutationRecord.target);
      }

      // Run the "onRemoved" callback if the class was just removed
      if (!doesContainsClassName && didContainClassName) {
        onClassRemoved(mutationRecord.target);
      }
    });
  };

  const observer = new MutationObserver(handleMutation);
  observer.observe(element, {
    attributes: true,
    attributeFilter: ['class'],
    attributeOldValue: true,
  });

  // If the class is already present, run the "onAdded" callback
  if (element.classList.contains(className)) {
    onClassAdded(element);
  }
};

export default handleClassMutation;
