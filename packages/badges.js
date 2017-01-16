'use strict'

const user = process.argv[2]

console.log(`
  ![](https://img.shields.io/badge/npm-%3E%3D3.0.0-orange.svg?style=flat-square)
  ![](https://img.shields.io/badge/Node.js-%3E%3D4.0.0-orange.svg?style=flat-square)

  [![Sauce Test Status](https://saucelabs.com/browser-matrix/${user}.svg)](https://saucelabs.com/u/${user})
`)