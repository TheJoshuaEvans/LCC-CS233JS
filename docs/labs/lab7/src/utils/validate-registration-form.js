/** @typedef {import('../classes/form-values.js').default} FormValues */

/**
 * Validate a username. Usernames must be longer than 3 characters.
 *
 * @param {string} name Username to validate
 * @returns {boolean} True if the username is valid, false otherwise
 */
function validateUsername(name) {
  if (!name || typeof name !== 'string') {
    return false;
  }

  if (name.length <= 3) {
    return false;
  }

  return true;
}

/**
 * Validates an email address.
 *
 * @param {string} email Email to validate
 * @returns {boolean} True if the email is valid, false otherwise
 */
function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    return false;
  }

  // This regex is fully inclusive and will allow for any kind of special characters (like "í" or "ñ")
  const emailRegex = /^\S+@\S+\.\S{2,}$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  return true;
}

/**
 * Validate a phone number. Valid phone numbers must be 10 digit strings and can be in the following formats:
 * - 1234567890
 * - 123-456-7890
 * - (123)456-7890
 * - (123) 456-7890
 *
 * @param {string} phone
 * @returns {boolean} True if the phone number is valid, false otherwise
 */
function validatePhone(phone) {
  if (!phone || typeof phone !== 'string') {
    return false;
  }

  // 10 is the fewest possible number of digits in a phone number
  if (phone.length < 10) {
    return false;
  }

  // Use different regex patterns for each format. If any of them match, the phone number is valid
  const phoneRegexes = [
    /^\d{10}$/, // 1234567890
    /^\d{3}-\d{3}-\d{4}$/, // 123-456-7890
    /^\(\d{3}\)\d{3}-\d{4}$/, // (123)456-7890
    /^\(\d{3}\) \d{3}-\d{4}$/, // (123) 456-7890
  ];
  const phoneRegexMatch = phoneRegexes.find(regex => regex.test(phone));
  if (!phoneRegexMatch) {
    return false;
  }

  return true;
}

/**
 * Validates a profession, ensuring it is one of the allowed values
 *
 * @param {'school'|'college'|'trainee'|'employee'} profession The profession to validate
 * @returns {boolean} True if the profession is valid, false otherwise
 */
function validateProfession(profession) {
  return ['school', 'college', 'trainee', 'employee'].includes(profession.toLowerCase());
}

/**
 * Validates the experience level, ensuring it is one of the allowed values
 *
 * @param {'beginner'|'intermediate'|'advanced'} experience
 * @returns {boolean} True if the experience level is valid, false otherwise
 */
function validateExperience(experience) {
  return ['beginner', 'intermediate', 'advanced'].includes(experience.toLowerCase());
}

/**
 * Validate all of the values in the registration form
 *
 * @param {FormValues} formValues
 */
const validateRegistrationForm = (formValues) => {
  const result = {
    username: validateUsername(formValues.username),
    email: validateEmail(formValues.email),
    phone: validatePhone(formValues.phone),
    profession: validateProfession(formValues.profession),
    experience: validateExperience(formValues.experience),
  };

  let field, isValid = true;
  for(field in result) {
    isValid = isValid && result[field];
  }

  return {isValid, result};
};

export default validateRegistrationForm;
export {
  validateUsername,
  validateEmail,
  validatePhone,
  validateProfession,
  validateExperience,
};
