import Plugin from './Plugin.js'

function PluginArray() {
  this[0] = new Plugin('PDF Viewer')
  this[1] = new Plugin('Chrome PDF Viewer')
  this[2] = new Plugin('Chromium PDF Viewer')
  this[3] = new Plugin('Microsoft Edge PDF Viewer')
  this[4] = new Plugin('WebKit built-in PDF')
  this.length = 5
}

export default PluginArray
