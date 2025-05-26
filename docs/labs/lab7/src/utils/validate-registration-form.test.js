import {validateUsername, validateEmail, validatePhone, validateProfession, validateExperience} from './validate-registration-form.js';

describe('validate-registration-form', function() {
  describe('validateUsername', function() {
    it('should return true for a valid username', function() {
      expect(validateUsername('validUser')).toBe(true);
    });

    it('should return false for a username shorter than 3 characters', function() {
      expect(validateUsername('ab')).toBe(false);
    });

    it('should return false for a username that is 3 characters', function() {
      expect(validateUsername('abc')).toBe(false);
    });

    it('should return false for an empty username', function() {
      expect(validateUsername('')).toBe(false);
    });
  });

  describe('validateEmail', function() {
    it('should return true for a valid email', function() {
      expect(validateEmail('test@email.com')).toBe(true);
    });

    it('should return true for an email with a non-english character', async () => {
      expect(validateEmail('emaí@test.com')).toBe(true);
    });

    it('should return false for an invalid email', function() {
      expect(validateEmail('invalid-email')).toBe(false);
    });

    it('should return false for an empty email', function() {
      expect(validateEmail('')).toBe(false);
    });
  });

  describe('validatePhone', function() {
    it('should return true for a valid 10-digit phone number', function() {
      expect(validatePhone('1234567890')).toBe(true);
    });

    it('should return true for a phone number with dashes characters', function() {
      expect(validatePhone('123-456-7890')).toBe(true);
    });

    it('should return true for a phone number with parenthesis', async () => {
      expect(validatePhone('(123)456-7890')).toBe(true);
    });

    it('should return true for a phone number with parenthesis and a space', async () => {
      expect(validatePhone('(123) 456-7890')).toBe(true);
    });

    it('should return false for a phone number shorter than 10 digits', function() {
      expect(validatePhone('12345')).toBe(false);
    });

    it('should return false for a phone number longer than 10 digits', function() {
      expect(validatePhone('12345678901')).toBe(false);
    });

    it('should return false for an empty phone number', function() {
      expect(validatePhone('')).toBe(false);
    });
  });

  describe('validateProfession', function() {
    it('should return true for a valid profession', function() {
      expect(validateProfession('school')).toBe(true);
      expect(validateProfession('college')).toBe(true);
      expect(validateProfession('trainee')).toBe(true);
      expect(validateProfession('employee')).toBe(true);
    });

    it('should ignore capitals for valid professions', async () => {
      expect(validateProfession('SCHOOL')).toBe(true);
      expect(validateProfession('College')).toBe(true);
      expect(validateProfession('tRaInEe')).toBe(true);
    });

    it('should return false for an invalid profession', function() {
      expect(validateProfession('invalid')).toBe(false);
    });

    it('should return false for an empty profession', function() {
      expect(validateProfession('')).toBe(false);
    });
  });

  describe('validateExperience', function() {
    it('should return true for a valid experience level', function() {
      expect(validateExperience('beginner')).toBe(true);
      expect(validateExperience('intermediate')).toBe(true);
      expect(validateExperience('advanced')).toBe(true);
    });

    it('should ignore capitals for valid experience levels', async () => {
      expect(validateExperience('BEGINNER')).toBe(true);
      expect(validateExperience('Intermediate')).toBe(true);
      expect(validateExperience('AdVaNcEd')).toBe(true);
    });

    it('should return false for an invalid experience level', function() {
      expect(validateExperience('expert')).toBe(false);
    });

    it('should return false for an empty experience level', function() {
      expect(validateExperience('')).toBe(false);
    });
  });
});
