import './general.js';

import FormValues from './classes/form-values.js';
import validateRegistrationForm from './utils/validate-registration-form.js';

// Import the toastr library for notifications
import toastr from 'toastr';
import 'toastr/toastr.scss';

class Home {
  //* =============== METHODS =============== */
  /**
   * Get all the values from the form fields and return them as an object
   * @returns {FormValues}
   */
  getFormValues = () => {
    return new FormValues({
      username: this.$username.value,
      email: this.$email.value,
      phone: this.$phone.value,
      profession: this.$profession.value,
      experience: document.querySelector('input[name="experience"]:checked').value,
      comment: this.$comment.value,
    });
  };

  /**
   * Reset the form fields to their default values
   */
  resetForm() {
    this.$username.value = '';
    this.$email.value = '';
    this.$phone.value = '';
    this.$profession.value = 'school';
    this.$experience.checked = true;
    this.$comment.value = '';
    this.clearErrors();
  }

  /**
   * Highlight the form fields that have errors
   */
  highlightErrors(result) {
    if(!result.username) {this.$username.classList.add('is-invalid');}
    if(!result.email) {this.$email.classList.add('is-invalid');}
    if(!result.phone) {this.$phone.classList.add('is-invalid');}
    if(!result.profession) {this.$profession.classList.add('is-invalid');}
    if(!result.experience) {this.$experience.classList.add('is-invalid');}
    if(!result.comment) {this.$comment.classList.add('is-invalid');}
  }

  /**
  * Clear all error styles from the form fields
  */
  clearErrors() {
    this.$username.classList.remove('is-invalid');
    this.$email.classList.remove('is-invalid');
    this.$phone.classList.remove('is-invalid');
    this.$profession.classList.remove('is-invalid');
    this.$experience.forEach(input => input.classList.remove('is-invalid'));
    this.$comment.classList.remove('is-invalid');
  }

  /**
   * Handle submission of the form
   *
   * @param {*} formValues
   * @returns
   */
  submitForm = async (formValues) => {
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues),
    };
    const SERVER_URL = SERVER_URL || 'http://localhost:3000/participants';

    // Hide the submit button and show the loading indicator while the request is live
    this.$submit.classList.add('visually-hidden');
    this.$loadingIndicator.classList.remove('visually-hidden');

    const fetchResponse = await fetch(SERVER_URL, requestOptions);

    // Show the submit button and hide the loading indicator after the request is complete
    this.$submit.classList.remove('visually-hidden');
    this.$loadingIndicator.classList.add('visually-hidden');

    if (!fetchResponse.ok) {
      toastr.error(`A ${fetchResponse.status} error occurred while submitting the form: "${fetchResponse.statusText}". Please try again.`);
      return; // Short circuit
    }

    const responseBody = await fetchResponse.json();
    toastr.success(`Thank you for your submission, ${responseBody.username}!`);
    this.resetForm();
  };

  //* =============== EVENT HANDLERS =============== */
  /**
   * Handle the form submission event
   */
  onFormSubmit = (event) => {
    // make sure the form is not submitted
    event.preventDefault();
    const formValues = this.getFormValues();

    const validationResult = validateRegistrationForm(formValues);
    if (validationResult.isValid) {
      console.log('Form is valid:', validationResult, formValues);
      // clear the errors
      this.clearErrors();
      this.submitForm(formValues);
    } else {
      console.log('Form is invalid:', validationResult, formValues);
      this.clearErrors();
      this.highlightErrors(validationResult.result);
    }
  };

  //* =============== CONSTRUCTOR =============== */
  constructor() {
    // Get references to elements on the page
    this.$form = document.querySelector('#registrationForm');
    this.$username = document.querySelector('#username');
    this.$email = document.querySelector('#email');
    this.$phone = document.querySelector('#phone');
    this.$profession = document.querySelector('#profession');
    this.$experience = document.querySelectorAll('#experience');
    this.$comment = document.querySelector('#comment');
    this.$submit = document.querySelector('#submit');
    this.$loadingIndicator = document.querySelector('#loadingIndicator');

    // Add the submission event listener to the form
    this.$form.addEventListener('submit', this.onFormSubmit);
  }
}

window.onload = () => {
  window.home = new Home();
};
