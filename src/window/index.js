import WindowProperties from './WindowProperties.js'
import Element from '../element/index.js'

import document from '../document/index.js'
import navigator from '../navigator/index.js'
import location from '../location/index.js'
import localStorage from '../storage/index.js'

import { protoExtend } from '../shared/extend.js'

function Window() {
  this.document = document
  this.navigator = navigator
  this.location = location
  this.localStorage = localStorage
}

protoExtend(Window, WindowProperties)

Window.Element = Element

export default Window
