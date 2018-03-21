# Transition Utility Tailwind Plugin

## Installation

Add this plugin to your project:

```bash
# Install via npm
npm install --save-dev tailwindcss-transition
```

## Usage

This plugin exposes options for you to use. Here is the example for adding it to your project plugins

```js
require('tailwindcss-transition')({
  standard: 'all .3s ease',
  transitions: {
    'slow': 'all 2s ease',
    'normal-in-out-quad': 'all 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    'slow-in-out-quad': 'all 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  }  
})
```

This configuration would create the following classes:

```css
.transition { transition: all .3s ease; }
.transition-slow { transition: all 2s ease; }
.transition-normal-in-out-quad { transition: all 2s cubic-bezier(0.455, 0.03, 0.515, 0.955); }
.transition-slow-in-out-quad { transition: all 2s cubic-bezier(0.455, 0.03, 0.515, 0.955); }
```

As per the [tailwind plugin docs](https://tailwindcss.com/docs/plugins/) you are able to pass variants (repsonsive, hover etc) as a parameter.

```js
require('tailwindcss-transition')({
  standard: 'all .3s ease',
  transitions: {
    'slow': 'all 2s ease',
    'normal-in-out-quad': 'all 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    'slow-in-out-quad': 'all 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  },
  variants: ['responsive', 'hover'],
})
```

### Extra Thoughts (Not included in current version)

_note: this was just an idea_

It was taken into consideration that the plugin should accept a more complex set
of options, more akin to the following:

```js
property: [ 'color', 'all' ],
duration: [ '.3s', '2s' ],
timing: [ 'ease', 'ease-in-out' ],
delay: []
```

However this is on the back burner for the moment as it feels a little bit over-
engineered, creates complex class names and, although sounds good from a config
perspective, is probably overkill and cumbersome to use in real-world projects.
