const _ = require('lodash');
const className = 'transition'

module.exports = function({ standard, transitions, variants }) {
  return function({ addUtilities, e }) {
    let utilities = _.map(transitions, (val, name) => ({
      [`.${className}-${e(name)}`]: {
        transition: val
      }
    }))

    if (standard) utilities = _.assignIn(utilities, { [`.${className}`]: { transition: standard } });

    addUtilities(utilities, variants)
  }
}
