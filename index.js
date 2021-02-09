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

    //Get data
    const {validCodes, isValid} = JoiCountry;

    //Validate based on array
    if (Array.isArray(validCodes) && validCodes.includes(value)) {
      return;
    }

    //Use validator
    else if (typeof isValid === 'function' && isValid(value)) {
      return;
    }

    //Invalid
    const errors = helpers.error('country');
    return {value, errors};
  },
});

/**
 * Setter for validator
 */
JoiCountry.setValidator = function(validator) {
  JoiCountry.isValid = validator;
};

/**
 * Setter for array of valid country codes
 */
JoiCountry.setValidCodes = function(codes) {
  JoiCountry.validCodes = codes;
};

//Export
module.exports = JoiCountry;
