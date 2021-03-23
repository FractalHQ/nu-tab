const path = require('path')
const { typescript } = require('svelte-preprocess')

module.exports = {
  extensions: ['.svelte'],
  preprocess: [typescript()]
}
