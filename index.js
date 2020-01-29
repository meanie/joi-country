'use strict';

/**
 * Extend Joi with country validation
 */
const JoiCountry = Joi => ({
  type: 'country',
  base: Joi.string(),
  messages: {
    country: 'must be a valid country code',
  },
  coerce(value) {
    value = value.toUpperCase();
    return {value};
  },
  validate(value, helpers) {
    if (!JoiCountry.isValid(value)) {
      const errors = helpers.error('country');
      return {value, errors};
    }
  },
});

/**
 * Setter for validator
 */
JoiCountry.setValidator = function(validator) {
  JoiCountry.isValid = validator;
};

//Export
module.exports = JoiCountry;
