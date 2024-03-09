import EventTarget from '../event_target/index.js'
import { protoExtend } from '../shared/extend.js'

function WindowProperties() {}

protoExtend(WindowProperties, EventTarget)

export default WindowProperties
