# @meanie/joi-country

[![npm version](https://img.shields.io/npm/v/@meanie/joi-country.svg)](https://www.npmjs.com/package/@meanie/joi-country)
[![node dependencies](https://david-dm.org/meanie/joi-country.svg)](https://david-dm.org/meanie/joi-country)
[![github issues](https://img.shields.io/github/issues/meanie/joi-country.svg)](https://github.com/meanie/joi-country/issues)


A Joi extension to validate countries

![Meanie](https://raw.githubusercontent.com/meanie/meanie/master/meanie-logo-full.png)

### Features
- Extends string validation to include a country code validator
- Uses a supplied validator function to avoid relying on a fixed country codes list
- Simply load or create the validator you want, and pass it to the Joi extension

### Installation

```shell
#npm
npm install @meanie/joi-country

#yarn
yarn add @meanie/joi-country
```

### Usage
```js
const Joi = require('@hapi/joi');
const JoiCountry = require('@meanie/joi-country');

//Validator
const countryCodeValidator = function(code) {
  //...some validation against a list of country codes
};

//Set validator
JoiCountry.setValidator(countryCodeValidator);

module.exports = Joi.extend(JoiCountry);
```

### Examples

```js
const schema = Joi.object({
  country: Joi.string().country(),
});
```

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [meanie-joi-country issue tracker](https://github.com/meanie/joi-country/issues).

## Contributing

Pull requests are welcome! If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## License

(MIT License)

Copyright 2019, [Adam Reis](http://adam.reis.nz)
