import HTMLElement from './HTMLElement.js'
import { protoExtend } from '../shared/extend.js'

HTMLAnchorElement.__uid__ = '__reverse__html_anchor_element__'

function HTMLAnchorElement() {
  if (arguments[0] === HTMLAnchorElement.__uid__) {
  } else if (this instanceof HTMLAnchorElement) {
    throw new TypeError('Illegal constructor')
  } else {
    throw new TypeError(
      `Failed to construct 'HTMLAnchorElement': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`
    )
  }
}

protoExtend(HTMLAnchorElement, HTMLElement)

HTMLAnchorElement.prototype.host = ''
HTMLAnchorElement.prototype.href = ''

const __cache__ = {}

Object.defineProperties(HTMLAnchorElement.prototype, {
  host: {
    get: function () {
      return __cache__['host'] || ''
    },
    set: function () {
      __cache__['host'] = arguments[0]
      return arguments[0]
    }
  },
  href: {
    get: function () {
      return __cache__['href'] || ''
    },
    set: function () {
      this.host = arguments[0].split('/')[2]
      __cache__['href'] = arguments[0]
      return arguments[0]
    }
  }
})

export default HTMLAnchorElement
