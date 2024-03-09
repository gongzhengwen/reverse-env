import './rewrite/index.js'

import Window from './window/index.js'

export { default as EventTarget } from './event_target/index.js'
export { default as Element } from './element/index.js'

export { default as document } from './document/index.js'
export { default as navigator } from './navigator/index.js'
export { default as location } from './location/index.js'
export { default as localStorage } from './storage/index.js'

export { default as HTMLElement } from './document/HTMLElement.js'
export { default as HTMLFormElement } from './document/HTMLFormElement.js'

export const window = new Proxy(new Window(), {
  get: function (target, prop, receiver) {
    if (['window', 'parent', 'top', 'self', 'frames'].includes(prop)) {
      return receiver
    }
    return target[prop]
  },
  has: function (target, prop) {
    return prop in target
  },
  set: function (target, prop, value) {
    target[prop] = value
    return true
  }
})

export const top = window
export const parent = window
export const self = window
export const frames = window

export default window
