const Config = require('jest').Config;

const config = {
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
};

module.exports = config;
