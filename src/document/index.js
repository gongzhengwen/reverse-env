import WindowProperties from '../window/WindowProperties.js'

import HTMLAnchorElement from './HTMLAnchorElement.js'
import HTMLDivElement from './HTMLDivElement.js'
import HTMLCanvasElement from './HTMLCanvasElement.js'
import HTMLFormElement from './HTMLFormElement.js'

import EventTarget from '../event_target/index.js'
import location from '../location/index.js'
import { protoExtend } from '../shared/extend.js'

function createElement(tagName) {
  if (tagName === 'a') {
    return new HTMLAnchorElement(HTMLAnchorElement.__uid__)
  } else if (tagName === 'div') {
    return new HTMLDivElement(HTMLDivElement.__uid__)
  } else if (tagName === 'canvas') {
    return new HTMLCanvasElement(HTMLCanvasElement.__uid__)
  } else if (tagName === 'form') {
    return new HTMLFormElement(HTMLFormElement.__uid__)
  }
}

function appendChild(element) {
  if (element instanceof HTMLFormElement) {
    WindowProperties.prototype[element.id] = element
  }
}

function getElementsByTagName(tagName) {
  if (tagName === 'base') {
    return []
  }
}

function Document() {
  this.head = {}
  this.cookie = ''
  this.location = location
  this.documentElement = {}
  this.body = {}
}

protoExtend(Document, EventTarget)

Document.prototype.appendChild = appendChild
Document.prototype.createElement = createElement
Document.prototype.getElementsByTagName = getElementsByTagName

const document = new Document()

document.body.appendChild = appendChild

const cache = {}
Object.defineProperty(document, 'cookie', {
  get: function () {
    return cache['cookie'] || ''
  },
  set: function (value) {
    const cookieStr = this.cookie + value + '; '
    cache['cookie'] = cookieStr
  }
})

let _all_number = 0

// hack: can‘t be fully simulated in Node.js environment
Object.defineProperty(document, 'all', {
  get: function () {
    return [, , new Array(cache['all'] || 3892)][_all_number++]
  },
  set: function (value) {
    cache['all'] = value
  }
})

export default document
