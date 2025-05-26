class FormValues {
  /**
   * @type {string}
   * The username of the person filling the form
   */
  username;

  /**
   * @type {string}
   * The email address of the person filling the form
   */
  email;

  /**
   * @type {string}
   * The phone number of the person filling the form
   */
  phone;

  /**
   * @type {'school'|'college'|'trainee'|'employee'}
   * The profession of the person filling the form
   */
  profession = 'school';

  /**
   * @type {'beginner'|'intermediate'|'advanced'}
   * The experience level of the person filling the form
   */
  experience = 'beginner';

  /**
   * @param {FormValues} props
   */
  constructor(props) {
    Object.assign(this, props);
  }
}

export default FormValues;
