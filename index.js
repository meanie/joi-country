/* eslint no-unused-vars: off */
'use strict';

/**
 * Extend Joi with country validation
 */
const JoiCountry = Joi => ({
  base: Joi.string(),
  name: 'string',
  language: {
    country: 'needs to be a valid country code',
  },
  rules: [
    {
      name: 'country',
      setup(params) {
        this._flags.country = true;
      },
      validate(params, value, state, options) {
        if (!JoiCountry.isValid(value)) {
          return this.createError('string.country', {value}, state, options);
        }
        return value.toUpperCase();
      },
    },
  ],
});

/**
 * Setter for validator
 */
JoiCountry.setValidator = function(validator) {
  JoiCountry.isValid = validator;
};

//Export
module.exports = JoiCountry;
