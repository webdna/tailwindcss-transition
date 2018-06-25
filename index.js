const _ = require('lodash');
const className = 'transition'

module.exports = function({ standard, transitions, variants }) {
  return function({ addUtilities, e }) {
    let utilities = _.map(transitions, (val, name) => ({
      [`.${e(`${className}-${name}`)}`]: {
        transition: val
      }
    }))

    if (standard) utilities = _.concat(utilities,  { [`.${className}`]: { transition: standard } } );

    addUtilities(utilities, variants)
  }
}
