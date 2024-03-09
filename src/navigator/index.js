import PluginArray from './PluginArray.js'

function Navigator() {
  this.userAgent =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
  this.webdriver = false
  this.doNotTrack = null
  this.language = 'zh-CN'
  this.languages = ['zh-CN', 'zh']
  this.platform = 'MacIntel'
  this.vendor = 'Google Inc.'
  this.plugins = new PluginArray()
}

Navigator.prototype.javaEnabled = function () {
  return false
}

const navigator = new Navigator()

export default navigator
