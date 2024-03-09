function Location() {
  this.hostname = ''
  this.protocol = ''
  this.href = ''
  this.host = ''
}

const location = new Location()

const cache = {}
Object.defineProperty(location, 'href', {
  get: function () {
    if (this === location) {
      return cache['href'] || ''
    }
    throw new TypeError('Illegal invocation')
  },
  set: function (value) {
    cache['href'] = value
    const url = new URL(value)
    this.hostname = url.hostname
    this.protocol = url.protocol
    this.host = url.host
  }
})

export default location
