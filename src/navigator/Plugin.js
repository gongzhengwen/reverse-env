import MimeType from './MimeType.js'

function Plugin(name, options) {
  this.name = name
  this.options = options
}

const getMimeType = function (plugin) {
  return new MimeType(plugin)
}

Plugin = new Proxy(Plugin, {
  construct: function (target, args) {
    const instance = new target(...args)

    Object.defineProperties(instance, {
      0: {
        get: getMimeType.bind(null, instance)
      },
      1: {
        get: getMimeType.bind(null, instance)
      }
    })

    return instance
  }
})

export default Plugin
