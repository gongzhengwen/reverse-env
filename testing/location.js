import { location } from '../src/index.js'

// ----------------------------------------------------------

try {
  let a = { a: 1000 }
  a.__proto__ = location
  console.log(a.href)
} catch (e) {
  console.log(e.stack)
}
