const _ = require('lodash');
const className = 'transition'

module.exports = function({ default, transitions, variants }) {
  return function({ addUtilities, e }) {
    const utilities = _.map(transitions, (val, name) => ({
      [`.${className}-${e(name)}`]: {
        transition: val
      }
    }))

    if (default) utilities = _.assignIn(utilities, { [`.${className}-${e(name)}`]: { transition: default } });

    addUtilities(utilities, variants)
  }
}
